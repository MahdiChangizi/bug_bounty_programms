import { gql } from "@apollo/client";

export const LOAD_EMAIL_PREFERENCES = gql`
  query LoadEmailPreferences {
    emailPreferences {
      listID
      subscribed
      subscribedAt
    }
  }
`;
