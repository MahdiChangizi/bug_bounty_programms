import { gql } from "@apollo/client";

export const ASSET_SEARCH_SUGGESTIONS = gql`
  query AssetSearchSuggestions($input: AssetSearchSuggestionsInput!) {
    assetSearchSuggestions(input: $input) {
      ... on AssetSearchSuggestions {
        suggestions {
          value
        }
      }
    }
  }
`;
