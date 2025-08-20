import { gql } from "@apollo/client";

export const LOAD_ORGANIZATION_SSO_PROVIDER = gql`
  query LoadOrganizationSSOProvider($mrn: String!) {
    ssoProvider(mrn: $mrn) {
      provider {
        idpEntityID
        ssoUrl
        rpEntityID
        x509Fingerprints
        enabled
      }
    }
  }
`;
