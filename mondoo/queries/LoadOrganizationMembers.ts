import { gql } from "@apollo/client";

export const LOAD_ORGANIZATION_MEMBERS = gql`
  query LoadOrganizationMembers($mrn: String!) {
    organization(mrn: $mrn) {
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
