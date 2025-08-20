import { gql } from "@apollo/client";
import { BlastRadiusFieldsFragmentDoc } from "../types";

export const GET_AGGREGATE_SCORES = gql`
  query GetAggregateScores(
    $entityMrn: String!
    $filter: AggregateScoreFilter
    $first: Int
    $after: String
    $last: Int
    $before: String
    $orderBy: AggregateScoreOrder
  ) {
    aggregateScores(
      entityMrn: $entityMrn
      filter: $filter
      first: $first
      after: $after
      last: $last
      before: $before
      orderBy: $orderBy
    ) {
      ... on AggregateScoresConnection {
        totalCount
        edges {
          cursor
          node {
            id
            iconId
            state
            effort
            manualEffort {
              totalManualEffort
              research
              scripting
              rollout
              verification
            }
            entity {
              ... on EntityInfoAsset {
                id
                mrn
                name
              }
              ... on EntityInfoSpace {
                id
                mrn
                name
              }
              ... on EntityInfoWorkspace {
                id
                mrn
                name
              }
            }
            findingMrn
            rank
            baseScore
            baseValue
            baseRating
            riskValue
            rankScore
            scoreType
            rating
            blastRadius {
              ...BlastRadiusFields
            }
            epss {
              probability
              percentile
            }
            cvss {
              id
              value
              type
              vector
              source
              rating
            }
            riskFactors {
              mrn
              indicator
              title
              total
              affected
              isPositive
            }
            detectionSources {
              name
              firstDetectedAt
              lastUpdatedAt
              affectedAssets
              vendor
            }
            title
            description
            tags {
              key
              value
            }
            lastScannedAt
            firstDetectedAt
            remediatedAt
            spaceId
            spaceRiskImprovement
            cases {
              totalCount
              edges {
                node {
                  status
                  mrn
                  createdAt
                  ticketRefs {
                    type
                  }
                }
              }
            }
            exception {
              id
              reviewStatus
              action
              justification
              scope
              exceptionId
              createdAt
              author {
                name
                mrn
                email
                type
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
  ${BlastRadiusFieldsFragmentDoc}
`;
