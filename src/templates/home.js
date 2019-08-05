import React from 'react';
import PropTypes from 'prop-types';
// import { graphql } from 'gatsby';

import Container from '.';

import Opening from '../fragments/Home/Opening';

const Home = props => {
  console.log(props);

  return (
    <Container>
      <Opening />
    </Container>
  );
};

// export const pageQuery = graphql`
//   {
//     allMarkdownRemark(filter: { fields: { type: { eq: "pages" } } }) {
//       nodes {
//         fields {
//           slug
//           type
//           fullPath
//         }
//       }
//       edges {
//         node {
//           frontmatter {
//             title
//             date(formatString: "MMMM DD, YYYY")
//           }
//         }
//       }
//     }
//   }
// `;

Home.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      nodes: PropTypes.arrayOf(PropTypes.shape()),
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              date: PropTypes.string,
              slug: PropTypes.string,
              title: PropTypes.string,
            }),
          }),
        })
      ),
    }),
  }).isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
};

export default Home;
