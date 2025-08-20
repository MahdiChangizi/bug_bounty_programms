import { gql } from "@apollo/client";

export const SPACE_ID_SUGGESTION = gql`
  query SpaceIDSuggestion($input: IDSuggestionInput!) {
    spaceIDSuggestion(input: $input) {
      id
      available
    }
  }
`;
