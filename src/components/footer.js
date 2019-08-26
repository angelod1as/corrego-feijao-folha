import React from 'react';
import styled from 'styled-components';

export const StyledFooter = styled.footer`
  width: 100%;
  background-color: black;
  color: ${p => p.theme.color.darkergray};
  text-align: center;
  p {
    font-family: ${p => p.theme.font.display};
  }
`;

const Footer = () => (
  <StyledFooter>
    <p>Vídeos gravados em XX/XX/XX</p>
  </StyledFooter>
);

export default Footer;
