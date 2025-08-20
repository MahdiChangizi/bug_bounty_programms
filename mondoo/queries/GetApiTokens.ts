import { gql } from "@apollo/client";

export const GET_API_TOKENS = gql`
  query GetApiTokens(
    $spaceMrn: String!
    $scopeMrn: String
    $first: Int
    $after: String
    $queryTerms: [String!]
    $orderBy: APITokenOrder
  ) {
    apiTokens(
      spaceMrn: $spaceMrn
      scopeMrn: $scopeMrn
      first: $first
      after: $after
      queryTerms: $queryTerms
      orderBy: $orderBy
    ) {
      totalCount
      edges {
        cursor
        node {
          mrn
          spaceMrn
          scopeMrn
          name
          description
          roles {
            mrn
            title
          }
          createdAt
          lastUsed
          creator {
            mrn
            email
          }
        }
      }
      pageInfo {
        startCursor
        endCursor
        hasNextPage
        hasPreviousPage
      }
    }
  }
`;
