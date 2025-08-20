import { gql } from "@apollo/client";

export const LOAD_PLATFORMS = gql`
  query LoadPlatforms($input: PlatformsListInput!) {
    platforms(input: $input) {
      id
      name
      version
    }
  }
`;
