import { gql } from "@apollo/client";

export const GET_WORKSPACE = gql`
  query GetWorkspace($mrn: String!, $metricMrns: [String!]) {
    workspace(mrn: $mrn) {
      ... on Workspace {
        mrn
        ownerMrn
        name
        description
        priorityFindings
        assetGroupStats {
          count
          groupType
          displayName
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
      }
      ... on RequestError {
        code
        message
      }
      ... on NotFoundError {
        code
        message
      }
    }
  }
`;
