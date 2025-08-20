import { gql } from "@apollo/client";

export const LOAD_INTEGRATIONS = gql`
  query LoadIntegrations($mrn: String!) {
    integrations(mrn: $mrn) {
      mrn
      name
      enabled
      options {
        url
        chatid
        token
        notificationType
      }
    }
  }
`;
