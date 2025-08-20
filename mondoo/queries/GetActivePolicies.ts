import { gql } from "@apollo/client";

export const GET_ACTIVE_POLICIES = gql`
  query GetActivePolicies($input: ActivePoliciesInput!) {
    activePolicies(input: $input) {
      totalCount
      edges {
        cursor
        node {
          mrn
          name
          icon
          updatedAt
          lastAppliedAt
          action
          score {
            riskValue
            rating
            blastRadius {
              indicator
              assets
              affected
              critical
              high
              medium
              low
              none
              error
              pass
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
  }
`;
