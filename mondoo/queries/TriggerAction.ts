import { gql } from "@apollo/client";

export const TRIGGER_ACTION = gql`
  query TriggerAction($input: TriggerActionInput!) {
    triggerAction(input: $input) {
      mrn
    }
  }
`;
