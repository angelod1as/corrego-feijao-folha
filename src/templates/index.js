import React from 'react';
import PropTypes from 'prop-types';
// import styled, { ThemeProvider } from 'styled-components';

// import GlobalStyle from '../components/GlobalStyle';
// import SEO from '../components/seo';

// import size from '../components/breakpoints';

// const theme = {
//   color: {
//     color: '#19006A',
//     white: '#F4F4F4',
//     black: '#333333',
//     gray: '#CCCCCC',
//     darkgray: '#A9A9A9',
//   },
//   font: {
//     display: 'Montserrat Alternates',
//     text: 'Montserrat',
//   },
// };

// const Main = styled.div``;

const Container = ({ children }) => {
  return (
    <div>{children}</div>
    // <ThemeProvider theme={theme}>
    //   <Fragment>
    //     <GlobalStyle />
    //     <SEO title={seo} />
    //     <Main center={center}>
    //       <div>{children}</div>
    //     </Main>
    //   </Fragment>
    // </ThemeProvider>
  );
};

Container.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default Container;
