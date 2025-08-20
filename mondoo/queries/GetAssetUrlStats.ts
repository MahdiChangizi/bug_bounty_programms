import { gql } from "@apollo/client";

export const GET_ASSET_URL_STATS = gql`
  query GetAssetUrlStats($input: AssetUrlStatsInput!) {
    assetUrlStats(input: $input) {
      stats {
        assetUrl {
          key
          value
        }
        scoreDistribution {
          Unscored
          Ok
          Low
          Medium
          High
          Critical
        }
      }
    }
  }
`;
