import React from 'react';
import PropTypes from 'prop-types';

import Container from '../layouts/container';
// import Back from '../components/back';

import Front from '../layouts/front';
import Page from '../layouts/page';

const Item = ({ pageContext }) => {
  const { front, node } = pageContext;
  if (front) {
    const content = pageContext.front.data.allMarkdownRemark.edges[0].node;
    const pages = pageContext.pages.data.allMarkdownRemark;
    return (
      <Container seo="">
        <Front content={content} pages={pages} />
      </Container>
    );
  }

  return (
    <Container seo="">
      <Page content={node} />
    </Container>
  );
};

Item.propTypes = {
  pageContext: PropTypes.shape({
    front: PropTypes.shape(),
    pages: PropTypes.shape(),
    node: PropTypes.shape(),
  }),
};

Item.defaultProps = {
  pageContext: {
    front: null,
    pages: null,
    node: null,
  },
};

export default Item;
