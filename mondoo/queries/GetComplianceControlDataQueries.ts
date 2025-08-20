import { gql } from "@apollo/client";

export const GET_COMPLIANCE_CONTROL_DATA_QUERIES = gql`
  query GetComplianceControlDataQueries(
    $input: ComplianceControlInput!
    $dataQueriesInput: ChecksSearchInput!
    $first: Int
    $after: String
  ) {
    complianceControl(input: $input) {
      mrn
      dataQueries(input: $dataQueriesInput, first: $first, after: $after) {
        totalCount
        edges {
          cursor
          node {
            assets
            completion
            mquery {
              action
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
              mrn
              parent
              properties {
                uid
                title
                setByPolicyMrn
                mrn
                mql
                for {
                  mrn
                }
              }
              tags {
                key
                value
              }
              title
              uid
              variantQueries {
                filter
                filterID
                impact {
                  value
                  rating
                }
                mql
                mrn
                properties {
                  mql
                  mrn
                  setByPolicyMrn
                  title
                  uid
                  for {
                    mrn
                  }
                }
                tags {
                  key
                  value
                }
                title
                uid
                docs {
                  desc
                  references {
                    title
                    url
                  }
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
                }
              }
              variants {
                id
                icon
              }
            }
            queryStats {
              total
              passed
              failed
              incomplete
              errors
              skipped
              worst
              unknown
            }
            refs {
              ... on QueryPackCheckRef {
                name
                mrn
                group
              }
              ... on PolicyCheckRef {
                name
                mrn
                group
              }
            }
            state
          }
        }
        pageInfo {
          endCursor
          hasNextPage
          hasPreviousPage
          startCursor
        }
      }
    }
  }
`;
