import React from 'react';
import styled from 'styled-components';

// import { Container } from './styles';

export const Main = styled.main`
  max-width: ${p => p.theme.width.full};
  margin: 0 auto;
`;

const Front = ({ content, pages }) => {
  console.log(content);
  return <Main>front</Main>;
};

export default Front;
