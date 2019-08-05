import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Container from '.';

import Item from '../fragments/Item';

const IndexPage = props => {
  // getting last page url
  const {
    data,
    location: { state },
  } = props;
  const from = state ? state.from || null : null;

  // getting data
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  const { descGroup } = frontmatter;

  const seo = frontmatter.title;

  // returning
  return (
    <Container seo={seo}>
      <Item html={html} {...frontmatter} {...descGroup} />
    </Container>
  );
};

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(fields: { fullPath: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "DD/MM/YY")
        title
        descGroup {
          desc
          longdesc
        }
      }
    }
  }
`;

IndexPage.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      from: PropTypes.string,
    }),
  }),
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.shape(),
      html: PropTypes.string,
    }),
  }).isRequired,
};

IndexPage.defaultProps = {
  location: {
    state: {
      from: null,
    },
  },
};

export default IndexPage;