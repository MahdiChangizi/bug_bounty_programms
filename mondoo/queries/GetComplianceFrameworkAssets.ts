import { gql } from "@apollo/client";

export const GET_COMPLIANCE_FRAMEWORK_ASSETS = gql`
  query GetComplianceFrameworkAssets(
    $input: ComplianceFrameworkInput!
    $assetsInput: ComplianceAssetsSearchInput!
  ) {
    complianceFramework(input: $input) {
      mrn
      name
      assetGroupStatistics {
        listsAssetTypes {
          assetType
          aliases
          displayName
          shortName
        }
        groupType
        count
        statistics {
          type {
            assetType
            aliases
            displayName
            shortName
          }
          count
        }
      }
      assets(input: $assetsInput) {
        totalCount
        edges {
          cursor
          node {
            compliancePercentage
            asset {
              id
              mrn
              state
              name
              labels {
                key
                value
              }
              updatedAt
              platform {
                name
                title
                arch
                version
                kind
                runtime
                release
              }
              score {
                completion
                grade
                id
                message
                type
                value
                weight
              }
              referenceIDs
              annotations {
                key
                value
              }
              asset_type
              relatedAssets {
                count {
                  count
                  isParent
                  type
                }
                list {
                  totalCount
                }
              }
            }
          }
        }
        pageInfo {
          endCursor
          hasNextPage
          hasPreviousPage
          startCursor
        }
      }
    }
  }
`;
