import { gql } from "@apollo/client";

export const SEARCH_QUERY_PACK = gql`
  query SearchQueryPack($input: ContentSearchInput!) {
    content(input: $input) {
      totalCount
      edges {
        cursor
        node {
          # ToDo: It should be '... on QueryPack' ?
          ... on Policy {
            uid
            mrn
            name
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
