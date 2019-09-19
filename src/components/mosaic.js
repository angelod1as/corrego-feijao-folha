import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import uuid from 'uuid/v1';
import Fade from 'react-reveal/Fade';
import { withPrefix, Link } from 'gatsby';
import bp from './breakpoints';

const Outer = styled.div`
  &.home {
    max-width: ${p => p.theme.width.max} !important;
    margin: 50px auto !important;
    @media ${bp.small} {
      margin: 100px auto !important;
    }
  }
  &.page {
  }
  padding: 0;
`;

const Inner = styled.div`
  margin: 0 auto;

  @media ${bp.small} {
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    transition: transform 1s;
  }

  a {
    margin: 30px auto;
    display: block;
    @media ${bp.small} {
      margin: 0;
    }

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
  &.disabled {
    filter: url("data:image/svg+xml;utf8,&lt;svg xmlns='http://www.w3.org/2000/svg'&gt;&lt;filter id='grayscale'&gt;&lt;feColorMatrix type='matrix' values='0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0'/&gt;&lt;/filter&gt;&lt;/svg&gt;#grayscale"); /* Firefox 10+, Firefox on Android */
    filter: gray; /* IE6-9 */
    filter: grayscale(100%); /* Chrome 19+, Safari 6+, Safari 6+ iOS */
    cursor: not-allowed;
  }
`;

const Thumb = styled.picture`
  img,
  source {
    transition: transform 0.2s;
  }
`;

const Name = styled.h2`
  padding: 0 5px;
  margin: 0;
  font-size: 1.5em;
  @media ${bp.small} {
    padding: 0;
  }
`;

const Recommended = styled.h2`
  font-size: 22px;
  font-weight: 700;
  padding: 0 5px;
  margin-bottom: 10px;
  @media ${bp.small} {
    padding: 0;
  }
`;

const Mosaic = ({ content, home, current }) => {
  const inner = content.map(each => {
    const {
      frontmatter: { title, opening },
      fields: { fullPath },
    } = each.node;

    const path = `/${fullPath.substring(1)}`;
    const isCurrent = current === title.toLowerCase();
    const jpgImage = home ? opening : `.${opening}`;
    // const jpgImage = webpImage.replace('.webp', '.jpg').replace('.gif', '.jpg');

    const finalTile = (
      <Tile key={uuid()} className={isCurrent ? 'disabled' : ''}>
        <Thumb>
          <img src={jpgImage} alt="" />
        </Thumb>
        {/* <Name>{title}</Name> */}
      </Tile>
    );

    if (isCurrent) {
      return finalTile;
    }

    return (
      <Link key={uuid()} to={path}>
        {finalTile}
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
        <Recommended>outras histórias</Recommended>
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
  current: PropTypes.string,
};

Mosaic.defaultProps = {
  home: false,
  current: null,
};

export default Mosaic;
