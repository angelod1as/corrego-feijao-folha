import styled from 'styled-components';
import bp from './breakpoints';

import theme from './theme';

export const Main = styled.main`
  max-width: ${theme.width.full};
  margin: 0 auto;
  & > * {
    // max-width: ${theme.width.width};
    margin: 0 auto;
    padding: 0 5px;
  }

  .staff {
    p,
    ul,
    li {
      padding: 0;
      strong {
        font-weight: 800;
      }
    }
  }
`;

export const Title = styled.h1`
  max-width: ${theme.width.width};
  font-size: 3em;
  color: ${theme.color.color};
  line-height: 1.15em;
  margin: 20px auto 30px auto;
  &.quote {
    font-size: 2.5em;
    /* margin-left: 0.2em; */
    text-indent: 0;
    @media ${bp.width} {
      text-indent: -0.4em;
    }
  }
  @media ${bp.small} {
    font-size: 4em;
    &.quote {
      font-size: 3.3em;
    }
  }
`;

export const Kicker = styled.p`
  max-width: ${theme.width.width};
  /* color: ${theme.color.color}; */
  font-weight: 700;
  margin: 20px auto;
  &.quote {
    font-size: 3.3em;
  }
`;

export const Lead = styled.p`
  max-width: ${theme.width.width};
  font-size: 1.5em;
  margin-bottom: 30px;
`;

export const Dates = styled.div`
  max-width: ${theme.width.width};
  margin: 20px auto;
  p {
    font-family: ${theme.font.display};
    font-size: 0.9em;
    padding: 0;
    font-weight: 500;
    margin-bottom: 10px;
    &.updated {
      font-weight: 400;
      color: ${theme.color.darkergray};
    }
  }
`;

export const Names = styled.div`
  max-width: ${theme.width.width};
  p {
    font-weight: bold;
    padding: 0;
    span {
      font-weight: 300;
      font-size: 0.9em;
    }
  }
`;

export const Html = styled.div`
  max-width: ${theme.width.full};
  margin: 30px auto;
  & > * {
    max-width: ${theme.width.width};
    margin: 0 auto;
    padding-left: 5px;
    padding-right: 5px;
  }

  .location {
    font-family: ${theme.font.display};
    text-transform: uppercase;
    font-size: 0.75em;
    font-weight: bold;
    padding-right: 10px;
  }

  .video {
    margin: 50px auto;
    max-width: ${theme.width.max};
  }

  figure {
    margin: 50px auto;
    max-width: ${theme.width.max};
  }

  .infos {
    margin: 30px auto;
    ul {
      li {
        margin: 0;
        padding: 0;
        span {
          font-weight: bold;
          font-size: 0.85em;
          padding-right: 5px;
        }
      }
    }
  }
`;
