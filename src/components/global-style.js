import { createGlobalStyle } from 'styled-components';
import normalize from 'styled-normalize';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  /* reset and normalize */
  ${reset}
  ${normalize}

  /* gatsby 100% */
  div[role="group"][tabindex] {
    height: 100%;
  }
  html, body, #___gatsby {
    height: 100%;
  }

  body {
    font-family: ${p => p.theme.font.text};
    -webkit-font-smoothing: antialiased
    /* font-family: Folha Grafico,Helvetica,Arial,sans-serif */
  }

  * {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased
  }

  p, a, li, h1, h2, h3, h4, figcaption {
    font-family: ${p => p.theme.font.text};
    font-size: 20px;
    font-weight: 300;
    line-height: 1.5em;
    padding: 10px 0;
    margin: 0 auto;
    -webkit-font-smoothing: antialiased
  }

  h1 {
		font-family: ${p => p.theme.font.title};
		font-weight: 800;
	}

  img, figure {
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
    color: ${p => p.theme.color.color};
    transition: color .2s, transform .2s;
    text-decoration: none;
    &:hover {
      color: ${p => p.theme.color.white};
    }
  }
  &.bg {
    color: ${p => p.theme.color.white};
    &:hover {
      color: ${p => p.theme.color.color};
    }
  }

  svg {
    pointer-events: none;
    & > * {
      pointer-events: none;
    }
  }
`;

export default GlobalStyle;
