import { gql } from "@apollo/client";

export const GET_TOTAL_ASSETS = gql`
  query GetTotalAssets($scopeMrn: String) {
    assets(scopeMrn: $scopeMrn) {
      totalCount
    }
  }
`;
