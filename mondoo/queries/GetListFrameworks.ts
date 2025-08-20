import { gql } from "@apollo/client";

export const GET_LIST_FRAMEWORKS = gql`
  query GetListFrameworks($input: ListFrameworksInput!) {
    listFrameworks(input: $input) {
      edges {
        cursor
        node {
          mrn
          authors {
            name
            email
            type
          }
          title
          description
          state
          tags {
            key
            value
          }
          score {
            id
            iconId
            spaceId
            entity {
              ... on EntityInfoAsset {
                id
                mrn
                name
                icon
                lastUpdated
              }
              ... on EntityInfoSpace {
                id
                mrn
                name
              }
            }
            tags {
              key
              value
            }
            findingMrn
            rank
            baseScore
            riskValue
            completion
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
              error
              pass
              disabled
              snoozed
            }
            riskFactors {
              mrn
              indicator
              title
              affected
              total
              isPositive
            }
            title
            description
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
            versionDistribution {
              total
              distribution {
                version
                count
                riskValue
              }
              assets
              installations
            }
            state
          }
          uploadedAt
        }
      }
    }
  }
`;
