import { gql } from "@apollo/client";

export const GET_WORKSPACES = gql`
  query GetWorkspaces(
    $input: WorkspacesInput!
    $after: String
    $first: Int
    $metricMrns: [String!]
  ) {
    workspaces(input: $input, after: $after, first: $first) {
      totalCount
      pageInfo {
        startCursor
        endCursor
        hasNextPage
        hasPreviousPage
      }
      edges {
        cursor
        node {
          mrn
          ownerMrn
          name
          description
          assetGroupStats {
            count
            displayName
            groupType
            icon
            listsAssetTypes {
              assetType
              displayName
              shortName
              aliases
            }
            statistics {
              count
              type {
                assetType
                displayName
                shortName
                aliases
              }
            }
          }
          metrics(metricMrns: $metricMrns) {
            ... on MetricsResponse {
              entries {
                metricMrn
                title
                arrowResult
              }
            }
          }
          priorityFindings
        }
      }
    }
  }
`;
