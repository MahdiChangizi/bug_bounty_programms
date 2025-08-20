import { gql } from "@apollo/client";

export const GET_COMPLIANCE_FRAMEWORKS = gql`
  query GetComplianceFrameworks($input: ComplianceFrameworksInput!) {
    complianceFrameworks(input: $input) {
      authors {
        name
        email
      }
      createdAt
      modifiedAt
      completion
      description
      mrn
      name
      previousCompletionScores {
        entries {
          score
          timestamp
        }
      }
      scopeMrn
      state
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
      summary
      version
      tags {
        key
        value
      }
    }
  }
`;
