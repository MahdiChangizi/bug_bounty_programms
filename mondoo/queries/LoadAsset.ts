import { gql } from "@apollo/client";

export const LOAD_ASSET = gql`
  query LoadAsset($mrn: String!) {
    asset(mrn: $mrn) {
      id
      mrn
      state
      name
      labels {
        key
        value
      }
      createdAt
      updatedAt
      platform {
        name
        title
        arch
        version
        kind
        runtime
        release
        family
      }
      score {
        id
        value
        type
        completion
        weight
        message
        grade
        riskValue
        riskRating
      }
      eol {
        date
        status
      }
      referenceIDs
      annotations {
        key
        value
      }
      asset_type
      relatedAssets {
        count {
          type
          isParent
          count
        }
        list {
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
        }
      }
      insights {
        security {
          policyCount
          score {
            id
            value
            type
            completion
            weight
            message
            grade
            riskRating
            riskValue
          }
        }
        vulnerability {
          score {
            id
            value
            type
            completion
            weight
            message
            grade
            riskRating
            riskValue
          }
        }
      }
      overviewGroups {
        items {
          key
          name
          sources {
            ... on KeyValueSource {
              key
              value
            }
            ... on QuerySource {
              mrn
            }
          }
          values {
            ... on AssetOverviewStringValue {
              stringValue: value
            }
            ... on AssetOverviewNullValue {
              nullValue: value
            }
            ... on AssetOverviewTimeValue {
              timeValue: value
            }
            ... on AssetOverviewArrayValue {
              arrayValue: value {
                ... on AssetOverviewStringValue {
                  stringValue: value
                }
                ... on AssetOverviewNullValue {
                  nullValue: value
                }
                ... on AssetOverviewTimeValue {
                  timeValue: value
                }
                ... on AssetOverviewDictValue {
                  dictValue: value {
                    key
                    value
                  }
                }
                ... on AssetOverviewBoolValue {
                  boolValue: value
                }
                ... on AssetOverviewReferenceValue {
                  displayValue
                  mrn
                  referenceType
                }
                ... on AssetOverviewError {
                  value {
                    ... on AssetOverviewErrorExecutionFailed {
                      msg
                      queryMrn
                    }
                    ... on AssetOverviewGenericError {
                      code
                      msg
                    }
                  }
                }
                ... on AssetOverviewURLValue {
                  displayValue
                  url
                }
              }
            }
            ... on AssetOverviewDictValue {
              dictValue: value {
                key
                value
              }
            }
            ... on AssetOverviewBoolValue {
              boolValue: value
            }
            ... on AssetOverviewReferenceValue {
              displayValue
              mrn
              referenceType
            }
            ... on AssetOverviewError {
              value {
                ... on AssetOverviewErrorExecutionFailed {
                  msg
                  queryMrn
                }
                ... on AssetOverviewGenericError {
                  code
                  msg
                }
              }
            }
            ... on AssetOverviewURLValue {
              displayValue
              url
            }
          }
        }
        key
        title
      }
      listPolicies {
        totalCount
        edges {
          cursor
          node {
            mrn
            name
            action
            category
            score {
              id
              value
              type
              completion
              weight
              message
              grade
              riskRating
              riskValue
            }
            scoreStats {
              total
              passed
              failed
              incomplete
              errors
              skipped
              worst
              disabled
              snoozed
              unknown
            }
          }
        }
        pageInfo {
          startCursor
          endCursor
          hasNextPage
          hasPreviousPage
        }
      }
      riskFactors {
        mrn
        indicator
        title
        magnitude {
          value
          isToxic
        }
        isDetected
        isPositive
        explanation {
          magnitudeExplanation
          summary
        }
        affected
        total
      }
    }
  }
`;
