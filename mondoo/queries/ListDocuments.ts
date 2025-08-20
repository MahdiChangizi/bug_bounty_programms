import { gql } from "@apollo/client";

export const LIST_DOCUMENTS = gql`
  query ListDocuments($scopeMrn: String!, $first: Int!, $after: String) {
    listDocuments(scopeMRN: $scopeMrn, first: $first, after: $after) {
      totalCount
      edges {
        cursor
        node {
          mrn
          name
          type
          format
          status
          statusMessage
          createdBy {
            name
            email
            type
          }
          requestedAt
          generatedAt
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
