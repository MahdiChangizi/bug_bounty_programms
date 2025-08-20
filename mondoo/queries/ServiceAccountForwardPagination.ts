import { gql } from "@apollo/client";
import { SERVICE_ACCOUNT_FIELDS } from "../fragments/ServiceAccountFields";

export const SERVICE_ACCOUNT_FORWARD_PAGINATION = gql`
  query ServiceAccountForwardPagination(
    $spaceMrn: String
    $scopeMrn: String
    $first: Int
    $after: String
    $query: String
    $queryTerms: [String!]
    $orderBy: ServiceAccountOrder
  ) {
    serviceAccounts(
      spaceMrn: $spaceMrn
      scopeMrn: $scopeMrn
      first: $first
      after: $after
      query: $query
      queryTerms: $queryTerms
      orderBy: $orderBy
    ) {
      ...ServiceAccountFields
    }
  }
  ${SERVICE_ACCOUNT_FIELDS}
`;
