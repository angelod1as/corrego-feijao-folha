const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = async ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  // select only markdown
  if (node.internal.type === `MarkdownRemark`) {
    // Making type
    const makeType = () => {
      const split = node.fileAbsolutePath.split('content/')[1];
      let type = '';
      if (split.indexOf('/') > 0) {
        [type] = split.split('/');
      } else {
        type = 'pages';
      }
      return type;
    };

    const makeSlug = () => {
      const split = node.fileAbsolutePath.split('content/')[1];
      let slug = '';
      if (split.indexOf('/') > 0) {
        [, slug] = split.split('/');
      } else {
        slug = split;
      }
      return slug.replace('.mdx', '').replace('.md', '');
    };

    // create slugs
    await createNodeField({
      node,
      name: `slug`,
      value: makeSlug(),
    });

    // Making type
    await createNodeField({
      node,
      name: `type`,
      value: makeType(),
    });

    const basePath = `content`;

    // create fullPaths
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
  // GET MENU
  // #########

  const getFront = () => {
    return graphql(`
      query {
        allMarkdownRemark(filter: { frontmatter: { home: { eq: true } } }) {
          edges {
            node {
              frontmatter {
                title
                menu
                home
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
        allMarkdownRemark(filter: { frontmatter: { home: { ne: true } } }) {
          edges {
            node {
              frontmatter {
                title
                menu
                home
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

  const pages = await getPages();

  if (pages.errors) throw new Error(pages.errors);

  // creating main home page
  createPage({
    path: '/',
    component: path.resolve('src/templates/home.js'),
    context: {
      front,
      pages,
    },
  });

  // creating each sub pages
  pages.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.fullPath,
      component: path.resolve(`src/templates/item.js`),
      context: {},
    });
  });
};
