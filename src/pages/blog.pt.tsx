import React from 'react';
import { graphql } from 'gatsby';

import Blog, { BlogProps } from '../components/pages/blog';

export default (props: BlogProps): React.ReactElement => <Blog {...props} />;

export const pageQuery = graphql`
  query BlogPtQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { fields: { langKey: { regex: "/(pt)/" } } }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 200)
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
            langKey
          }
        }
      }
    }
  }
`;
