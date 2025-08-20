import { gql } from "@apollo/client";

export const GET_ASSET_LINK_INFO = gql`
  query GetAssetLinkInfo($input: AssetLinkInfoInput!) {
    getAssetLinkInfo(input: $input) {
      ... on FleetAssetLinkInfo {
        mrn
        assetLinkType
      }
      ... on CiAssetLinkInfo {
        mrn
        assetLinkType
        projectID
      }
    }
  }
`;
