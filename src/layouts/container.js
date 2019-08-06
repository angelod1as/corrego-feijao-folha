import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';

import GlobalStyle from '../components/global-style';
import SEO from '../components/seo';

// import size from '../components/breakpoints';

const theme = {
  color: {
    color: '#19006A',
    white: '#F4F4F4',
    black: '#333333',
    gray: '#CCCCCC',
    darkgray: '#A9A9A9',
  },
  font: {
    display: 'Montserrat Alternates',
    text: 'Montserrat',
  },
};

const Main = styled.div``;

const Container = ({ children, seo }) => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <SEO title={seo} />
        <Main>{children}</Main>
      </>
    </ThemeProvider>
  );
};

Container.propTypes = {
  children: PropTypes.element.isRequired,
  seo: PropTypes.string.isRequired,
};

export default Container;
