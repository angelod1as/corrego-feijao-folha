import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';

export const Others = styled.div``;

const More = ({ title }) => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(filter: { frontmatter: { person: { eq: true } } }) {
          edges {
            node {
              frontmatter {
                title
                opening
              }
            }
          }
        }
      }
    `}
    render={data => {
      return (
        <Others>
          <div>More</div>
        </Others>
      );
    }}
  />
);

More.propTypes = {
  title: PropTypes.string.isRequired,
};

export default More;
