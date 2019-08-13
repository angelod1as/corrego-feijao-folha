import React from 'react';
import PropTypes from 'prop-types';
import parse from 'html-react-parser';

import { parseDates, parseNames, parseOptions } from '../../components/parser';
import Mosaic from '../../components/mosaic';

import Back from '../../components/back';
import { Main, Title, Lead, Dates, Names, Html } from '../../components/styles';

const Page = ({ content, pages }) => {
  const {
    frontmatter: { createdAt, updatedAt, title, lead, names },
    html,
  } = content;

  return (
    <Main>
      <Back to="/" />
      <Title>{title}</Title>
      <Lead>{lead}</Lead>
      {createdAt || updatedAt ? <Dates>{parseDates(createdAt, updatedAt)}</Dates> : ''}
      {names && names.length > 0 ? <Names>{parseNames(names)}</Names> : ''}
      <Html>{parse(html, parseOptions())}</Html>
      <Mosaic content={pages} home={false} />
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
  pages: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default Page;
