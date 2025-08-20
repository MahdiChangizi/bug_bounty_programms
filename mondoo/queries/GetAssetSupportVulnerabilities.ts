import { gql } from "@apollo/client";

export const GET_ASSET_SUPPORT_VULNERABILITIES = gql`
  query GetAssetSupportVulnerabilities($assetMrn: String!) {
    assetSupportVulnerabilities(assetMrn: $assetMrn)
  }
`;
