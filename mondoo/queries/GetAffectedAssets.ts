import { gql } from "@apollo/client";

export const GET_AFFECTED_ASSETS = gql`
  query GetAffectedAssets(
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
              asset {
                id
                mrn
                name
                icon
                tags {
                  key
                  value
                }
              }
              iconId
              lastUpdated
              mrn
              riskValue
              rating
              riskFactors {
                mrn
                indicator
                title
                affected
                total
                isPositive
              }
              title
              state
              exception {
                id
                exceptionId
                reviewStatus
                action
              }
            }

            ... on CveFinding {
              id
              asset {
                id
                mrn
                name
                icon
                tags {
                  key
                  value
                }
              }
              iconId
              lastUpdated
              mrn
              riskValue
              rating
              riskFactors {
                mrn
                indicator
                title
                affected
                total
                isPositive
              }
              title
              state
              exception {
                id
                exceptionId
                reviewStatus
                action
              }
            }

            ... on AdvisoryFinding {
              id
              asset {
                id
                mrn
                name
                icon
                tags {
                  key
                  value
                }
              }
              iconId
              lastUpdated
              mrn
              riskValue
              rating
              riskFactors {
                mrn
                indicator
                title
                affected
                total
                isPositive
              }
              title
              state
              exception {
                id
                exceptionId
                reviewStatus
                action
              }
            }

            ... on PackageFinding {
              id
              packageName
              asset {
                id
                mrn
                name
                icon
                tags {
                  key
                  value
                }
              }
              rating
              riskValue
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
