import { gql } from "@apollo/client";

export const GET_CLIENT_INTEGRATION_DELETE_COMMAND = gql`
  query GetClientIntegrationDeleteCommand(
    $input: GetClientIntegrationDeleteCommandInput!
  ) {
    getClientIntegrationDeleteCommand(input: $input) {
      message
    }
  }
`;
