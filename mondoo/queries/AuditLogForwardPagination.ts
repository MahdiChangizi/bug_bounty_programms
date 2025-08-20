import { gql } from "@apollo/client";

export const AUDIT_LOG_FORWARD_PAGINATION = gql`
  query AuditLogForwardPagination(
    $resourceMrn: String!
    $actionFilter: String
    $identityFilter: IdentityFilter
    $timestampFilter: TimestampFilter
    $orderBy: AuditLogOrder = { direction: DESC, field: TIMESTAMP }
    $first: Int
    $after: String
  ) {
    auditlog(
      resourceMrn: $resourceMrn
      actionFilter: $actionFilter
      identityFilter: $identityFilter
      timestampFilter: $timestampFilter
      orderBy: $orderBy
      first: $first
      after: $after
    ) {
      totalCount
      edges {
        cursor
        node {
          identity {
            name
            mrn
          }
          resource
          action
          timestamp
          msg
          ip
          parent
        }
      }
      pageInfo {
        startCursor
        endCursor
        hasNextPage
      }
    }
  }
`;
