import { gql } from "@apollo/client";

export const GET_CVES = gql`
  query GetCVEs(
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
            ... on CveFinding {
              id
              mrn
              title
              asset {
                icon
                name
                id
                mrn
                tags {
                  key
                  value
                }
              }
              rating
              riskValue
              lastUpdated
              publishedAt
              state
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
              lastUpdated
              exception {
                id
                exceptionId
                scope
                reviewStatus
                justification
                action
                author {
                  name
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
