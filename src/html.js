import React from 'react';
import ReactDOMServer from 'react-dom/server';
import PropTypes from 'prop-types';
import parse from 'html-react-parser';
import Fragment from 'react-dom-fragment';

/* eslint react/destructuring-assignment: 0 */
/* eslint react/forbid-prop-types: 0 */
/* eslint react/require-default-props: 0 */

export default function HTML(props) {
  const serverBeforeHtml = `
  <!--#set var="section" value="#{section}"-->
  <!--#set var="section_slug" value="#{section_slug}"-->
  <!--#set var="special" value="#{special}"-->
  <!--#set var="special_url" value="#{special_url}"-->
  <!--#set var="show_ads" value="true"-->
  <!--#set var="show_header_folha" value="true"-->
  <!--#set var="show_header_news" value="false"-->
  <!--#set var="show_title_header" value="false"-->
  <!--#include virtual="/virtual/3.0/arte/script-app.inc"-->
  `;
  const serverInsideHead = `<!--#include virtual='/virtual/3.0/arte/head__full-page.inc'-->`;
  // const serverAfterBody = `<!--#include virtual="/virtual/3.0/arte/header__full-page.inc"-->`;
  // const serverEndOfBody = `<!--#include virtual="/virtual/3.0/arte/article-graphic__full-page_after.inc"-->`;
  return (
    <>
      <div
        dangerouslySetInnerHTML={{
          __html: serverBeforeHtml,
        }}
      />
      <html {...props.htmlAttributes}>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <div
            dangerouslySetInnerHTML={{
              __html: serverInsideHead,
            }}
          />
          {props.headComponents}
        </head>
        <body {...props.bodyAttributes}>
          {props.preBodyComponents}
          <noscript key="noscript" id="gatsby-noscript">
            This app works best with JavaScript enabled.
          </noscript>
          <div key="body" id="___gatsby" dangerouslySetInnerHTML={{ __html: props.body }} />
          {props.postBodyComponents}
          {/* {parse(serverEndOfBody)} */}
        </body>
        {/* {parse(serverAfterBody)} */}
      </html>
    </>
  );
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
};
