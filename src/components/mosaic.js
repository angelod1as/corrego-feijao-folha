import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import uuid from 'uuid/v1';
import Fade from 'react-reveal/Fade';
import { withPrefix, Link } from 'gatsby';

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

const Thumb = styled.picture`
  img,
  source {
    transition: transform 0.2s;
  }
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

    const path = fullPath.substring(1);

    const webpImage = home ? opening : `.${opening}`;
    const jpgImage = webpImage.replace('.webp', '.jpg').replace('.gif', '.jpg');

    return (
      <Link key={uuid()} to={path}>
        <Tile>
          <Thumb>
            {/* <source srcSet={webpImage} type="image/webp" /> */}
            {/* <source srcSet={jpgImage} type="image/jpeg" /> */}
            <img src={jpgImage} alt="" />
          </Thumb>
          <Name>{title}</Name>
        </Tile>
      </Link>
    );
  });

  if (home) {
    return (
      <Outer className="home">
        <Fade>
          <Inner>{inner}</Inner>
        </Fade>
      </Outer>
    );
  }
  return (
    <Outer className="page">
      <Fade>
        <h2>Conheça outras histórias</h2>
        <Inner>{inner}</Inner>
      </Fade>
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
