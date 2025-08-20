import { gql } from "@apollo/client";

export const LOAD_ADVISORY_CVES = gql`
  query LoadAdvisoryCves($advisoryId: ID!, $scopeMrn: String) {
    advisory(id: $advisoryId) {
      id
      mrn
      cves(scopeMrn: $scopeMrn) {
        id
        mrn
        riskValue
        rating
        source {
          id
          name
          url
        }
        title
        description
        summary
        publishedAt
        modifiedAt
        url
        cvssScore {
          id
          value
          type
          vector
          source
        }
        epssScore {
          percentile
          probability
        }
        cwe
        state
        vulnerabilityRiskFactors {
          ...VulnerabilityRiskFactorsFields
        }
      }
    }
  }
`;
