import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';

import GlobalStyle from '../components/global-style';
import Footer from '../components/footer';

// import size from '../components/breakpoints';

import theme from '../components/theme';

const Container = styled.div`
  body {
    font-family: ${theme.font.text};
    -webkit-font-smoothing: antialiased;
    /* font-family: Folha Grafico,Helvetica,Arial,sans-serif */
  }

  * {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
  }

  p,
  a,
  li,
  h1,
  h2,
  h3,
  h4,
  figcaption {
    font-family: ${theme.font.text};
    font-size: 20px;
    font-weight: 300;
    padding: 15px 0;
    margin: 0 auto;
    -webkit-font-smoothing: antialiased & > a {
      padding: 0;
    }
  }

  p,
  a,
  li {
    line-height: 1.5em;
  }

  h1 {
    font-family: ${theme.font.title};
    font-weight: 500;
  }

  img,
  figure {
    width: 100%;
    height: auto;
    display: block;
  }

  h1 {
    font-size: 4em;
  }

  h2 {
    font-size: 2em;
  }

  a {
    cursor: pointer;
    display: inline-block;
    color: ${theme.color.color};
    transition: color 0.2s, transform 0.2s;
    text-decoration: none;
    &:hover {
      color: ${theme.color.white};
    }
  }
  &.bg {
    color: ${theme.color.white};
    &:hover {
      color: ${theme.color.color};
    }
  }

  svg {
    pointer-events: none;
    & > * {
      pointer-events: none;
    }
  }

  strong {
    font-weight: 700;
  }
`;

const Main = styled.div`
  background: #191919; /* Old browsers */
  background: ${theme.color.gradient};
  color: ${theme.color.white};
  height: auto;
  min-height: 100%;

  padding: 50px 0;
`;

const ContainerWrapper = ({ children, seo }) => {
  return (
    <Container theme={theme}>
      <>
        <GlobalStyle />
        <Main>{children}</Main>
        <Footer />
      </>
    </Container>
  );
};

ContainerWrapper.propTypes = {
  children: PropTypes.element.isRequired,
  seo: PropTypes.string.isRequired,
};

export default ContainerWrapper;
