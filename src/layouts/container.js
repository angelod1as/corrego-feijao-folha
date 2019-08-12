import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';

import GlobalStyle from '../components/global-style';
import SEO from '../components/seo';

// import size from '../components/breakpoints';

const theme = {
  color: {
    color: '#fba67b',
    white: '#F4F4F4',
    black: '#333333',
    gray: '#CCCCCC',
    darkgray: '#A9A9A9',
    bg: '#140000',
    gradient: 'linear-gradient(to bottom, #191919 0%, #140000 100% )',
  },
  font: {
    display: 'Folha Grafico,Helvetica Neue,Helvetica,Arial,sans-serif',
    text: 'Folha Texto,Georgia,Times New Roman,serif;',
  },
  width: {
    full: '100%',
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
      </>
    </ThemeProvider>
  );
};

Container.propTypes = {
  children: PropTypes.element.isRequired,
  seo: PropTypes.string.isRequired,
};

export default Container;
