import { gql } from "@apollo/client";

export const MQUERY_ASSET_SCORES = gql`
  query MqueryAssetScores(
    $input: MqueryAssetScoresInput!
    $first: Int!
    $after: String
    $orderBy: AssetOrder
  ) {
    mqueryAssetScores(
      input: $input
      first: $first
      after: $after
      orderBy: $orderBy
    ) {
      title
      description
      totalCount
      scoreDistribution {
        pass
        fail
        error
        unknown
      }
      edges {
        cursor
        node {
          assetMrn
          assetName
          assetPlatform {
            name
            title
            arch
            version
            kind
            runtime
            release
          }
          score {
            id
            value
            type
            completion
            weight
            message
            grade
          }
        }
      }
      pageInfo {
        startCursor
        endCursor
        hasNextPage
        hasPreviousPage
      }
      docs {
        desc
        remediations {
          ... on Remediations {
            entries {
              id
              desc
            }
          }
          ... on AuthenticationRequired {
            message
            code
          }
        }
        references {
          title
          url
        }
      }
      mql
    }
  }
`;
