import { gql } from "@apollo/client";

export const LOAD_POLICY = gql`
  query LoadPolicy($input: PolicyInput!) {
    policy(input: $input) {
      mrn
      assigned
      action
      access
      authors {
        email
        name
        type
      }
      category
      createdAt
      docs
      featured
      githubUrl
      groups {
        title
        summary
        checks {
          action
          mrn
          impact {
            rating
            value
          }
        }
        queries {
          action
          impact {
            rating
            value
          }
          mrn
        }
        policies {
          action
          impact {
            rating
            value
          }
          mrn
        }
      }
      mutationStatistics {
        checks {
          active
          ignored
          removed
        }
        queries {
          removed
          ignored
          active
        }
      }
      name
      platforms {
        id
        name
        version
      }
      queries {
        mrn
      }
      properties {
        mrn
      }
      runCli {
        command
        installDocsURL
      }
      scoringSystem
      defaultScoringSystem
      statistics {
        checks
        policies
        queries
      }
      summary
      tags {
        key
        value
      }
      trustLevel
      uid
      updatedAt
      variants {
        icon
        id
        title
      }
      version
    }
  }
`;
