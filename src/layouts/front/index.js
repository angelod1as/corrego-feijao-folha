import React from 'react';
import PropTypes from 'prop-types';
import parse from 'html-react-parser';

import { parseDates, parseNames, parseOptions } from '../../components/parser';
import { Main, Title, Lead, Dates, Names, Html } from '../../components/styles';

const Front = ({
  content: {
    frontmatter: { createdAt, lead, names, title, updatedAt },
    html,
  },
  pages,
}) => {
  return (
    <Main>
      <Title>{title}</Title>
      <Lead>{lead}</Lead>
      <Dates>{parseDates(createdAt, updatedAt)}</Dates>
      <Names>{parseNames(names)}</Names>
      <Html>{parse(html, parseOptions)}</Html>
    </Main>
  );
};

Front.propTypes = {
  content: PropTypes.shape({
    frontmatter: PropTypes.shape({
      createdAt: PropTypes.string,
      lead: PropTypes.string,
      names: PropTypes.arrayOf(PropTypes.string),
      title: PropTypes.string,
      updatedAt: PropTypes.string,
    }),
    html: PropTypes.string,
  }).isRequired,
  pages: PropTypes.shape().isRequired,
};

export default Front;
