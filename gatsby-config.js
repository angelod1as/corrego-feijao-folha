const path = require(`path`);

module.exports = {
  pathPrefix: `/cotidiano/2020/01/memorias-do-feijao`,
  siteMetadata: {
    title: `Memórias do Feijão`,
    description: `Depois de 1 ano do rompimento da barragem de Brumadinho, moradores contam histórias e relembram como era o pequeno bairro do Córrego do Feijão.`,
    author: `@_cronofobico`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-styled-components`,
    // 'gatsby-plugin-transition-link',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: path.join(__dirname, `src`),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: path.join(__dirname, `content`),
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-relative-images`,
          },
          'gatsby-remark-unwrap-images',
          'gatsby-remark-picture',
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 2000,
              linkImagesToOriginal: false,
            },
          },
          `gatsby-remark-lazy-load`,
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_blank',
              rel: 'noopener noreferrer',
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: path.join(__dirname, `src`, `svg`),
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Memórias do Feijão`,
        short_name: `memorias-do-feijao`,
        start_url: `/`,
        background_color: `#19006A`,
        theme_color: `#19006A`,
        display: `standalone`,
        icon: `src/images/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-html-comments`,
      options: {
        files: ['./public/**/*.html', './public/*.html'],
        comment: [
          {
            regexp: /<ssi-before-html>(.*?)<\/ssi-before-html>/g,
            comment: `
            <!--#set var="image" value="//arte.folha.uol.com.br/cotidiano/2020/01/memorias-do-feijao/social.jpg"-->
            <!--#set var="description" value="Depois de 1 ano do rompimento da barragem de Brumadinho, moradores contam histórias e relembram como era o pequeno bairro do Córrego do Feijão."-->
            <!--#set var="section" value="cotidiano"-->
            <!--#set var="section_slug" value="cotidiano"-->
            <!--#set var="special" value="tragédia em brumadinho"-->
            <!--#set var="special_url" value="https://www1.folha.uol.com.br/cotidiano/tragedia-em-brumadinho/"-->
            <!--#set var="url" value="/cotidiano/2020/01/memorias-do-feijao/"-->
            <!--#set var="title" value="Memórias do Feijão"-->
            <!--#set var="show_ads" value="true"-->
            <!--#set var="show_header_folha" value="true"-->
            <!--#set var="show_header_news" value="false"-->
            <!--#set var="show_title_header" value="true"-->
            <!--#include virtual="/virtual/3.0/arte/script-app.inc"-->`,
          },
          {
            regexp: /<ssi-inside-head>(.*?)<\/ssi-inside-head>/g,
            comment: `
            <!--#include virtual='/virtual/3.0/arte/head__full-page.inc'-->`,
          },
          {
            regexp: /<ssi-end-of-body>(.*?)<\/ssi-end-of-body>/g,
            comment: `
            <!--#include virtual="/virtual/3.0/arte/article-graphic__full-page_after.inc"-->`,
          },
          {
            regexp: /<ssi-header>(.*?)<\/ssi-header>/g,
            comment: `
            <!--#include virtual="/virtual/3.0/arte/header__full-page.inc"-->`,
          },
        ],
      },
    },
  ],
};
