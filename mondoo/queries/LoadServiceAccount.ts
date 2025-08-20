import { gql } from "@apollo/client";

export const LOAD_SERVICE_ACCOUNT = gql`
  query LoadServiceAccount($mrn: String!) {
    serviceAccount(mrn: $mrn) {
      id
      mrn
      name
      roles {
        mrn
        title
      }
      createdAt
      lastUsed
    }
  }
`;
