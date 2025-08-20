import { gql } from "@apollo/client";

export const TEST_IAM_ACTIONS = gql`
  query TestIAMActions($resourceMrn: String!, $actions: [String!]!) {
    testIamActions(resourceMrn: $resourceMrn, actions: $actions)
  }
`;
