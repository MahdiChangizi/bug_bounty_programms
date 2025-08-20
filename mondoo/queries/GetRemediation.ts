import { gql } from "@apollo/client";
import { REMEDIATION_SCRIPT_FIELDS } from "~/operations/fragments/RemediationScriptFields";
import { REMEDIATION_PACKAGE_FIELDS } from "~/operations/fragments/RemediationPackageFields";

export const GET_REMEDIATION = gql`
  query GetRemediation_DEPRECATED($input: RemediationInput!) {
    remediation(input: $input) {
      ... on VulnerabilityRemediationResponse {
        scripts {
          ...RemediationScriptFields
        }
        packages {
          ...RemediationPackageFields
        }
        applicableEcosystems {
          id
          title
          version
          iconIDEnum
        }
        namespaces
        highestVersionEcosystem
      }
    }
  }
  ${REMEDIATION_SCRIPT_FIELDS}
  ${REMEDIATION_PACKAGE_FIELDS}
`;
