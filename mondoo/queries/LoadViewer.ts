import { gql } from "@apollo/client";

export const LOAD_VIEWER = gql`
  query LoadViewer {
    viewer {
      mrn
      email
      name
      state
      organizations {
        id
        mrn
        name
        description
        capabilities
        spacesCount
        subscriptionInfo {
          basePlan {
            name
            id
          }
        }
        members {
          totalCount
        }
        owners: members(
          first: 1
          rolesFilter: "//iam.api.mondoo.app/roles/owner"
        ) {
          totalCount
          edges {
            cursor
            node {
              user {
                mrn
                name
                email
              }
            }
          }
        }
      }
      firstSpace {
        id
        mrn
        name
        description
        priorityFindings
        organization {
          id
          mrn
          name
          description
        }
        settings {
          eolAssetsConfiguration {
            enable
            monthsInAdvance
          }
          garbageCollectAssetsConfiguration {
            enable
            afterDays
          }
          terminatedAssetsConfiguration {
            cleanup
            after
          }
          unusedServiceAccountsConfiguration {
            cleanup
            after
          }
          platformVulnerabilityConfiguration {
            enable
          }
          casesConfiguration {
            autoCreate
            aggregationWindow
          }
          platformMqlVexConfiguration {
            enable
          }
          mvdExperimentalSourcesConfiguration {
            sources {
              id
              name
              enabled
            }
          }
        }
        assetGroupStats {
          listsAssetTypes {
            assetType
            aliases
            displayName
            shortName
          }
          groupType
          displayName
          icon
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
        stats {
          assetGroupStatistics {
            groupType
            count
          }
        }
      }
    }
    viewerSettings {
      key
      value
    }
  }
`;
