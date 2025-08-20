import { gql } from "@apollo/client";

export const GET_SEARCH_RESULTS = gql`
  query GetSearchResults(
    $input: AssetSearchInput!
    $orderBy: AssetOrder
    $first: Int!
    $after: String
  ) {
    assetSearch(
      input: $input
      first: $first
      after: $after
      orderBy: $orderBy
    ) {
      totalCount
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        startCursor
      }
      edges {
        cursor
        node {
          asset_type
          id
          mrn
          name
          platform {
            arch
            kind
            name
            runtime
            title
            version
          }
          referenceIDs
          score {
            completion
            grade
            id
            message
            type
            value
            weight
          }
          state
          updatedAt
        }
      }
    }
  }
`;
