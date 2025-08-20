import { gql } from "@apollo/client";

export const LOAD_AGENT = gql`
  query LoadAgent($mrn: String!) {
    agent(mrn: $mrn) {
      id
      mrn
      name
      status {
        version
        state
        lastCheckin
      }
      labels {
        key
        value
      }
      platform {
        name
        release
        arch
      }
      hostname
      ipaddress
      createdAt
      errors {
        timestamp
        message
      }
    }
  }
`;
