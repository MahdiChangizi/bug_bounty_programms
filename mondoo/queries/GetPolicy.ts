import { gql } from "@apollo/client";

export const GET_POLICY = gql`
  query GetPolicy($input: PolicyInput!) {
    policy(input: $input) {
      mrn
      name
      version
      action
      assigned
      trustLevel
      docs
      authors {
        name
        email
        type
      }
      variantPlatformFilters {
        id
        title
        icon
      }
    }
  }
`;
