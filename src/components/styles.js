import styled from 'styled-components';

export const Main = styled.main`
  max-width: ${p => p.theme.width.full};
  margin: 0 auto;
  & > * {
    max-width: ${p => p.theme.width.width};
    margin: 0 auto;
    padding: 0 5px;
  }
`;

export const Title = styled.h1``;

export const Lead = styled.p`
  font-size: 1.5em;
  margin-bottom: 30px;
`;

export const Dates = styled.div`
  margin: 20px auto;
  p {
    font-family: ${p => p.theme.font.display};
    font-size: 0.95em;
    padding: 0;
    font-weight: 500;
  }
`;

export const Names = styled.div`
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
  max-width: ${p => p.theme.width.full};
  margin: 30px auto;
  & > * {
    max-width: ${p => p.theme.width.width};
    margin: 0 auto;
    padding-left: 5px;
    padding-right: 5px;
  }

  .location {
    font-family: ${p => p.theme.font.display};
    text-transform: uppercase;
    font-size: 0.75em;
    font-weight: bold;
    padding-right: 10px;
  }

  .video {
    margin: 50px auto;
    max-width: ${p => p.theme.width.max};
  }

  figure {
    margin: 50px auto;
    max-width: ${p => p.theme.width.max};
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