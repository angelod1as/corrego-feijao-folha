const path = require(`path`);
const replace = require('replace-in-file');

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

exports.onPostBuild = () => {
  // Adding SSI comments
  // defining SSI comments
  const SSI = {
    beforeHtml: `
    <!--#set var="section" value="#{section}"-->
    <!--#set var="section_slug" value="#{section_slug}"-->
    <!--#set var="special" value="#{special}"-->
    <!--#set var="special_url" value="#{special_url}"-->
    <!--#set var="show_ads" value="true"-->
    <!--#set var="show_header_folha" value="true"-->
    <!--#set var="show_header_news" value="false"-->
    <!--#set var="show_title_header" value="false"-->
    <!--#include virtual="/virtual/3.0/arte/script-app.inc"-->
    `,
    insideHead: `<!--#include virtual='/virtual/3.0/arte/head__full-page.inc'-->`,
    endOfBody: `<!--#include virtual="/virtual/3.0/arte/article-graphic__full-page_after.inc"-->`,
    afterBody: `<!--#include virtual="/virtual/3.0/arte/header__full-page.inc"-->`,
  };

  // defining regexes
  const exp = {
    beforeHtml: /<SSI-before-html>(.*?)<\/SSI-before-html>/g,
    insideHead: /<SSI-inside-head>(.*?)<\/SSI-inside-head>/g,
    endOfBody: /<SSI-end-of-body>(.*?)<\/SSI-end-of-body>/g,
    afterBody: /<SSI-after-body>(.*?)<\/SSI-after-body>/g,
  };

  // replacing
  replace.sync({
    files: ['./public/**/*.html', './public/*.html'],
    from: [exp.beforeHtml, exp.insideHead, exp.afterBody, exp.endOfBody],
    to: [SSI.beforeHtml, SSI.insideHead, SSI.afterBody, SSI.endOfBody],
  });
};
