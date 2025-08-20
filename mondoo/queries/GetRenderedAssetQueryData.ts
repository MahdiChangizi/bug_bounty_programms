import { gql } from "@apollo/client";

export const GET_RENDERED_ASSET_QUERY_DATA = gql`
  query GetRenderedAssetDataQuery($input: RenderedAssetQueryDataInput!) {
    renderedAssetQueryData(input: $input) {
      ... on RenderedAssetQueryData {
        assessment
        data
      }
      ... on RequestError {
        message
        code
      }
      ... on NotFoundError {
        message
        code
      }
    }
  }
`;
