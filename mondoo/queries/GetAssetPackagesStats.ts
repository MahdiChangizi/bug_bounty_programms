import { gql } from "@apollo/client";

export const GET_ASSET_PACKAGES_STATS = gql`
  query GetAssetPackagesStats($input: AssetPackagesStatsInput!) {
    assetPackagesStats(input: $input) {
      appsCount
      osPackagesCount
    }
  }
`;
