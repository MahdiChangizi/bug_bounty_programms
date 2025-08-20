import { gql } from "@apollo/client";

export const LIST_SPACE_EXCEPTIONS = gql`
  query ListSpaceExceptions(
    $input: ListExceptionGroupsInput!
    $first: Int
    $after: String
    $last: Int
    $before: String
  ) {
    listExceptionGroups(
      input: $input
      first: $first
      after: $after
      last: $last
      before: $before
    ) {
      totalCount
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        startCursor
      }
      edges {
        cursor
        node {
          action
          author {
            name
            mrn
            email
            type
          }
          createdAt
          deletedAt
          deletedBy {
            email
            name
            type
          }
          exceptions {
            ... on ControlsEdge {
              node {
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
              }
            }
            ... on SpaceAdvisoryException {
              mrn
              id
              title
              iconId
              riskValue
              rating
              cvss {
                id
                value
                type
                vector
                source
                rating
              }
            }
            ... on SpaceCheckException {
              mrn
              title
              riskValue
              rating
              assetsStats {
                passed
                failed
                errored
                total
              }
              policyMrn
              policyName
            }
            ... on SpaceCveException {
              mrn
              id
              title
              riskValue
              rating
              cvss {
                id
                value
                type
                vector
                source
                rating
              }
            }
            ... on AssetAdvisoryException {
              mrn
              id
              title
              iconId
              riskValue
              rating
              cvss {
                id
                value
                type
                vector
                source
                rating
              }
            }
            ... on AssetCheckException {
              mrn
              title
              riskValue
              rating
              policyMrn
              policyName
            }
            ... on AssetCveException {
              mrn
              id
              title
              riskValue
              rating
              cvss {
                id
                value
                type
                vector
                source
                rating
              }
            }
          }
          id
          exceptionId
          scopeMrn
          title
          justification
          modifiedAt
          validUntil
          reviewStatus
          reviewer {
            email
            name
            type
          }
        }
      }
    }
  }
`;
