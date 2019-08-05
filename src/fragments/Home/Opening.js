import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import uuid from 'uuid/v1';
import Link from '../../components/Link';
import Main from '../../layouts/Main';
import size from '../../components/breakpoints';

const Container = styled.div``;

const Title = styled.h1``;

const Text = styled.p``;

const List = styled.div``;

const Opening = () => {
  return (
    <Main>
      <Container>
        {/* <Flags /> */}
        <Title>My name is angelo and I do stuff</Title>
        <Text>Journalist turned designer turned developer.</Text>
        <Text>
          Spent 5 years at Folha de S.Paulo designing print, thinking infographics and writing code.
          Simultaneously, created and maintained a satyrical sci-fi newspaper.
        </Text>
        <List>
          <Link direction="left" to="/portfolio">
            Portfolio
          </Link>
          <Link direction="left" to="/about">
            About me
          </Link>
        </List>
      </Container>
    </Main>
  );
};

export default Opening;
