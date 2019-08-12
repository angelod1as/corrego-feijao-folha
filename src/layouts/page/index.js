import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import parse from 'html-react-parser';

import { parseDates, parseNames } from '../../components/parser';
import Video from '../../components/video';
import More from './more';
import FigureCaption from '../../components/figure-caption';

const Main = styled.main`
  max-width: ${p => p.theme.width.full};
  margin: 0 auto;
  & > * {
    max-width: ${p => p.theme.width.width};
    margin: 0 auto;
    padding: 0 5px;
  }
`;
const Back = styled.a`
  margin: 0 auto;
  display: block;
`;
const Title = styled.h1``;
const Lead = styled.p`
  font-size: 1.5em;
`;
const Dates = styled.div`
  margin: 20px auto;
  p {
    font-family: ${p => p.theme.font.display};
    font-size: 0.95em;
    padding: 0;
    font-weight: 500;
  }
`;
const Names = styled.div`
  p {
    font-weight: bold;
    padding: 0;
    span {
      font-weight: 300;
      font-size: 0.9em;
    }
  }
`;
const Html = styled.div`
  max-width: ${p => p.theme.width.full};
  margin: 30px auto;
  & > * {
    max-width: ${p => p.theme.width.width};
    margin: 0 auto;
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
`;

const Page = ({ content }) => {
  const {
    frontmatter: { createdAt, updatedAt, title, lead, names },
    html,
  } = content;

  const parseOptions = {
    replace: domNode => {
      if (domNode.attribs && domNode.attribs.class === 'video') {
        return (
          <Video title={domNode.attribs.title || 'Vídeo'} id={domNode.attribs['data-video']} />
        );
      }
      if (domNode.attribs && domNode.attribs.alt) {
        return <FigureCaption attribs={domNode.attribs} />;
      }

      return domNode;
    },
  };
  return (
    <Main>
      <Back>{'<'} Córrego do Feijão</Back>
      <Title>{title}</Title>
      <Lead>{lead}</Lead>
      <Dates>{parseDates(createdAt, updatedAt)}</Dates>
      <Names>{parseNames(names)}</Names>
      <Html>{parse(html, parseOptions)}</Html>
      <More title={title} />
    </Main>
  );
};

Page.propTypes = {
  content: PropTypes.shape({
    frontmatter: PropTypes.shape({
      createdAt: PropTypes.string,
      updatedAt: PropTypes.string,
      title: PropTypes.string,
      lead: PropTypes.string,
      names: PropTypes.arrayOf(PropTypes.string),
    }),
    html: PropTypes.string,
  }).isRequired,
};

export default Page;
