import { gql } from "@apollo/client";

export const GET_COMPLIANCE_FRAMEWORK = gql`
  query GetComplianceFramework($input: ComplianceFrameworkInput!) {
    complianceFramework(input: $input) {
      mrn
      name
      version
      createdAt
      modifiedAt
      authors {
        name
        email
        type
      }
      tags {
        key
        value
      }
      description
      summary
      stats {
        controls {
          activeControls
          snoozedControls
          outOfScopeControls
          disabledControls
          totalControls
          averageCompletion
          previousAverageCompletion
        }
        checks
        assets
        exceptions
      }
      state
      policiesMrns
      scopeMrn
      completion
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
      previousCompletionScores {
        entries {
          score
          timestamp
        }
      }
    }
  }
`;
