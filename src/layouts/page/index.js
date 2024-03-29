import React from 'react';
import PropTypes from 'prop-types';
import parse from 'html-react-parser';

import { parseDates, parseNames, parseOptions, parseQuotes } from '../../components/parser';
import Mosaic from '../../components/mosaic';
import SEO from '../../components/seo';

import Back from '../../components/back';
import { Main, Title, Dates, Names, Html } from '../../components/styles';

const Page = ({ content, pages }) => {
  const {
    frontmatter: { createdAt, title, lead, names },
    html,
  } = content;

  const quote = parseQuotes(lead);

  const updatedAt = null;

  return (
    <Main>
      <SEO title={quote} />
      <Title className="quote">{quote}</Title>
      {/* <Lead>{title}</Lead> */}
      {createdAt || updatedAt ? <Dates>{parseDates(createdAt, updatedAt)}</Dates> : ''}
      {names && names.length > 0 ? <Names>{parseNames(names)}</Names> : ''}
      <div data-paywall-box>
        <Html>{parse(html, parseOptions())}</Html>
      </div>
      <Back to="/" />
      <Mosaic content={pages} current={title.toLowerCase()} home={false} />
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
