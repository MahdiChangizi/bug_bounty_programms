import { gql } from "@apollo/client";

export const GET_SECURITY_MODEL = gql`
  query GetSecurityModel($scopeMrn: String!) {
    securityModel(scopeMrn: $scopeMrn) {
      scopeMrn
      slas {
        findings {
          daysBeforeWarning
          daysToResolve
          rating
          # riskValue is not yet available on FindingsSLA
          # riskValue
        }
      }
    }
  }
`;
