import { gql } from "@apollo/client";

export const GET_DATA_QUERIES_LIST = gql`
  query GetDataQueriesList(
    $entityMrn: String!
    $first: Int
    $after: String
    $orderBy: DataQueryOrder
    $filter: DataQueryFilter
  ) {
    dataQueries(
      entityMrn: $entityMrn
      first: $first
      after: $after
      orderBy: $orderBy
      filter: $filter
    ) {
      ... on DataQueriesConnection {
        totalCount
        edges {
          cursor
          node {
            mrn
            id
            title
            iconId
            lastUpdated
            tags {
              key
              value
            }
            asset {
              id
              mrn
              name
              icon
            }
            platform {
              name
              title
              arch
              version
              kind
              runtime
              family
              labels {
                key
                value
              }
            }
            mquery {
              uid
              mrn
              title
              mql
              action
              code
              codeId
            }
          }
        }
        pageInfo {
          startCursor
          endCursor
          hasNextPage
          hasPreviousPage
        }
        filteredTotalCount
      }
      ... on RequestError {
        message
        code
      }
      ... on NotFoundError {
        message
        code
      }
    }
  }
`;
