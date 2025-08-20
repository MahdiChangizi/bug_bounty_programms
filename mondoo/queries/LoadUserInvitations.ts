import { gql } from "@apollo/client";

export const LOAD_USER_INVITATIONS = gql`
  query LoadUserInvitations(
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
          expiresAt
          message
          state
        }
      }
    }
  }
`;
