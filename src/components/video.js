import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Video = ({ id, title }) => {
  const options = 'showinfo=0&modestbranding=0';

  const Wrapper = styled.div`
    position: relative;
    padding-bottom: 56.25%; /* 16:9 */
    padding-top: 25px;
    height: 0;
  `;

  const Iframe = styled.iframe`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  `;

  return (
    <Wrapper className="video">
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
};

export default Video;
