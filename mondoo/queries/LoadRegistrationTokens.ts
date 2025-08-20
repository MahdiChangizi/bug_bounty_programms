import { gql } from "@apollo/client";

export const LOAD_REGISTRATION_TOKENS = gql`
  query LoadRegistrationTokens(
    $spaceMrn: String!
    $orderBy: RegistrationTokenOrder
    $first: Int
    $after: String
  ) {
    registrationTokens(
      spaceMrn: $spaceMrn
      orderBy: $orderBy
      first: $first
      after: $after
    ) {
      edges {
        cursor
        node {
          id
          mrn
          description
          token
          createdBy
          createdAt
          expiresAt
          revoked
          labels {
            key
            value
          }
        }
      }
      totalCount
      pageInfo {
        hasPreviousPage
        hasNextPage
        endCursor
        startCursor
      }
    }
  }
`;
