import { gql } from "@apollo/client";

export const GET_COMPLIANCE_CONTROL_CHECKS = gql`
  query GetComplianceControlChecks(
    $input: ComplianceControlInput!
    $checksInput: ChecksSearchInput!
    $first: Int
    $after: String
  ) {
    complianceControl(input: $input) {
      mrn
      description
      title
      checks(input: $checksInput, first: $first, after: $after) {
        totalCount
        edges {
          cursor
          node {
            ... on PolicyCheck {
              state
              policyName
              policyMrn
              completion
              assets
            }
            ... on QueryCheck {
              exception {
                id
                action
                justification
                reviewStatus
              }
              state
              refs {
                ... on QueryPackCheckRef {
                  name
                  mrn
                  group
                }
                ... on PolicyCheckRef {
                  name
                  mrn
                  group
                }
              }
              mquery {
                action
                impact {
                  rating
                  value
                }
                uid
                title
                mrn
              }
              completion
              assets
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
