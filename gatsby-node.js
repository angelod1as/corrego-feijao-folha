const path = require(`path`);

const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = async ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  // select only markdown
  if (node.internal.type === `MarkdownRemark`) {
    const basePath = `content`;

    // create fullPaths for later
    const fullPath = createFilePath({ node, getNode, basePath });

    await createNodeField({
      node,
      name: `fullPath`,
      value: fullPath,
    });
  }
};

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  // #########
  // FRONT PAGE
  // #########

  const getFront = () => {
    return graphql(`
      query {
        allMarkdownRemark(filter: { frontmatter: { home: { eq: true } } }) {
          edges {
            node {
              frontmatter {
                title
                lead
                names
                createdAt(formatString: "DD.MMM.YYYY - kk:mm", locale: "pt-BR")
                updatedAt(formatString: "DD.MMM.YYYY - kk:mm", locale: "pt-BR")
              }
              html
            }
          }
        }
      }
    `);
  };

  const front = await getFront();

  if (front.errors) throw new Error(front.errors);

  // #########
  // PAGES
  // #########
  const getPages = () => {
    return graphql(`
      query {
        allMarkdownRemark(
          filter: { frontmatter: { person: { eq: true } } }
          sort: { fields: frontmatter___order, order: ASC }
        ) {
          edges {
            node {
              frontmatter {
                title
                opening
                home
                lead
                names
                createdAt(formatString: "DD.MMM.YYYY - kk:mm", locale: "pt-BR")
                updatedAt(formatString: "DD.MMM.YYYY - kk:mm", locale: "pt-BR")
              }
              html
              fields {
                fullPath
              }
            }
          }
        }
      }
    `);
  };

  const pages = await getPages();

  if (pages.errors) throw new Error(pages.errors);

  // creating main home page
  createPage({
    path: '/',
    component: path.resolve('src/templates/template.js'),
    context: {
      front: true,
    },
  });

  // creating each sub pages
  pages.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.fullPath,
      component: path.resolve(`src/templates/template.js`),
      context: {
        fullPath: node.fields.fullPath,
        front: false,
      },
    });
  });
};
