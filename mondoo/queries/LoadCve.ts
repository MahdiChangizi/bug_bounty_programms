import { gql } from "@apollo/client";

export const LOAD_CVE = gql`
  query LoadCve($id: ID!) {
    cve(id: $id) {
      cvssScore {
        id
        source
        type
        value
        vector
        rating
      }
      epssScore {
        percentile
        probability
      }
      cwe
      description
      id
      modifiedAt
      mrn
      publishedAt
      source {
        id
        name
        url
      }
      url
      references
      state
      summary
      title
      vulnerabilityRiskFactors {
        ...VulnerabilityRiskFactorsFields
      }
    }
  }
`;
