import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import theme from './theme';

const Fig = styled.figure`
  figcaption {
    font-family: ${theme.font.display};
    font-weight: 400;
    font-size: 0.95em;
    span {
      color: ${theme.color.darkgray};
    }
  }
`;

const FigureCaption = ({ attribs }) => {
  const buildCaption = caption => {
    if (caption.includes('---')) {
      const split = caption.split('---');
      return (
        <figcaption>
          {split[0]}
          <span> - {split[1]}</span>
        </figcaption>
      );
    }
    return <figcaption>{caption}</figcaption>;
  };

  return (
    <Fig>
      <img src={attribs.src} alt={attribs.alt} />
      {buildCaption(attribs.alt)}
    </Fig>
  );
};

FigureCaption.propTypes = {
  attribs: PropTypes.shape({
    src: PropTypes.string,
    alt: PropTypes.string,
  }).isRequired,
};

export default FigureCaption;
