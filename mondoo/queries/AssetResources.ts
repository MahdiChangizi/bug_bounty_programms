import { gql } from "@apollo/client";

export const ASSET_RESOURCES = gql`
  query AssetResources($input: AssetResourceInput!) {
    assetResources(input: $input) {
      selectedNames
      selectedPaths
      resources {
        name
        fields {
          name
          description
          path
          type
          value
          updatedAt
          numElements
          nestedContent
        }
        type
        path
        numElements
        nestedContent
      }
    }
  }
`;
