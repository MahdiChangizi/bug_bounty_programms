import { gql } from "@apollo/client";

export const LOAD_LEGAL_POLICY_CONSENT = gql`
  query LoadLegalPolicyConsent($mrn: String!) {
    legalPolicies(mrn: $mrn) {
      name
      id
      consent {
        mrn
        email
        signatureAt
      }
    }
  }
`;
