import React from 'react';
// import PropTypes from 'prop-types';

import Container from '../layouts/container';

const seo = 'Erro 404';

const IndexPage = () => {
  return (
    <Container seo={seo}>
      <h1>Oops, acho que você chegou em uma página que não existe!</h1>
    </Container>
  );
};

// IndexPage.propTypes = {
//   location: PropTypes.shape({
//     state: PropTypes.shape({
//       from: PropTypes.string,
//     }),
//   }),
//   data: PropTypes.shape({
//     markdownRemark: PropTypes.shape({
//       frontmatter: PropTypes.shape(),
//       html: PropTypes.string,
//     }),
//   }).isRequired,
// };

// IndexPage.defaultProps = {
//   location: {
//     state: {
//       from: null,
//     },
//   },
// };

export default IndexPage;
