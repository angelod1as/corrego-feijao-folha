import React from 'react';
import PropTypes from 'prop-types';
import parse from 'html-react-parser';

import { parseDates, parseNames, parseOptions } from '../../components/parser';
import More from './more';

import { Main, Back, Title, Lead, Dates, Names, Html } from '../../components/styles';

const Page = ({ content }) => {
  const {
    frontmatter: { createdAt, updatedAt, title, lead, names },
    html,
  } = content;

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
