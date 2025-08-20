import { gql } from "@apollo/client";

export const GET_QUERY_PACK_QUERIES = gql`
  query GetQueryPackQueries($input: PolicyInput!) {
    policy(input: $input) {
      mrn
      queries {
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
    }
  }
`;
