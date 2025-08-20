import { gql } from "@apollo/client";

export const LOAD_RESOURCE_INVITATIONS = gql`
  query LoadResourceInvitations(
    $resourceMrn: String
    $inviteeMrn: String
    $first: Int
    $after: String
    $orderBy: InvitationOrder = { direction: ASC, field: CREATED }
  ) {
    invitations(
      resourceMrn: $resourceMrn
      inviteeMrn: $inviteeMrn
      first: $first
      after: $after
      orderBy: $orderBy
    ) {
      edges {
        cursor
        node {
          mrn
          resourceMrn
          senderEmail
          inviteeEmail
          roleMrn
          roleMrns
          expiresAt
          message
          state
        }
      }
      totalCount
      pageInfo {
        startCursor
        endCursor
        hasNextPage
        hasPreviousPage
      }
    }
  }
`;
