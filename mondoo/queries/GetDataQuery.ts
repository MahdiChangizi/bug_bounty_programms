import { gql } from "@apollo/client";

export const GET_DATA_QUERY = gql`
  query GetDataQuery(
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
            value
            mquery {
              uid
              mrn
              title
              docs {
                desc
                remediations {
                  ... on Remediations {
                    entries {
                      id
                      desc
                    }
                  }
                  ... on AuthenticationRequired {
                    message
                    code
                  }
                }
                references {
                  title
                  url
                }
                audit
                remediation
              }
              impact {
                value
                rating
              }
              mql
              tags {
                key
                value
              }
              properties {
                uid
                mrn
                title
                mql
                setByPolicyMrn
                for {
                  mrn
                }
              }
              parent
              variants {
                id
                mrn
                title
                icon
              }
              variantQueries {
                uid
                mrn
                title
                mql
                filter
                filterID
              }
              action
              code
              codeId
              severity
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
