import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';

import GlobalStyle from '../components/global-style';
import SEO from '../components/seo';
import Footer from '../components/footer';

// import size from '../components/breakpoints';

const theme = {
  color: {
    color: '#b33c00',
    white: '#333333',
    black: '#F4F4F4',
    lightgray: '#F4F4F4',
    gray: '#CCCCCC',
    darkgray: '#A9A9A9',
    darkergray: '#707070',
    bg: '#140000',
    gradient: '#FFFFFF',
  },
  font: {
    display: 'Folha Grafico,Helvetica Neue,Helvetica,Arial,sans-serif',
    text: 'Folha Texto,Georgia,Times New Roman,serif;',
    title: 'FolhaII, Folha II, Georgia, serif',
  },
  width: {
    full: '100%',
    max: '1000px',
    width: '630px',
  },
};

const Main = styled.div`
  background: #191919; /* Old browsers */
  background: ${p => p.theme.color.gradient};
  color: ${p => p.theme.color.white};
  height: auto;
  min-height: 100%;

  padding: 50px 0;
`;

const Container = ({ children, seo }) => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <SEO title={seo} />
        <Main>{children}</Main>
        <Footer />
      </>
    </ThemeProvider>
  );
};

Container.propTypes = {
  children: PropTypes.element.isRequired,
  seo: PropTypes.string.isRequired,
};

export default Container;
