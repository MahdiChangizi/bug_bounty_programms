import { gql } from "@apollo/client";

export const GET_COMPLIANCE_FRAMEWORK_CONTROLS = gql`
  query GetComplianceFrameworkControls(
    $input: ComplianceFrameworkInput!
    $controlsInput: ControlsSearchInput!
  ) {
    complianceFramework(input: $input) {
      mrn
      name
      controls(input: $controlsInput) {
        totalCount
        edges {
          cursor
          node {
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
              totalQueries
            }
            exception {
              author {
                name
                mrn
                email
                type
              }
              createdAt
              action
              id
              reviewStatus
              title
              justification
            }
          }
        }
        pageInfo {
          startCursor
          endCursor
          hasNextPage
          hasPreviousPage
        }
      }
    }
  }
`;
