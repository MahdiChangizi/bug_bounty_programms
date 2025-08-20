import { gql } from "@apollo/client";

export const LOAD_CICD_PROJECTS = gql`
  query LoadCicdProjects($input: CicdProjectsInput!) {
    cicdProjects(input: $input) {
      ... on CicdProjects {
        spaceMrn
        projects {
          totalCount
          edges {
            cursor
            node {
              id
              mrn
              type
              name
            }
          }
          pageInfo {
            startCursor
            endCursor
            hasNextPage
            hasPreviousPage
          }
        }
      }
    }
  }
`;
