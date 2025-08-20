import { gql } from "@apollo/client";

export const GET_CLIENT_INTEGRATION_TOKEN = gql`
  query GetClientIntegrationToken($input: GetClientIntegrationTokenInput!) {
    getClientIntegrationToken(input: $input) {
      token
    }
  }
`;
