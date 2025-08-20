import { gql } from "@apollo/client";

export const GET_CONTENT = gql`
  query GetContent($input: ContentSearchInput!) {
    content(input: $input) {
      totalCount
      edges {
        cursor
        node {
          ... on Policy {
            access
            action
            assigned
            authors {
              email
              name
              type
            }
            category
            summary
            docs
            createdAt
            featured
            trustLevel
            mrn
            name
            statistics {
              checks
              policies
              queries
            }
            uid
            updatedAt
            version
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
