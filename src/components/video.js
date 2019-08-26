import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import sizes from './breakpoints';

const Video = ({ id, title, size }) => {
  const options = '';

  const Wrapper = styled.div`
    position: relative;
    padding-bottom: 56.25%; /* 16:9 */
    padding-top: 25px;
    height: 0;
    max-height: 600px;

    &.small {
      max-width: ${p => p.theme.width.width};
    }

    @media ${sizes.medium} {
      padding-bottom: 600px; /* avoid big gaps */
      &.small {
        padding-bottom: 300px; /* avoid big gaps */
      }
    }
  `;

  const Iframe = styled.iframe`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    max-height: 600px;
  `;

  return (
    <Wrapper className={`video ${size === 'small' ? 'small' : ''}`}>
      <Iframe
        title={title}
        src={`https://www.youtube.com/embed/${id}?${options}`}
        frameBorder="0"
      />
    </Wrapper>
  );
};

Video.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  size: PropTypes.string,
};

Video.defaultProps = {
  size: null,
};

export default Video;
