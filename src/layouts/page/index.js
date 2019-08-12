import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import parse from 'html-react-parser';
import uuid from 'uuid/v1';

import Video from '../../components/video';

const Main = styled.main`
  max-width: ${p => p.theme.width.width};
  margin: 0 auto;
`;

const Back = styled.a`
  padding: 0;
`;
const Title = styled.h1`
  padding: 0;
`;
const Lead = styled.p`
  padding: 0;
  font-size: 1.5em;
`;
const Dates = styled.div`
  margin: 20px 0;
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
  margin-top: 30px;
  .location {
    font-family: ${p => p.theme.font.display};
    text-transform: uppercase;
    font-size: 0.75em;
    font-weight: bold;
    padding-right: 10px;
  }

  .video {
    margin: 30px 0;
  }
`;

const parseNames = names => {
  const result = names.map(name => {
    if (name.includes(':')) {
      const split = name.split(':');
      return (
        <p key={uuid()}>
          {split[1]} <span>({split[0]})</span>
        </p>
      );
    }
    return <p key={uuid()}>{name}</p>;
  });
  return result;
};

const parseDates = (created, updated) => {
  const fix = date => {
    return date
      .toLowerCase()
      .replace(' - ', ' às ')
      .replace(':', 'h');
  };

  const result = [];
  if (created) {
    result.push(<p key={uuid()}>{fix(created)}</p>);
  }
  if (created && updated) {
    result.push(<p key={uuid()}>Atualizado: {fix(updated)}</p>);
  } else if (updated) {
    result.push(<p key={uuid()}>Última atualização: {fix(updated)}</p>);
  }

  return result;
};

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
