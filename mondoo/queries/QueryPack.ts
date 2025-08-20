import { gql } from "@apollo/client";

export const QUERY_PACK = gql`
  query QueryPack($input: PolicyInput!) {
    policy(input: $input) {
      # namespace
      uid
      mrn
      name
      version
      summary
      docs
      authors {
        name
        email
        type
      }
      platforms {
        id
        name
        version
      }
      category
      trustLevel
      access
      statistics {
        checks
        queries
        policies
      }
      tags {
        key
        value
      }
      featured
      queries {
        # namespace
        uid
        mrn
        title
        docs {
          desc
          remediations {
            ... on Remediations {
              entries {
                id
                desc
              }
            }
            ... on AuthenticationRequired {
              message
              code
            }
          }
          references {
            title
            url
          }
        }
        impact {
          value
          rating
        }
        mql
        tags {
          key
          value
        }
        properties {
          uid
          mrn
          title
          mql
          setByPolicyMrn
          for {
            mrn
          }
        }
        action
      }
      properties {
        uid
        mrn
        title
        mql
        setByPolicyMrn
        for {
          mrn
        }
      }
      groups {
        title
        summary
        checks {
          mrn
          impact {
            value
            rating
          }
          action
        }
        queries {
          mrn
          impact {
            value
            rating
          }
          action
        }
        policies {
          mrn
          impact {
            value
            rating
          }
          action
        }
      }
      runCli {
        command
        installDocsURL
      }
      githubUrl
      assigned
      mutationStatistics {
        checks {
          active
          ignored
          removed
        }
        queries {
          active
          ignored
          removed
        }
      }
      updatedAt
      createdAt
      variantPlatformFilters {
        id
        title
        icon
      }
    }
  }
`;
