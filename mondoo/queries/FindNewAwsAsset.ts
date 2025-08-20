import { gql } from "@apollo/client";

// This query is built specifically to help determine
// if a user has completed adding an aws asset to their space
// via the AWS Modal Guide campaign

export const FIND_NEW_AWS_ASSET = gql`
  query FindNewAwsAsset($scopeMrn: String!) {
    assets(scopeMrn: $scopeMrn, platformName: "aws") {
      edges {
        cursor
        node {
          mrn
          platform {
            name
          }
        }
      }
    }
  }
`;
