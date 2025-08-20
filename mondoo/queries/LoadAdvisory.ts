import { gql } from "@apollo/client";

export const LOAD_ADVISORY = gql`
  query LoadAdvisory($id: ID!) {
    advisory(id: $id) {
      mrn
      id
      title
      vulnerabilityRiskFactors {
        ...VulnerabilityRiskFactorsFields
      }
      externalUrls {
        iconIDEnum
        url
        title
      }
      publishedAt
      modifiedAt
      description
      cvssScore {
        id
        value
        type
        vector
        source
        rating
      }
    }
  }
`;
