import { gql } from "@apollo/client";
import { AGENT_FIELDS } from "../fragments/AgentFields";

export const AGENT_FORWARD_PAGINATION = gql`
  query AgentForwardPagination(
    $spaceMrn: String!
    $after: String
    $first: Int
    $query: String
    $queryTerms: [String!]
    $version: [AgentVersionFilter!]
    $state: [AgentState!]
    $orderBy: AgentOrder
  ) {
    agents(
      spaceMrn: $spaceMrn
      first: $first
      after: $after
      query: $query
      queryTerms: $queryTerms
      version: $version
      state: $state
      orderBy: $orderBy
    ) {
      ...AgentFields
    }
  }
  ${AGENT_FIELDS}
`;
