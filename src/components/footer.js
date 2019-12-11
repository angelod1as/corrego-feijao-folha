import React from 'react';
import styled from 'styled-components';

import theme from './theme';

export const StyledFooter = styled.footer`
  width: 100%;
  // background-color: ${theme.color.black};
  color: ${theme.color.white};
  text-align: center;
  padding: 10px;

`;

const StyledSpan = styled.span`
  font-family: ${theme.font.display};
  font-size: 0.95em;
  padding: 0;
  margin: 0;
`;

const Footer = () => (
  <StyledFooter>
    <p>
      <StyledSpan>
        Todos os depoimentos foram colhidos entre os dias 9.abr.2019 e 17.abr.2019.
      </StyledSpan>
    </p>
  </StyledFooter>
);

export default Footer;
