import { gql } from "@apollo/client";

export const GET_QUERY_PACK = gql`
  query GetQueryPack($input: PolicyInput!) {
    policy(input: $input) {
      mrn
      name
      version
      assigned
      authors {
        name
        email
        type
      }
      docs
      trustLevel
      variantPlatformFilters {
        id
        title
        icon
      }
    }
  }
`;
