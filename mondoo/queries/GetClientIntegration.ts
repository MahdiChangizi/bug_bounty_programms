import { gql } from "@apollo/client";

export const GET_CLIENT_INTEGRATION = gql`
  query GetClientIntegration($mrn: String!) {
    clientIntegration(input: { mrn: $mrn }) {
      integration {
        mrn
        name
        status
        type
        created
        lastModified
        scanJobAttempted
        scanJobStarted
        scanJobFinished
        lastCheckin
        lastStateInfo {
          ... on K8sIntegrationLastState {
            namespace
            k8sVersion
            operatorVersion
          }
        }
        evaluatedConfigurations {
          option
          configured
          applied
          msg
          msgStatus
          operatorMsg
          operatorMsgStatus
        }
        messages {
          message
          status
          identifier
          timestamp
          suppressedByUser
        }
        labels {
          key
          value
        }
        createdBy {
          name
          email
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
              vpcConfiguration {
                CIDR
                vpcFlavour
                vpcTag {
                  key
                  value
                }
              }
            }
            snsEndpoint
            originAWSAccountId
            cloudFormationTemplateUrl
          }
          ... on HostedAwsConfigurationOptions {
            accessKeyId
            role
          }
          ... on K8sConfigurationOptions {
            scanNodes
            scanNodesStyle
            scanWorkloads
            scanDeploys
            certificateManager
            scanPublicImages
            namespaceAllowList
            namespaceDenyList
          }
          ... on AzureConfigurationOptions {
            tenantId
            clientId
            subscriptionsWhitelist
            subscriptionsBlacklist
            scanVms
            secretType
          }
          ... on BigqueryConfigurationOptions {
            datasetId
          }
          ... on SnowflakeConfigurationOptions {
            accountId
            database
            schema
            region
            warehouse
            role
            username
          }
          ... on AwsS3ConfigurationOptions {
            output
            bucket
            region
            accessKey
          }
          ... on S3ConfigurationOptions {
            output
            endpoint
            bucket
            useLegacyList
            usePathStyle
            accessKey
          }
          ... on Ms365ConfigurationOptions {
            tenantId
            clientId
          }
          ... on MicrosoftDefenderConfigurationOptions {
            tenantId
            clientId
            subscriptionsAllowlist
            subscriptionsDenylist
            secretType
            createAssets
          }
          ... on GcpConfigurationOptions {
            projectId
            organizationId
            discoverAll
          }
          ... on GithubConfigurationOptions {
            owner
            repository
            githubOrg: organization
            githubType: type
            reposAllowList
            reposDenyList
            githubDiscoverK8sManifests: discoverK8sManifests
            githubDiscoverTerraform: discoverTerraform
            enterpriseUrl
          }
          ... on OktaConfigurationOptions {
            organization
          }
          ... on GitlabConfigurationOptions {
            group
            type
            discoverGroups
            discoverProjects
            discoverTerraform
            discoverK8sManifests
            baseUrl
          }
          ... on GoogleWorkspaceConfigurationOptions {
            impersonatedUserEmail
            customerId
          }
          ... on GcsBucketConfigurationOptions {
            output
            bucket
          }
          ... on HostConfigurationOptions {
            host
            https
            http
          }
          ... on PostgresConfigurationOptions {
            host
            port
            database
            user
          }
          ... on JiraConfigurationOptions {
            host
            email
            autoCloseTickets
            autoCreateCases
            defaultProject
          }
          ... on EmailConfigurationOptions {
            autoCreateTickets
            recipients {
              name
              email
              isDefault
              referenceUrl
            }
          }
          ... on ShodanConfigurationOptions {
            token
            targets
          }
          ... on ZendeskConfigurationOptions {
            subdomain
            email
            autoCloseTickets
            autoCreateTickets
            customFields {
              id
              value
            }
          }
          ... on GithubTicketingConfigurationOptions {
            enterpriseUrl
            defaultRepoOwner
            defaultRepoName
            autoCloseTickets
            autoCreateTickets
          }
          ... on GitlabTicketingConfigurationOptions {
            gitlabBaseUrl: baseUrl
            gitlabDefaultProject: defaultProject
            autoCloseTickets
            autoCreateTickets
          }
          ... on AzureDevopsConfigurationOptions {
            defaultProjectName
            organizationUrl
            servicePrincipalId
            tenantId
            autoCloseTickets
            autoCreateTickets
          }
          ... on OciConfigurationOptions {
            tenancyOcid
            userOcid
            region
            fingerprint
          }
          ... on AzureBlobConfigurationOptions {
            output
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
        assetCounts {
          assetType
          total
        }
      }
    }
  }
`;
