import { gql } from "@apollo/client";

export const DOWNLOAD_BUNDLE = gql`
  query DownloadBundle($input: DownloadBundleInput!) {
    downloadBundle(input: $input) {
      ... on PolicyBundleYaml {
        yaml
      }
    }
  }
`;
