import { gql } from "@apollo/client";

export const PING_INTEGRATION = gql`
  query PingIntegration($input: PingIntegrationInput!) {
    pingIntegration(input: $input) {
      mrn
    }
  }
`;
