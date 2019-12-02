import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Fade from 'react-reveal/Fade';

import Container from '../layouts/container';
// import Back from '../components/back';

import Front from '../layouts/front';
import Page from '../layouts/page';

export const query = graphql`
  query allPages {
    home: allMarkdownRemark(filter: { frontmatter: { home: { eq: true } } }) {
      edges {
        node {
          frontmatter {
            title
            lead
            names
            createdAt(formatString: "DD.MMM.YYYY - kk:mm", locale: "pt-BR")
            # updatedAt(formatString: "DD.MMM.YYYY - kk:mm", locale: "pt-BR")
          }
          html
        }
      }
    }
    others: allMarkdownRemark(
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
            # updatedAt(formatString: "DD.MMM.YYYY - kk:mm", locale: "pt-BR")
          }
          html
          fields {
            fullPath
          }
        }
      }
    }
  }
`;

const Template = ({ pageContext, data }) => {
  const { front, fullPath } = pageContext;
  const { home, others } = data;
  const pages = others.edges;
  if (front) {
    const content = home.edges[0].node;
    return (
      <Container seo="">
        <Fade>
          <Front content={content} pages={pages} />
        </Fade>
      </Container>
    );
  }

  if (fullPath) {
    // desconstruidão
    const [{ node }] = others.edges.filter(each => {
      return each.node.fields.fullPath === fullPath;
    });
    return (
      <Container seo="">
        <Fade>
          <Page content={node} pages={pages} />
        </Fade>
      </Container>
    );
  }
  return null;
};

Template.propTypes = {
  pageContext: PropTypes.shape({
    front: PropTypes.bool,
    fullPath: PropTypes.string,
  }),
  data: PropTypes.shape({
    home: PropTypes.shape({
      edges: PropTypes.arrayOf(PropTypes.shape()),
    }),
    others: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          fields: PropTypes.shape({
            fullPath: PropTypes.string,
          }),
        })
      ),
    }),
  }).isRequired,
};

Template.defaultProps = {
  pageContext: {
    front: null,
    fullPath: null,
  },
};

export default Template;
