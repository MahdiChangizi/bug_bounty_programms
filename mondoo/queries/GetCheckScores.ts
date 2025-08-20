import { gql } from "@apollo/client";

export const GET_CHECK_SCORES = gql`
  query GetCheckScores(
    $entityMrn: String!
    $first: Int
    $after: String
    $orderBy: CheckScoreOrder
    $filter: CheckScoreFilter
  ) {
    checkScores(
      entityMrn: $entityMrn
      first: $first
      after: $after
      orderBy: $orderBy
      filter: $filter
    ) {
      ... on CheckScoresConnection {
        totalCount
        filteredTotalCount
        edges {
          cursor
          node {
            mrn
            id
            title
            state
            iconId
            baseScore
            riskValue
            queryState
            severity
            resultType
            impactRating
            rating
            riskFactors {
              mrn
              indicator
              title
              affected
              total
              isPositive
            }
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
              release
            }
            exception {
              id
              exceptionId
              reviewStatus
              action
              justification
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
