import { gql } from "@apollo/client";

export const SEARCH_POLICY = gql`
  query SearchPolicy($input: ContentSearchInput!) {
    content(input: $input) {
      totalCount
      edges {
        cursor
        node {
          ... on Policy {
            uid
            mrn
            name
            action
            version
            summary
            docs
            authors {
              name
              email
              type
            }
            category
            trustLevel
            access
            statistics {
              checks
              queries
              policies
            }
            featured
            assigned
          }
        }
      }
      pageInfo {
        startCursor
        endCursor
        hasNextPage
        hasPreviousPage
      }
    }
  }
`;
