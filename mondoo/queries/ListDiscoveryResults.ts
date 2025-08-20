import { gql } from "@apollo/client";

export const LIST_DISCOVERY_RESULTS = gql`
  query ListDiscoveryResults($input: ListDiscoveryResultsInput!) {
    listDiscoveryResults(input: $input) {
      stats {
        identifier
        query
        count
        title
      }
    }
  }
`;
