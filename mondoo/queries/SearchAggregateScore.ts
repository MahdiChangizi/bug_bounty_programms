import { gql } from "@apollo/client";

export const SEARCH_AGGREGATE_SCORE = gql`
  query SearchAggregateScore(
    $query: String!
    $type: SearchType!
    $first: Int!
    $after: String
    $scope: String
    $filters: SearchFilters
  ) {
    search(
      query: $query
      type: $type
      first: $first
      after: $after
      scope: $scope
      filters: $filters
    ) {
      scoreTypeDistribution {
        vulnerability
        advisory
        check
        policy
        risk
        asset
        software
        control
        framework
      }
      edges {
        node {
          ... on AggregateScore {
            nodeId: id
            iconId
            entity {
              ... on EntityInfoAsset {
                id
                mrn
                name
              }
              ... on EntityInfoSpace {
                id
                mrn
                name
              }
            }
            findingMrn
            rank
            baseScore
            riskValue
            rating
            scoreType
            blastRadius {
              indicator
              assets
              affected
              critical
              high
              medium
              low
              none
            }
            riskFactors {
              mrn
              indicator
              title
              affected
              total
              isPositive
            }
            nodeTitle: title
            nodeDescription: description
            tags {
              key
              value
            }
            epss {
              probability
              percentile
            }
            cvss {
              id
              value
              type
              vector
              source
            }
            lastScannedAt
            firstDetectedAt
            remediatedAt
            spaceId
          }
          ... on Advisory {
            id
            iconID
            iconIDEnum
            mrn
            source {
              id
              name
              url
            }
            externalUrls {
              title
              url
              iconIDEnum
            }
            title
            description
            cves {
              id
              mrn
              title
              description
              summary
              published
              modified
              publishedAt
              modifiedAt
              url
              cwe
              state
              exploitable
              references
            }
            score {
              id
              value
              type
              vector
              source
            }
            cvssScore {
              id
              value
              type
              vector
              source
            }
            vendorscore
            affectedPackages {
              id
              iconID
              iconIDEnum
              name
              version
              arch
              format
              namespace
              description
              status
              available
              origin
              vulnDiscoveryTime
              type
            }
            published
            modified
            publishedAt
            modifiedAt
            vulnerabilityRiskFactors {
              knownExploited
              remoteExploitable
            }
          }
          ... on Cve {
            id
            mrn
            cveTitle: title
            description

            publishedAt
            modifiedAt

            cvssScores {
              id
              value
              type
              vector
              source
            }
            cwe
            state
            references
            epssScore {
              probability
              percentile
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
`;
