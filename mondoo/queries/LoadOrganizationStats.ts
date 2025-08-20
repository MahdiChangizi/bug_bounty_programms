import { gql } from "@apollo/client";

export const LOAD_ORGANIZATION_STATS = gql`
  query LoadOrganizationStats(
    $mrn: String!
    $first: Int
    $after: String
    $query: String
    $metricMrns: [String!]
  ) {
    organization(mrn: $mrn) {
      id
      mrn
      name
      spacesCount
      spacesList(first: $first, after: $after, query: $query) {
        totalCount
        edges {
          cursor
          node {
            id
            mrn
            name
            description
            priorityFindings
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
            metrics(metricMrns: $metricMrns) {
              ... on MetricsResponse {
                entries {
                  metricMrn
                  title
                  arrowResult
                }
              }
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
