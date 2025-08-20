import { gql } from "@apollo/client";

export const LOAD_SPACE_MEMBERS = gql`
  query LoadSpaceMembers($mrn: String!) {
    space(mrn: $mrn) {
      id
      mrn
      members {
        edges {
          cursor
          node {
            user {
              mrn
              email
              name
            }
            roles {
              title
              mrn
            }
          }
        }
      }
    }
  }
`;
