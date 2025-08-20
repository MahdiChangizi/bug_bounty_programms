import { gql } from "@apollo/client";

export const GET_ORGANIZATION_OVERVIEW = gql`
  query GetOrganizationOverview($input: OrganizationOverviewInput!) {
    organizationOverview(input: $input) {
      organizationMrn
      assetScores {
        date
        scores {
          total
          A
          B
          C
          D
          F
          U
          Error
        }
      }
      assets {
        scores {
          total
          A
          B
          C
          D
          F
          U
          Error
        }
        improved
        regressed
        unchanged
      }
      vulnerabilities {
        date
        critical
        high
      }
      topVulnerabilities {
        totalAffectedAssets
        stats {
          amountAssets
          spaceMrn
          spaceName
          spaceOwners
        }
        cve {
          id
          title
          description
          cvssScore {
            id
            type
            value
          }
        }
      }
      newVulnerabilities {
        date
        assetsAffected
        cve {
          id
          title
          description
          cvssScore {
            type
            value
          }
        }
      }
      spacesOverview {
        spaceName
        spaceMrn
        scores {
          total
          A
          B
          C
          D
          F
          U
          Error
        }
      }
      integrationSummaries {
        type
        totalCount
      }
      eolAssets
      reportDate
    }
  }
`;
