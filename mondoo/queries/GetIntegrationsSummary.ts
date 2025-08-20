import { gql } from "@apollo/client";

export const GET_INTEGRATIONS_SUMMARY = gql`
  query GetIntegrationsSummary($input: IntegrationsSummaryInput!) {
    integrationsSummary(input: $input) {
      integrationSummaries {
        totalCount
        activeCount
        failedCount
        warningCount
        assetsCount
        policiesCount
        checksCount
        type
      }
      total
    }
  }
`;
