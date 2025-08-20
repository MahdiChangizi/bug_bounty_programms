import { gql } from "@apollo/client";

export const GET_COMPLIANCE_CONTROL = gql`
  query GetComplianceControl($input: ComplianceControlInput!) {
    complianceControl(input: $input) {
      framework {
        name
        version
      }
      mrn
      description
      title
      manual
      completion
      tags {
        key
        value
      }
      state
      assetGroupStatistics {
        count
        groupType
        listsAssetTypes {
          assetType
          aliases
          displayName
          shortName
        }
        statistics {
          count
          type {
            assetType
            aliases
            displayName
            shortName
          }
        }
      }
      assetsStats {
        compliantAssets
        failedAssets
        totalAssets
      }
      checksStats {
        activeChecks
        snoozedChecks
        disabledChecks
        totalChecks
      }
      exceptions {
        id
        author {
          name
          mrn
          email
          type
        }
        reviewer {
          name
          email
        }
        createdAt
        modifiedAt
        title
        justification
        reviewStatus
        action
      }
    }
  }
`;
