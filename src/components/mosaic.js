import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import uuid from 'uuid/v1';

import Link from './link';

const Outer = styled.div`
  &.home {
    max-width: ${p => p.theme.width.max} !important;
    margin: 100px auto !important;
  }
  &.page {
  }
  padding: 0;
`;

const Inner = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  transition: transform 1s;

  a {
    margin: 0;
    padding: 0;
    position: relative;
    &:hover {
      img {
        transform: scale(1.03);
      }
    }
  }
`;

const Tile = styled.div`
  width: 100%;
  height: auto;
`;

const Thumb = styled.img`
  transition: transform 0.2s;
`;

const Name = styled.h2`
  padding: 0;
  margin: 0;
  font-size: 1.5em;
`;

const Mosaic = ({ content, home }) => {
  const inner = content.map(each => {
    const {
      frontmatter: { title, opening },
      fields: { fullPath },
    } = each.node;

    return (
      <Link key={uuid()} to={fullPath}>
        <Tile>
          <Thumb src={opening} alt="" />
          <Name>{title}</Name>
        </Tile>
      </Link>
    );
  });

  if (home) {
    return (
      <Outer className="home">
        <Inner>{inner}</Inner>
      </Outer>
    );
  }
  return (
    <Outer className="page">
      <h2>Conheça outras histórias</h2>
      <Inner>{inner}</Inner>
    </Outer>
  );
};

Mosaic.propTypes = {
  content: PropTypes.arrayOf(
    PropTypes.shape({
      frontmatter: PropTypes.shape({
        title: PropTypes.string.isRequired,
        opening: PropTypes.string.isRequired,
      }),
      fields: PropTypes.shape({
        fullPath: PropTypes.string,
      }),
    })
  ).isRequired,
  home: PropTypes.bool,
};

Mosaic.defaultProps = {
  home: false,
};

export default Mosaic;
