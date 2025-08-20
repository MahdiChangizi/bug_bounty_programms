import { gql } from "@apollo/client";

export const GET_SPACE_RISK_FACTORS = gql`
  query GetSpaceRiskFactors($spaceMrn: String!) {
    riskFactors(spaceMrn: $spaceMrn) {
      edges {
        mrn
        title
        indicator
        action
        docs {
          active
          inactive
        }
        magnitude {
          value
          isToxic
        }
        defaultMagnitude {
          value
          isToxic
        }
        assetFieldFilters {
          labelBasedFilters {
            key
            value
          }
          annotationBasedFilters {
            key
            value
          }
        }
      }
    }
  }
`;
