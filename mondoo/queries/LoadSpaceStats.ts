import { gql } from "@apollo/client";

export const LOAD_SPACE_STATS = gql`
  query LoadSpaceStats($mrn: String!) {
    space(mrn: $mrn) {
      id
      mrn
      stats {
        assetGroupStatistics {
          groupType
          count
          listsAssetTypes {
            assetType
            displayName
            shortName
            aliases
          }
          statistics {
            type {
              assetType
              displayName
              shortName
            }
            count
          }
        }
        integrationsStatistics {
          active
          pending
          errored
          total
          type
        }
      }
    }
  }
`;
