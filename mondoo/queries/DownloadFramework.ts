import { gql } from "@apollo/client";

export const DOWNLOAD_FRAMEWORK = gql`
  query DownloadFramework($input: DownloadFrameworkInput!) {
    downloadFramework(input: $input) {
      ... on FrameworkBundle {
        yaml
      }
    }
  }
`;
