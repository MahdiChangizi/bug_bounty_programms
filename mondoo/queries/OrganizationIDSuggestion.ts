import { gql } from "@apollo/client";

export const ORGANIZATION_ID_SUGGESTION = gql`
  query OrganizationIDSuggestion($input: IDSuggestionInput!) {
    organizationIDSuggestion(input: $input) {
      id
      available
    }
  }
`;
