import { gql } from "@apollo/client";

export const LOAD_ASSET_LIST_POLICIES = gql`
  query LoadAssetListPolicies(
    $mrn: String!
    $first: Int
    $after: String
    $filter: AssetListPoliciesFilter
  ) {
    asset(mrn: $mrn) {
      mrn
      listPolicies(first: $first, after: $after, filter: $filter) {
        totalCount
        edges {
          cursor
          node {
            mrn
            name
            category
            action
            score {
              id
              value
              type
              completion
              weight
              message
              grade
              riskRating
              riskValue
            }
            scoreStats {
              total
              passed
              failed
              incomplete
              errors
              skipped
              worst
              disabled
              snoozed
              unknown
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
