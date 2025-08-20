import { gql } from "@apollo/client";

export const GET_COMPLIANCE_CONTROL_ASSETS = gql`
  query GetComplianceControlAssets(
    $input: ComplianceControlInput!
    $assetsInput: ComplianceAssetsSearchInput!
  ) {
    complianceControl(input: $input) {
      mrn
      description
      title
      assets(input: $assetsInput) {
        totalCount
        edges {
          cursor
          node {
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
                id
                value
                type
                completion
                weight
                message
                grade
              }
              referenceIDs
              annotations {
                key
                value
              }
              asset_type
            }
            compliancePercentage
            relatedAssets
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
