import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { withTheme } from 'styled-components';

const CustomLink = props => {
  const { children, to } = props;

  return <Link to={to}>{children}</Link>;
};

CustomLink.propTypes = {
  children: PropTypes.node.isRequired,
  theme: PropTypes.shape({
    color: PropTypes.shape({
      color: PropTypes.string,
    }),
  }).isRequired,
  to: PropTypes.string.isRequired,
  // from: PropTypes.string,
  // className: PropTypes.string,
  // direction: PropTypes.string,
  // color: PropTypes.string,
};

CustomLink.defaultProps = {
  // className: null,
  // from: null,
  // color: null,
  // direction: 'right',
};

export default withTheme(CustomLink);
