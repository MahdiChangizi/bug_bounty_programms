import { gql } from "@apollo/client";

export const GET_QUERY_DETECTED_ASSETS = gql`
  query GetQueryDetectedAssets(
    $entityMrn: String!
    $first: Int!
    $after: String
    $filter: DataQueryFilter
  ) {
    dataQueries(
      entityMrn: $entityMrn
      filter: $filter
      first: $first
      after: $after
    ) {
      ... on DataQueriesConnection {
        edges {
          node {
            mrn
            asset {
              mrn
              name
            }
            tags {
              key
              value
            }
            iconId
            id
            lastUpdated
            value
          }
          cursor
        }
        totalCount
        pageInfo {
          startCursor
          endCursor
          hasNextPage
          hasPreviousPage
        }
      }
    }
  }
`;
