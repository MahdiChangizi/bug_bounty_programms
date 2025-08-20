import { gql } from "@apollo/client";

export const LOAD_TOP_MISCONFIGS = gql`
  query LoadTopMisconfigs($input: SpacePolicySummaryInput!) {
    spacePolicySummary(input: $input) {
      spaceMrn
      querySummaries {
        edges {
          cursor
          node {
            id
            mquery {
              impact {
                rating
                value
              }
              mrn
              parent
              title
              uid
              action
            }
            mqueryState
            mqueryType
          }
        }
        totalCount
      }
    }
  }
`;
