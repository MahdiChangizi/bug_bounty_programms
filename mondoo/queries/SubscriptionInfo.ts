import { gql } from "@apollo/client";

export const SUBSCRIPTION_INFO = gql`
  query SubscriptionInfo($orgMrn: ID!) {
    subscriptionInfo(orgMrn: $orgMrn) {
      isSelfService
      basePlan {
        id
        key
        name
      }
      additions {
        id
        key
        name
        quantity
      }
      utilizationMetrics {
        name
        description
        units
        value
        limit
      }
      pendingCancel
    }
    subscriptionPlans(orgMrn: $orgMrn) {
      basePlan {
        id
        key
        name
        description
        price {
          id
          currency
          cost
        }
        entitlements {
          name
          key
          description
          units
          value
        }
      }
      additions {
        id
        key
        name
        description
        maxQuantity
        price {
          id
          currency
          cost
        }
        entitlements {
          name
          key
          description
          units
          value
        }
      }
      isSelfService
      isCurrent
      isDowngrade
      isUpgrade
    }
  }
`;
