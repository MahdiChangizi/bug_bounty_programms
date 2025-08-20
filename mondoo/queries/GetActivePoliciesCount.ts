import { gql } from "@apollo/client";

export const GET_ACTIVE_POLICIES_COUNT = gql`
  query GetActivePoliciesCount($input: ActivePoliciesInput!) {
    activePolicies(input: $input) {
      totalCount
    }
  }
`;
