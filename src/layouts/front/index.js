import React from 'react';
import PropTypes from 'prop-types';
import parse from 'html-react-parser';
// import styled from 'styled-components';

import SEO from '../../components/seo';

import { parseDates, parseNames, parseOptions } from '../../components/parser';
import { Main, Title, Lead, Dates, Names, Html, Kicker } from '../../components/styles';

const Front = ({
  content: {
    frontmatter: { createdAt, lead, names, title },
    html,
  },
  pages,
}) => {
  const updatedAt = null;
  return (
    <Main>
      <SEO title={title} />
      {/* <Kicker>Córrego do Feijão</Kicker> */}
      <Title>{title}</Title>
      <Lead>
        <span>{lead}</span>
      </Lead>
      {createdAt || updatedAt ? <Dates>{parseDates(createdAt, updatedAt)}</Dates> : ''}
      {names && names.length > 0 ? <Names>{parseNames(names)}</Names> : ''}
      <div data-paywall-box>
        <Html>{parse(html, parseOptions({ mosaic: pages, home: true }))}</Html>
      </div>
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
  pages: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default Front;
