import { gql } from "@apollo/client";

export const LIST_CLIENT_INTEGRATIONS = gql`
  query ListClientIntegrations($input: ListClientIntegrationsInput!) {
    listClientIntegrations(input: $input) {
      integrations {
        mrn
        name
        status
        created
        type
        lastCheckin
        messages {
          message
          status
        }
        configurationOptions {
          ... on AWSConfigurationOptions {
            accountIds
            region
            isOrganization
            scanConfiguration {
              ec2ScanOptions {
                ebsScanOptions {
                  maxAsgInstances
                  targetInstancesPerScanner
                }
                ebsVolumeScan
                vaultType
                tagsFilter
                excludedTagsFilter
                regionsFilter
                excludedRegionsFilter
                instanceIdsFilter
                excludedInstanceIdsFilter
                secretsMetadataQuery
                awsSecretsManagerVault
                ssm
                instanceConnect
              }
              eventScanTriggers {
                eventDetailType
                eventSource
                scanType
              }
              ecrScan
              ecsScan
              cronScaninHours
              accountScan
              ec2Scan
            }
            snsEndpoint
            originAWSAccountId
          }
          ... on HostedAwsConfigurationOptions {
            accessKeyId
            role
          }
          ... on K8sConfigurationOptions {
            scanDeploys
            scanNodes
            scanWorkloads
            scanPublicImages
            certificateManager
          }
          ... on MicrosoftDefenderConfigurationOptions {
            tenantId
            clientId
            subscriptionsAllowlist
            subscriptionsDenylist
            secretType
          }
          ... on GithubConfigurationOptions {
            owner
            repository
            organization
            type
            reposAllowList
            reposDenyList
          }
          ... on ShodanConfigurationOptions {
            token
            targets
          }
          ... on SentinelOneConfigurationOptions {
            host
            account
            secretType
            createAssets
          }
          ... on CrowdstrikeFalconConfigurationOptions {
            clientId
            cloud
            memberCID
            createAssets
          }
        }
        lastStateInfo {
          ... on K8sIntegrationLastState {
            namespace
            k8sVersion
            operatorVersion
          }
        }
      }
    }
  }
`;
