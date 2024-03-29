import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link, withPrefix } from 'gatsby';

import theme from './theme';

const BackLink = styled.div`
  max-width: ${theme.width.width};
  margin: 15px auto 30px auto;
  a {
    padding: 0 0 0 20px;
    position: relative;
    font-weight: 700;
    &:before {
      content: '‹';
      top: -2px;
      left: 0;
      position: absolute;
      font-size: 1.5em;
    }
    &:hover {
      &:before {
        content: '«';
      }
    }
  }
`;

const Back = ({ to }) => {
  return (
    <BackLink>
      <Link direction="right" to={to}>
        voltar ao início
      </Link>
    </BackLink>
  );
};

Back.propTypes = {
  to: PropTypes.string.isRequired,
};

export default Back;
