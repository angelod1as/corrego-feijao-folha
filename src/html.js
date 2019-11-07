import React from 'react';
import ReactDOMServer from 'react-dom/server';
import PropTypes from 'prop-types';
import parse from 'html-react-parser';
import Fragment from 'react-dom-fragment';

/* eslint react/destructuring-assignment: 0 */
/* eslint react/forbid-prop-types: 0 */
/* eslint react/require-default-props: 0 */

export default function HTML(props) {
  return (
    <>
      <SSI-before-html />
      <html {...props.htmlAttributes}>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <SSI-inside-head />
          {props.headComponents}
        </head>
        <body {...props.bodyAttributes}>
          {props.preBodyComponents}
          <noscript key="noscript" id="gatsby-noscript">
            This app works best with JavaScript enabled.
          </noscript>
          <div key="body" id="___gatsby" dangerouslySetInnerHTML={{ __html: props.body }} />
          {props.postBodyComponents}
          <SSI-end-of-body />
        </body>
        <SSI-after-body />
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
