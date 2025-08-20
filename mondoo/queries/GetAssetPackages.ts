import { gql } from "@apollo/client";

export const GET_ASSET_PACKAGES = gql`
  query GetAssetPackages(
    $scopeMrn: String!
    $first: Int
    $after: String
    $last: Int
    $before: String
    $orderBy: FindingsOrder
    $filter: FindingsFilter
  ) {
    findings(
      scopeMrn: $scopeMrn
      first: $first
      after: $after
      last: $last
      before: $before
      orderBy: $orderBy
      filter: $filter
    ) {
      ... on FindingsConnection {
        edges {
          cursor
          node {
            ... on PackageFinding {
              id
              baseScore
              riskValue
              rating
              title
              packageName
              installedVersion
              availableVersion
              lastUpdated
              firstFound
              cvss {
                id
                value
                type
                vector
                source
                rating
              }
              epss {
                probability
                percentile
              }
              iconId
              packageType
              riskFactors {
                mrn
                indicator
                title
                affected
                total
                isPositive
              }
              platform
              tags {
                key
                value
              }
              asset {
                id
                mrn
                name
                icon
                lastUpdated
                platform {
                  name
                  title
                  arch
                  version
                  kind
                  runtime
                  family
                  labels {
                    key
                    value
                  }
                }
              }
            }
          }
        }
        filteredTotalCount
        pageInfo {
          startCursor
          endCursor
          hasNextPage
          hasPreviousPage
        }
        totalCount
      }
      ... on RequestError {
        message
        code
      }
      ... on NotFoundError {
        message
        code
      }
    }
  }
`;
