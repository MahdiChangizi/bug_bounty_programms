import { gql } from "@apollo/client";

export const GET_CHECKS = gql`
  query GetChecks(
    $scopeMrn: String!
    $first: Int
    $after: String
    $last: Int
    $before: String
    $orderBy: FindingsOrder
    $filter: FindingsFilter
  ) {
    findings(
      scopeMrn: $scopeMrn
      first: $first
      after: $after
      last: $last
      before: $before
      orderBy: $orderBy
      filter: $filter
    ) {
      ... on FindingsConnection {
        totalCount
        filteredTotalCount
        edges {
          cursor
          node {
            ... on CheckFinding {
              id
              mrn
              title
              asset {
                id
              }
              rating
              state
              resultType
              riskValue
              state
              lastUpdated
              tags {
                key
                value
              }
              riskFactors {
                mrn
                indicator
                title
                affected
                total
                isPositive
              }
              exception {
                id
                exceptionId
                scope
                reviewStatus
                action
                justification
                author {
                  name
                  mrn
                  email
                  type
                }
                createdAt
              }
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
