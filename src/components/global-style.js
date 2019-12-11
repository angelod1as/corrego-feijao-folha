import { createGlobalStyle } from 'styled-components';
import normalize from 'styled-normalize';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  /* reset and normalize */
  // ${reset}
  // ${normalize}

  // /* gatsby 100% */
  // div[role="group"][tabindex] {
  //   height: 100%;
  // }
  // html, body, #___gatsby {
  //   height: 100%;
  // }
  
`;

export default GlobalStyle;
