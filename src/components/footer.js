import React from 'react';
import styled from 'styled-components';

export const StyledFooter = styled.footer`
  width: 100%;
  background-color: ${p => p.theme.color.white};
  color: ${p => p.theme.color.black};
  text-align: center;
  padding: 10px 0;
  p {
    font-family: ${p => p.theme.font.display};
    font-size: 0.95em;
    padding: 0;
    margin: 0;
  }
`;

const Footer = () => (
  <StyledFooter>
    <p>Todos os depoimentos foram colhidos entre os dias 09/04/2019 e 17/04/2019.</p>
    {/* <p>
      Expediente: <b>Desenvolvimento</b> Angelo Dias - ...........
    </p> */}
  </StyledFooter>
);

export default Footer;
