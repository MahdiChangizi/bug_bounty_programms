import { gql } from "@apollo/client";
import { MQUERY_DOCS_FIELDS } from "~/operations/fragments/MqueryDocsFields";

export const LOAD_MQUERY = gql`
  ${MQUERY_DOCS_FIELDS}
  query LoadMquery($input: MqueryInput!) {
    mquery(input: $input) {
      uid
      mrn
      title
      docs {
        ...MqueryDocsFields
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
      parent
      variants {
        id
        mrn
        title
        icon
      }
      variantQueries {
        uid
        mrn
        title
        docs {
          ...MqueryDocsFields
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
        filter
        filterID
      }
      action
    }
  }
`;
