import{g as n,u as r,a as s,b as o}from"./vendor.0Vy7u0D8.js";n`
  mutation AcceptInvitation($invitationMrn: ID!) {
    acceptInvitation(invitationMrn: $invitationMrn)
  }
`;n`
  mutation AcceptLegalPolicy($input: AcceptLegalPolicy!) {
    acceptLegalPolicy(input: $input)
  }
`;n`
  mutation ActivateUserInRegion {
    activateUserInRegion {
      user {
        mrn
      }
    }
  }
`;n`
  mutation AddPolicy($input: [PolicyAddInput!]!) {
    addPolicy(input: $input)
  }
`;n`
  mutation AddQueryPack($input: [QueryPackAddInput!]!) {
    addQueryPack(input: $input)
  }
`;n`
  mutation ApplyExceptionReview($input: ExceptionReviewInput!) {
    applyExceptionReview(input: $input)
  }
`;n`
  mutation ApplyFramework($input: ComplianceFrameworkMutationInput!) {
    applyFrameworkMutation(input: $input)
  }
`;n`
  mutation ApplyException($input: ExceptionMutationInput!) {
    applyException(input: $input)
  }
`;n`
  mutation AssignPolicy($input: PolicyAssignmentInput!) {
    assignPolicy(input: $input)
  }
`;n`
  mutation CancelInvitation($invitationMrn: ID!) {
    cancelInvitation(invitationMrn: $invitationMrn)
  }
`;n`
  mutation ChangeSubscriptionPlan($input: ChangeSubscriptionPlanInput!) {
    changeSubscriptionPlan(input: $input) {
      __typename
      ... on BillingSession {
        url
      }
      ... on PaymentPreview {
        currency
        recurringCost
        dueToday
        prorationDate
        effectiveDate
      }
    }
  }
`;n`
  mutation CreateBillingSession($input: BillingSessionInput!) {
    createBillingSession(input: $input) {
      url
    }
  }
`;n`
  mutation CreateClientIntegration($input: CreateClientIntegrationInput!) {
    createClientIntegration(input: $input) {
      integration {
        mrn
        token
        name
        status
        created
        lastCheckin
        type
        messages {
          message
          status
        }
        configurationOptions {
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
          ... on AWSConfigurationOptions {
            region
            isOrganization
            snsEndpoint
            originAWSAccountId
            cloudFormationTemplateUrl
            scanConfiguration {
              accountScan
              ec2Scan
              ecrScan
              ecsScan
              cronScaninHours
              ec2ScanOptions {
                ebsVolumeScan
                instanceConnect
                instanceIdsFilter
                excludedInstanceIdsFilter
                regionsFilter
                excludedRegionsFilter
                ssm
                tagsFilter
                excludedTagsFilter
              }
              vpcConfiguration {
                CIDR
                vpcFlavour
                vpcTag {
                  key
                  value
                }
              }
            }
          }
          ... on HostedAwsConfigurationOptions {
            accessKeyId
            role
          }
          ... on AgentOptions {
            id
            version
            notes
            platform {
              name
              release
              arch
              kind
              runtime
            }
            hostname
            ipaddress
          }
          ... on AzureConfigurationOptions {
            tenantId
            clientId
            subscriptionsWhitelist
            subscriptionsBlacklist
            scanVms
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
          ... on OktaConfigurationOptions {
            organization
          }
          ... on GcsBucketConfigurationOptions {
            output
            bucket
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
          ... on GoogleWorkspaceConfigurationOptions {
            customerId
            impersonatedUserEmail
          }
          ... on SlackConfigurationOptions {
            placeholder
          }
          ... on PostgresConfigurationOptions {
            host
            port
            database
            user
          }
          ... on OciConfigurationOptions {
            tenancyOcid
            userOcid
            region
            fingerprint
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
          ... on SentinelOneConfigurationOptions {
            host
            account
            secretType
          }
          ... on CrowdstrikeFalconConfigurationOptions {
            clientId
            cloud
            memberCID
            createAssets
          }
        }
      }
    }
  }
`;n`
  mutation CreateInvitation($input: CreateInvitationInput!) {
    createInvitation(input: $input) {
      mrn
    }
  }
`;n`
  mutation CreateOrganization($input: CreateOrganizationInput!) {
    createOrganization(input: $input) {
      id
      mrn
    }
  }
`;n`
  mutation CreateServiceAccount($input: CreateServiceAccountInput) {
    createServiceAccount(input: $input) {
      mrn
      certificate
      privateKey
      scopeMrn
      apiEndpoint
      spaceMrn
    }
  }
`;n`
  mutation CreateSpace($input: CreateSpaceInput!) {
    createSpace(input: $input) {
      id
      mrn
    }
  }
`;n`
  mutation DeclineInvitation($invitationMrn: ID!) {
    declineInvitation(invitationMrn: $invitationMrn)
  }
`;n`
  mutation DeleteAgents($input: DeleteAgentsInput!) {
    deleteAgents(input: $input) {
      agentMrns
      errors
    }
  }
`;n`
  mutation DeleteAPIToken($input: DeleteAPITokenInput!) {
    deleteAPIToken(input: $input) {
      ok
    }
  }
`;n`
  mutation DeleteAssets($input: DeleteAssetsInput!) {
    deleteAssets(input: $input) {
      assetMrns
      errors
    }
  }
`;n`
  mutation DeleteCicdProjects($input: DeleteProjectsInput!) {
    deleteCicdProjects(input: $input) {
      mrns
    }
  }
`;n`
  mutation DeleteClientIntegration($input: DeleteClientIntegrationInput!) {
    deleteClientIntegration(input: $input) {
      mrn
    }
  }
`;n`
  mutation DeleteCustomPolicy($input: DeleteCustomPolicyInput!) {
    deleteCustomPolicy(input: $input) {
      policyMrn
    }
  }
`;n`
  mutation DeleteCustomQueryPack($input: DeleteCustomQueryPackInput!) {
    deleteCustomQueryPack(input: $input) {
      queryPackMrn
    }
  }
`;n`
  mutation DeleteDocument($documentMrn: String!) {
    deleteDocument(documentMRN: $documentMrn)
  }
`;n`
  mutation DeleteOrganization($orgMrn: ID!) {
    deleteOrganization(orgMrn: $orgMrn)
  }
`;n`
  mutation DeletePolicy($input: PolicyDeleteInput!) {
    deletePolicy(input: $input)
  }
`;n`
  mutation DeleteServiceAccounts($input: DeleteServiceAccountsInput!) {
    deleteServiceAccounts(input: $input) {
      mrns
      errors
    }
  }
`;n`
  mutation DeleteSpace($spaceMrn: ID!) {
    deleteSpace(spaceMrn: $spaceMrn)
  }
`;n`
  mutation DeleteWorkspaces($input: DeleteWorkspacesInput!) {
    deleteWorkspaces(input: $input)
  }
`;n`
  mutation EditProperties($input: PropertyQueryMutationInput!) {
    applyPropertyQueryMutation(input: $input) {
      ... on PropertyQueryMutationInvalidTarget {
        message
        code
      }
      ... on PropertyQueryMutationInvalidProperty {
        message
        code
      }
      ... on PropertyQueryMutationSuccess {
        success
      }
    }
  }
`;n`
  mutation EnableSSOProvider($input: EnableSSOProviderInput!) {
    enableSSOProvider(input: $input)
  }
`;n`
  mutation GenerateAPIToken($input: GenerateAPITokenInput!) {
    generateAPIToken(input: $input) {
      token
      spaceMrn
      scopeMrn
      name
      mrn
      description
      createdBy
      createdAt
    }
  }
`;n`
  mutation GeneratePolicy($input: GeneratePolicyInput!) {
    generatePolicy(input: $input) {
      content
      yaml
      policyMrns
    }
  }
`;n`
  mutation GenerateDocument($input: GenerateDocumentInput!) {
    generateDocument(input: $input) {
      mrn
    }
  }
`;n`
  mutation GenerateRegistrationToken($input: RegistrationTokenInput!) {
    generateRegistrationToken(input: $input) {
      id
      mrn
      description
      labels {
        key
        value
      }
      token
      revoked
      createdAt
      createdBy
      expiresAt
    }
  }
`;n`
  mutation ModifySpaceRiskFactors(
    $spaceMrn: String!
    $riskFactors: [ModifyRiskFactorInput!]!
  ) {
    modifyRiskFactors(spaceMrn: $spaceMrn, riskFactors: $riskFactors)
  }
`;n`
  mutation RemoveOrganizationMembership(
    $input: RemoveOrganizationMembershipInput!
  ) {
    removeOrganizationMembership(input: $input)
  }
`;n`
  mutation RemoveSpaceMembership($input: RemoveSpaceMembershipInput!) {
    removeSpaceMembership(input: $input)
  }
`;n`
  mutation ReportViewed($input: ReportViewedInput!) {
    reportViewed(input: $input)
  }
`;n`
  mutation ResendInvitation($invitationMrn: ID!) {
    resendInvitation(invitationMrn: $invitationMrn)
  }
`;n`
  mutation RequestDocumentDownloadUrl($documentMrn: String!) {
    requestDocumentDownloadUrl(documentMRN: $documentMrn) {
      downloadUrl
      expiresAt
    }
  }
`;n`
  mutation RevokeRegistrationToken($input: RevokeRegistrationTokenInput!) {
    revokeRegistrationToken(input: $input) {
      ... on RevokeRegistrationTokenSuccess {
        ok
      }
      ... on RevokeRegistrationTokenFailure {
        message
        code
      }
    }
  }
`;n`
  mutation SetAssetAnnotations($input: SetAssetAnnotationsInput!) {
    setAssetAnnotations(input: $input) {
      annotations {
        key
        value
      }
    }
  }
`;n`
  mutation SetEmailPreference($input: [EmailPreferenceInput!]!) {
    setEmailPreference(input: $input)
  }
`;n`
  mutation SetIntegration($input: IntegrationInput!) {
    setIntegration(input: $input)
  }
`;n`
  mutation SetOrganizationMembership($input: SetOrganizationMembershipInput!) {
    setOrganizationMembership(input: $input)
  }
`;n`
  mutation SetRoles($input: SetRolesInput!) {
    setRoles(input: $input) {
      mrns
      errors
    }
  }
`;n`
  mutation SetSpaceMembership($input: SetSpaceMembershipInput!) {
    setSpaceMembership(input: $input)
  }
`;n`
  mutation SetSSOProvider($input: SetSSOProviderInput!) {
    setSSOProvider(input: $input)
  }
`;n`
  mutation SetViewerSetting($key: String!, $value: String!) {
    changeViewerSetting(key: $key, value: $value)
  }
`;n`
  mutation SuppressIntegrationMessage(
    $input: SuppressIntegrationMessageInput!
  ) {
    suppressIntegrationMessage(input: $input) {
      mrn
    }
  }
`;n`
  mutation UnassignPolicy($input: PolicyAssignmentInput!) {
    unassignPolicy(input: $input)
  }
`;n`
  mutation UpdateAPIToken($input: UpdateAPITokenInput!) {
    updateAPIToken(input: $input) {
      mrn
      spaceMrn
      name
      description
      roles {
        mrn
        title
      }
      createdAt
      lastUsed
      creator {
        mrn
        email
      }
    }
  }
`;n`
  mutation UpdateClientIntegrationConfiguration(
    $input: UpdateClientIntegrationConfigurationInput!
  ) {
    updateClientIntegrationConfiguration(input: $input) {
      configurationOptions {
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
        ... on AWSConfigurationOptions {
          region
          isOrganization
          snsEndpoint
          scanConfiguration {
            accountScan
            ec2Scan
            ecrScan
            ecsScan
            cronScaninHours
            ec2ScanOptions {
              ssm
              instanceConnect
              instanceIdsFilter
              excludedInstanceIdsFilter
              regionsFilter
              excludedRegionsFilter
              tagsFilter
              excludedTagsFilter
              ebsVolumeScan
            }
            vpcConfiguration {
              CIDR
              vpcFlavour
            }
          }
        }
        ... on HostedAwsConfigurationOptions {
          accessKeyId
          role
        }
        ... on AzureConfigurationOptions {
          tenantId
          clientId
          subscriptionsWhitelist
          subscriptionsBlacklist
          scanVms
          secretType
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
        ... on GcsBucketConfigurationOptions {
          output
          bucket
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
        ... on AzureDevopsConfigurationOptions {
          defaultProjectName
          organizationUrl
          servicePrincipalId
          tenantId
          autoCloseTickets
          autoCreateTickets
        }
        ... on HostConfigurationOptions {
          host
          https
          http
        }
        ... on AgentOptions {
          id
          version
          notes
          platform {
            name
            release
            arch
            kind
            runtime
          }
          hostname
          ipaddress
        }
        ... on MicrosoftDefenderConfigurationOptions {
          tenantId
          clientId
          subscriptionsAllowlist
          subscriptionsDenylist
          secretType
        }
        ... on OktaConfigurationOptions {
          organization
        }
        ... on GoogleWorkspaceConfigurationOptions {
          customerId
          impersonatedUserEmail
        }
        ... on OciConfigurationOptions {
          tenancyOcid
          userOcid
          region
          fingerprint
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
    }
  }
`;n`
  mutation UpdateOrganizationName($input: UpdateOrganizationInput!) {
    updateOrganization(input: $input) {
      organization {
        name
        mrn
        description
      }
    }
  }
`;n`
  mutation UpdateSpace($input: UpdateSpaceInput!) {
    updateSpace(input: $input) {
      space {
        name
        mrn
        settings {
          eolAssetsConfiguration {
            enable
            monthsInAdvance
          }
          exceptionsConfiguration {
            requireApproval
            allowSelfApproval
            allowIndefiniteValidUntil
          }
          garbageCollectAssetsConfiguration {
            enable
            afterDays
          }
          terminatedAssetsConfiguration {
            cleanup
            after
          }
          unusedServiceAccountsConfiguration {
            cleanup
            after
          }
          platformVulnerabilityConfiguration {
            enable
          }
          casesConfiguration {
            autoCreate
            aggregationWindow
          }
          platformMqlVexConfiguration {
            enable
          }
          mvdExperimentalSourcesConfiguration {
            sources {
              id
              name
              enabled
            }
          }
        }
      }
    }
  }
`;n`
  mutation UpdateSecurityModel($input: UpdateSecurityModelInput!) {
    updateSecurityModel(input: $input) {
      scopeMrn
      slas {
        findings {
          rating
          daysToResolve
          daysBeforeWarning
        }
      }
    }
  }
`;n`
  mutation UpdateUserName($input: UpdateUserInput!) {
    updateUser(input: $input) {
      user {
        name
        mrn
      }
    }
  }
`;n`
  mutation UpdateWorkspace($input: UpdateWorkspaceInput!) {
    updateWorkspace(input: $input) {
      mrn
      name
      description
      selections {
        ...WorkspaceSelection
      }
    }
  }
`;n`
  mutation CreateException($input: ExceptionMutationInput!) {
    createException(input: $input) {
      exceptionGroup {
        id
        exceptionId
      }
    }
  }
`;n`
  mutation CreateExceptionForScopes($input: ApplyExceptionForScopesInput!) {
    createExceptionForScopes(input: $input) {
      exceptionGroups {
        id
        exceptionId
      }
    }
  }
`;n`
  mutation DeleteExceptions($input: ExceptionsDeleteInput!) {
    deleteExceptions(input: $input)
  }
`;const S=n`
  fragment AgentFields on AgentsConnection {
    totalCount
    edges {
      cursor
      node {
        id
        mrn
        name
        status {
          version
          state
          lastCheckin
        }
        labels {
          key
          value
        }
        platform {
          name
          release
          arch
        }
        hostname
        ipaddress
        createdAt
      }
    }
    pageInfo {
      startCursor
      endCursor
      hasNextPage
    }
  }
`;n`
  query AgentForwardPagination(
    $spaceMrn: String!
    $after: String
    $first: Int
    $query: String
    $queryTerms: [String!]
    $version: [AgentVersionFilter!]
    $state: [AgentState!]
    $orderBy: AgentOrder
  ) {
    agents(
      spaceMrn: $spaceMrn
      first: $first
      after: $after
      query: $query
      queryTerms: $queryTerms
      version: $version
      state: $state
      orderBy: $orderBy
    ) {
      ...AgentFields
    }
  }
  ${S}
`;const C=n`
  fragment AssetFields on AssetsConnection {
    totalCount
    edges {
      cursor
      node {
        id
        mrn
        name
        state
        score {
          id
          value
          type
          completion
          weight
          message
          riskRating
          riskValue
        }
        updatedAt
        labels {
          key
          value
        }
        platform {
          name
          title
          release
          arch
          kind
          runtime
        }
      }
    }
    pageInfo {
      startCursor
      endCursor
      hasNextPage
    }
  }
`;n`
  query AssetForwardPagination(
    $scopeMrn: String!
    $after: String
    $first: Int
    $queryTerms: [String!]
    $platformTitle: [String!]
    $platformName: [String!]
    $platformKind: [PlatformKind!]
    $platformRuntime: [String!]
    $scoreType: ScoreType!
    $labels: [KeyValueInput!]
    $updated: AssetUpdateFilter
    $eol: AssetEolFilter
    $reboot: AssetOSRebootFilter
    $exploitable: AssetExploitableFilter
    $orderBy: AssetOrder
    $groups: [GroupFilter!]
    $assetTypes: [String!]
    $relatedToAssetMrn: String
    $assetUrlFilter: [AssetUrlSegmentInput!]
    $rating: [ScoreRating!]
  ) {
    assets(
      scopeMrn: $scopeMrn
      after: $after
      first: $first
      orderBy: $orderBy
      queryTerms: $queryTerms
      platformTitle: $platformTitle
      platformName: $platformName
      platformKind: $platformKind
      platformRuntime: $platformRuntime
      scoreType: $scoreType
      labels: $labels
      updated: $updated
      eol: $eol
      reboot: $reboot
      exploitable: $exploitable
      groups: $groups
      assetTypes: $assetTypes
      relatedToAssetMrn: $relatedToAssetMrn
      assetUrlFilter: $assetUrlFilter
      rating: $rating
    ) {
      ...AssetFields
    }
  }
  ${C}
`;n`
  query GetAssetPackages(
    $scopeMrn: String!
    $first: Int
    $after: String
    $last: Int
    $before: String
    $orderBy: FindingsOrder
    $filter: FindingsFilter
  ) {
    findings(
      scopeMrn: $scopeMrn
      first: $first
      after: $after
      last: $last
      before: $before
      orderBy: $orderBy
      filter: $filter
    ) {
      ... on FindingsConnection {
        edges {
          cursor
          node {
            ... on PackageFinding {
              id
              baseScore
              riskValue
              rating
              title
              packageName
              installedVersion
              availableVersion
              lastUpdated
              firstFound
              cvss {
                id
                value
                type
                vector
                source
                rating
              }
              epss {
                probability
                percentile
              }
              iconId
              packageType
              riskFactors {
                mrn
                indicator
                title
                affected
                total
                isPositive
              }
              platform
              tags {
                key
                value
              }
              asset {
                id
                mrn
                name
                icon
                lastUpdated
                platform {
                  name
                  title
                  arch
                  version
                  kind
                  runtime
                  family
                  labels {
                    key
                    value
                  }
                }
              }
            }
          }
        }
        filteredTotalCount
        pageInfo {
          startCursor
          endCursor
          hasNextPage
          hasPreviousPage
        }
        totalCount
      }
      ... on RequestError {
        message
        code
      }
      ... on NotFoundError {
        message
        code
      }
    }
  }
`;n`
  query GetAssetPackagesStats($input: AssetPackagesStatsInput!) {
    assetPackagesStats(input: $input) {
      appsCount
      osPackagesCount
    }
  }
`;n`
  query GetTopAssetFindings(
    $scopeMrn: String!
    $first: Int
    $after: String
    $last: Int
    $before: String
    $orderBy: FindingsOrder
    $filter: FindingsFilter
  ) {
    findings(
      scopeMrn: $scopeMrn
      first: $first
      after: $after
      last: $last
      before: $before
      orderBy: $orderBy
      filter: $filter
    ) {
      ... on FindingsConnection {
        edges {
          cursor
          node {
            ... on CheckFinding {
              mrn
              id
              title
              state
              iconId
              baseScore
              riskValue
              rating
              riskFactors {
                mrn
                indicator
                title
                affected
                total
                isPositive
              }
              lastUpdated
              tags {
                key
                value
              }
              asset {
                id
                mrn
                name
                icon
                lastUpdated
                platform {
                  name
                  title
                  arch
                  version
                  kind
                  runtime
                  release
                  family
                  labels {
                    key
                    value
                  }
                }
              }
              exception {
                id
                reviewStatus
                action
                justification
              }
              resultType
              mquery {
                uid
                mrn
                title
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
                  audit
                  remediation
                }
                impact {
                  value
                  rating
                }
                mql
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
                  mql
                  filter
                  filterID
                }
                action
                code
                codeId
                severity
              }
            }
            ... on CveFinding {
              mrn
              id
              asset {
                id
                mrn
                name
                icon
                lastUpdated
                platform {
                  name
                  title
                  arch
                  version
                  kind
                  runtime
                  release
                  family
                  labels {
                    key
                    value
                  }
                }
              }
              title
              state
              iconId
              epss {
                probability
                percentile
              }
              cvss {
                id
                value
                type
                vector
                source
                rating
              }
              riskValue
              rating
              riskFactors {
                mrn
                indicator
                title
                affected
                total
                isPositive
              }
              firstDetectedAt
              publishedAt
              tags {
                key
                value
              }
              lastUpdated
              detectionSources {
                name
                url
                firstDetectedAt
                lastUpdatedAt
                fixedAt
                vendor
                version
              }
              exception {
                id
                reviewStatus
                action
                justification
              }
            }
            ... on AdvisoryFinding {
              mrn
              id
              asset {
                id
                mrn
                name
                icon
                lastUpdated
                platform {
                  name
                  title
                  arch
                  version
                  kind
                  runtime
                  release
                  family
                  labels {
                    key
                    value
                  }
                }
              }
              title
              state
              iconId
              epss {
                probability
                percentile
              }
              cvss {
                id
                value
                type
                vector
                source
                rating
              }
              riskValue
              rating
              riskFactors {
                mrn
                indicator
                title
                affected
                total
                isPositive
              }
              firstDetectedAt
              publishedAt
              tags {
                key
                value
              }
              lastUpdated
              detectionSources {
                name
                url
                firstDetectedAt
                lastUpdatedAt
                fixedAt
                vendor
                version
              }
              exception {
                id
                reviewStatus
                action
                justification
              }
            }
          }
        }
      }
    }
  }
`;n`
  query AssetResources($input: AssetResourceInput!) {
    assetResources(input: $input) {
      selectedNames
      selectedPaths
      resources {
        name
        fields {
          name
          description
          path
          type
          value
          updatedAt
          numElements
          nestedContent
        }
        type
        path
        numElements
        nestedContent
      }
    }
  }
`;n`
  query AssetSearchSuggestions($input: AssetSearchSuggestionsInput!) {
    assetSearchSuggestions(input: $input) {
      ... on AssetSearchSuggestions {
        suggestions {
          value
        }
      }
    }
  }
`;n`
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
`;n`
  query DownloadBundle($input: DownloadBundleInput!) {
    downloadBundle(input: $input) {
      ... on PolicyBundleYaml {
        yaml
      }
    }
  }
`;n`
  query FindNewAwsAsset($scopeMrn: String!) {
    assets(scopeMrn: $scopeMrn, platformName: "aws") {
      edges {
        cursor
        node {
          mrn
          platform {
            name
          }
        }
      }
    }
  }
`;n`
  query GetApiTokens(
    $spaceMrn: String!
    $scopeMrn: String
    $first: Int
    $after: String
    $queryTerms: [String!]
    $orderBy: APITokenOrder
  ) {
    apiTokens(
      spaceMrn: $spaceMrn
      scopeMrn: $scopeMrn
      first: $first
      after: $after
      queryTerms: $queryTerms
      orderBy: $orderBy
    ) {
      totalCount
      edges {
        cursor
        node {
          mrn
          spaceMrn
          scopeMrn
          name
          description
          roles {
            mrn
            title
          }
          createdAt
          lastUsed
          creator {
            mrn
            email
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
  }
`;n`
  query GetAssetUrlStats($input: AssetUrlStatsInput!) {
    assetUrlStats(input: $input) {
      stats {
        assetUrl {
          key
          value
        }
        scoreDistribution {
          Unscored
          Ok
          Low
          Medium
          High
          Critical
        }
      }
    }
  }
`;n`
  query GetAssetLinkInfo($input: AssetLinkInfoInput!) {
    getAssetLinkInfo(input: $input) {
      ... on FleetAssetLinkInfo {
        mrn
        assetLinkType
      }
      ... on CiAssetLinkInfo {
        mrn
        assetLinkType
        projectID
      }
    }
  }
`;n`
  query GetAssetSupportVulnerabilities($assetMrn: String!) {
    assetSupportVulnerabilities(assetMrn: $assetMrn)
  }
`;n`
  query GetListFrameworks($input: ListFrameworksInput!) {
    listFrameworks(input: $input) {
      edges {
        cursor
        node {
          mrn
          authors {
            name
            email
            type
          }
          title
          description
          state
          tags {
            key
            value
          }
          score {
            id
            iconId
            spaceId
            entity {
              ... on EntityInfoAsset {
                id
                mrn
                name
                icon
                lastUpdated
              }
              ... on EntityInfoSpace {
                id
                mrn
                name
              }
            }
            tags {
              key
              value
            }
            findingMrn
            rank
            baseScore
            riskValue
            completion
            scoreType
            blastRadius {
              indicator
              assets
              affected
              critical
              high
              medium
              low
              none
              error
              pass
              disabled
              snoozed
            }
            riskFactors {
              mrn
              indicator
              title
              affected
              total
              isPositive
            }
            title
            description
            epss {
              probability
              percentile
            }
            cvss {
              id
              value
              type
              vector
              source
            }
            lastScannedAt
            firstDetectedAt
            remediatedAt
            versionDistribution {
              total
              distribution {
                version
                count
                riskValue
              }
              assets
              installations
            }
            state
          }
          uploadedAt
        }
      }
    }
  }
`;n`
  query GetActivePolicies($input: ActivePoliciesInput!) {
    activePolicies(input: $input) {
      totalCount
      edges {
        cursor
        node {
          mrn
          name
          icon
          updatedAt
          lastAppliedAt
          action
          score {
            riskValue
            rating
            blastRadius {
              indicator
              assets
              affected
              critical
              high
              medium
              low
              none
              error
              pass
            }
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
  }
`;n`
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
`;n`
  query GetClientIntegrationDeleteCommand(
    $input: GetClientIntegrationDeleteCommandInput!
  ) {
    getClientIntegrationDeleteCommand(input: $input) {
      message
    }
  }
`;n`
  query GetClientIntegrationToken($input: GetClientIntegrationTokenInput!) {
    getClientIntegrationToken(input: $input) {
      token
    }
  }
`;n`
  query GetComplianceControl($input: ComplianceControlInput!) {
    complianceControl(input: $input) {
      framework {
        name
        version
      }
      mrn
      description
      title
      manual
      completion
      tags {
        key
        value
      }
      state
      assetGroupStatistics {
        count
        groupType
        listsAssetTypes {
          assetType
          aliases
          displayName
          shortName
        }
        statistics {
          count
          type {
            assetType
            aliases
            displayName
            shortName
          }
        }
      }
      assetsStats {
        compliantAssets
        failedAssets
        totalAssets
      }
      checksStats {
        activeChecks
        snoozedChecks
        disabledChecks
        totalChecks
      }
      exceptions {
        id
        author {
          name
          mrn
          email
          type
        }
        reviewer {
          name
          email
        }
        createdAt
        modifiedAt
        title
        justification
        reviewStatus
        action
      }
    }
  }
`;n`
  query GetComplianceControlAssets(
    $input: ComplianceControlInput!
    $assetsInput: ComplianceAssetsSearchInput!
  ) {
    complianceControl(input: $input) {
      mrn
      description
      title
      assets(input: $assetsInput) {
        totalCount
        edges {
          cursor
          node {
            asset {
              id
              mrn
              state
              name
              labels {
                key
                value
              }
              updatedAt
              platform {
                name
                title
                arch
                version
                kind
                runtime
                release
              }
              score {
                id
                value
                type
                completion
                weight
                message
                grade
              }
              referenceIDs
              annotations {
                key
                value
              }
              asset_type
            }
            compliancePercentage
            relatedAssets
            exception {
              author {
                name
                mrn
                email
                type
              }
              createdAt
              action
              id
              reviewStatus
              title
              justification
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
    }
  }
`;n`
  query GetComplianceControlChecks(
    $input: ComplianceControlInput!
    $checksInput: ChecksSearchInput!
    $first: Int
    $after: String
  ) {
    complianceControl(input: $input) {
      mrn
      description
      title
      checks(input: $checksInput, first: $first, after: $after) {
        totalCount
        edges {
          cursor
          node {
            ... on PolicyCheck {
              state
              policyName
              policyMrn
              completion
              assets
            }
            ... on QueryCheck {
              exception {
                id
                action
                justification
                reviewStatus
              }
              state
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
              mquery {
                action
                impact {
                  rating
                  value
                }
                uid
                title
                mrn
              }
              completion
              assets
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
    }
  }
`;n`
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
`;n`
  query GetComplianceFramework($input: ComplianceFrameworkInput!) {
    complianceFramework(input: $input) {
      mrn
      name
      version
      createdAt
      modifiedAt
      authors {
        name
        email
        type
      }
      tags {
        key
        value
      }
      description
      summary
      stats {
        controls {
          activeControls
          snoozedControls
          outOfScopeControls
          disabledControls
          totalControls
          averageCompletion
          previousAverageCompletion
        }
        checks
        assets
        exceptions
      }
      state
      policiesMrns
      scopeMrn
      completion
      assetGroupStatistics {
        listsAssetTypes {
          assetType
          aliases
          displayName
          shortName
        }
        groupType
        count
        statistics {
          type {
            assetType
            aliases
            displayName
            shortName
          }
          count
        }
      }
      previousCompletionScores {
        entries {
          score
          timestamp
        }
      }
    }
  }
`;n`
  query GetComplianceFrameworkAssets(
    $input: ComplianceFrameworkInput!
    $assetsInput: ComplianceAssetsSearchInput!
  ) {
    complianceFramework(input: $input) {
      mrn
      name
      assetGroupStatistics {
        listsAssetTypes {
          assetType
          aliases
          displayName
          shortName
        }
        groupType
        count
        statistics {
          type {
            assetType
            aliases
            displayName
            shortName
          }
          count
        }
      }
      assets(input: $assetsInput) {
        totalCount
        edges {
          cursor
          node {
            compliancePercentage
            asset {
              id
              mrn
              state
              name
              labels {
                key
                value
              }
              updatedAt
              platform {
                name
                title
                arch
                version
                kind
                runtime
                release
              }
              score {
                completion
                grade
                id
                message
                type
                value
                weight
              }
              referenceIDs
              annotations {
                key
                value
              }
              asset_type
              relatedAssets {
                count {
                  count
                  isParent
                  type
                }
                list {
                  totalCount
                }
              }
            }
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
`;n`
  query GetComplianceFrameworkControls(
    $input: ComplianceFrameworkInput!
    $controlsInput: ControlsSearchInput!
  ) {
    complianceFramework(input: $input) {
      mrn
      name
      controls(input: $controlsInput) {
        totalCount
        edges {
          cursor
          node {
            mrn
            description
            title
            manual
            completion
            tags {
              key
              value
            }
            state
            assetsStats {
              compliantAssets
              failedAssets
              totalAssets
            }
            checksStats {
              activeChecks
              snoozedChecks
              disabledChecks
              totalChecks
              totalQueries
            }
            exception {
              author {
                name
                mrn
                email
                type
              }
              createdAt
              action
              id
              reviewStatus
              title
              justification
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
    }
  }
`;n`
  query GetComplianceFrameworks($input: ComplianceFrameworksInput!) {
    complianceFrameworks(input: $input) {
      authors {
        name
        email
      }
      createdAt
      modifiedAt
      completion
      description
      mrn
      name
      previousCompletionScores {
        entries {
          score
          timestamp
        }
      }
      scopeMrn
      state
      stats {
        controls {
          activeControls
          snoozedControls
          outOfScopeControls
          disabledControls
          totalControls
          averageCompletion
          previousAverageCompletion
        }
        checks
        assets
        exceptions
      }
      summary
      version
      tags {
        key
        value
      }
    }
  }
`;n`
  query GetContent($input: ContentSearchInput!) {
    content(input: $input) {
      totalCount
      edges {
        cursor
        node {
          ... on Policy {
            access
            action
            assigned
            authors {
              email
              name
              type
            }
            category
            summary
            docs
            createdAt
            featured
            trustLevel
            mrn
            name
            statistics {
              checks
              policies
              queries
            }
            uid
            updatedAt
            version
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
  }
`;n`
  query GetDataQueriesList(
    $entityMrn: String!
    $first: Int
    $after: String
    $orderBy: DataQueryOrder
    $filter: DataQueryFilter
  ) {
    dataQueries(
      entityMrn: $entityMrn
      first: $first
      after: $after
      orderBy: $orderBy
      filter: $filter
    ) {
      ... on DataQueriesConnection {
        totalCount
        edges {
          cursor
          node {
            mrn
            id
            title
            iconId
            lastUpdated
            tags {
              key
              value
            }
            asset {
              id
              mrn
              name
              icon
            }
            platform {
              name
              title
              arch
              version
              kind
              runtime
              family
              labels {
                key
                value
              }
            }
            mquery {
              uid
              mrn
              title
              mql
              action
              code
              codeId
            }
          }
        }
        pageInfo {
          startCursor
          endCursor
          hasNextPage
          hasPreviousPage
        }
        filteredTotalCount
      }
      ... on RequestError {
        message
        code
      }
      ... on NotFoundError {
        message
        code
      }
    }
  }
`;n`
  query GetDataQuery(
    $entityMrn: String!
    $first: Int
    $after: String
    $orderBy: DataQueryOrder
    $filter: DataQueryFilter
  ) {
    dataQueries(
      entityMrn: $entityMrn
      first: $first
      after: $after
      orderBy: $orderBy
      filter: $filter
    ) {
      ... on DataQueriesConnection {
        totalCount
        edges {
          cursor
          node {
            mrn
            id
            iconId
            lastUpdated
            tags {
              key
              value
            }
            asset {
              id
              mrn
              name
              icon
            }
            platform {
              name
              title
              arch
              version
              kind
              runtime
              family
              labels {
                key
                value
              }
            }
            value
            mquery {
              uid
              mrn
              title
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
                audit
                remediation
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
                mql
                filter
                filterID
              }
              action
              code
              codeId
              severity
            }
          }
        }
        pageInfo {
          startCursor
          endCursor
          hasNextPage
          hasPreviousPage
        }
        filteredTotalCount
      }
      ... on RequestError {
        message
        code
      }
      ... on NotFoundError {
        message
        code
      }
    }
  }
`;n`
  query GetRenderedAssetDataQuery($input: RenderedAssetQueryDataInput!) {
    renderedAssetQueryData(input: $input) {
      ... on RenderedAssetQueryData {
        assessment
        data
      }
      ... on RequestError {
        message
        code
      }
      ... on NotFoundError {
        message
        code
      }
    }
  }
`;n`
  query GetIntegrationsSummary($input: IntegrationsSummaryInput!) {
    integrationsSummary(input: $input) {
      integrationSummaries {
        totalCount
        activeCount
        failedCount
        warningCount
        assetsCount
        policiesCount
        checksCount
        type
      }
      total
    }
  }
`;n`
  query GetOrganizationOverview($input: OrganizationOverviewInput!) {
    organizationOverview(input: $input) {
      organizationMrn
      assetScores {
        date
        scores {
          total
          A
          B
          C
          D
          F
          U
          Error
        }
      }
      assets {
        scores {
          total
          A
          B
          C
          D
          F
          U
          Error
        }
        improved
        regressed
        unchanged
      }
      vulnerabilities {
        date
        critical
        high
      }
      topVulnerabilities {
        totalAffectedAssets
        stats {
          amountAssets
          spaceMrn
          spaceName
          spaceOwners
        }
        cve {
          id
          title
          description
          cvssScore {
            id
            type
            value
          }
        }
      }
      newVulnerabilities {
        date
        assetsAffected
        cve {
          id
          title
          description
          cvssScore {
            type
            value
          }
        }
      }
      spacesOverview {
        spaceName
        spaceMrn
        scores {
          total
          A
          B
          C
          D
          F
          U
          Error
        }
      }
      integrationSummaries {
        type
        totalCount
      }
      eolAssets
      reportDate
    }
  }
`;n`
  query GetPolicy($input: PolicyInput!) {
    policy(input: $input) {
      mrn
      name
      version
      action
      assigned
      trustLevel
      docs
      authors {
        name
        email
        type
      }
      variantPlatformFilters {
        id
        title
        icon
      }
    }
  }
`;n`
  query GetPolicyProps($input: PolicyInput!, $scopeInput: PolicyInput!) {
    policy(input: $input) {
      uid
      mrn
      properties {
        uid
        mrn
        mql
        title
        for {
          mrn
        }
      }
      queries {
        uid
        mrn
        properties {
          uid
          mrn
          mql
          title
          for {
            mrn
          }
        }
      }
    }
    scopePolicy: policy(input: $scopeInput) {
      uid
      mrn
      properties {
        uid
        mrn
        mql
        title
        for {
          mrn
        }
      }
    }
  }
`;n`
  query GetQueryDetectedAssets(
    $entityMrn: String!
    $first: Int!
    $after: String
    $filter: DataQueryFilter
  ) {
    dataQueries(
      entityMrn: $entityMrn
      filter: $filter
      first: $first
      after: $after
    ) {
      ... on DataQueriesConnection {
        edges {
          node {
            mrn
            asset {
              mrn
              name
            }
            tags {
              key
              value
            }
            iconId
            id
            lastUpdated
            value
          }
          cursor
        }
        totalCount
        pageInfo {
          startCursor
          endCursor
          hasNextPage
          hasPreviousPage
        }
      }
    }
  }
`;n`
  query GetQueryPack($input: PolicyInput!) {
    policy(input: $input) {
      mrn
      name
      version
      assigned
      authors {
        name
        email
        type
      }
      docs
      trustLevel
      variantPlatformFilters {
        id
        title
        icon
      }
    }
  }
`;n`
  query GetQueryPackQueries($input: PolicyInput!) {
    policy(input: $input) {
      mrn
      queries {
        uid
        mrn
        title
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
        action
      }
      groups {
        title
        summary
        checks {
          mrn
          impact {
            value
            rating
          }
          action
        }
        queries {
          mrn
          impact {
            value
            rating
          }
          action
        }
        policies {
          mrn
          impact {
            value
            rating
          }
          action
        }
      }
    }
  }
`;const i={};var A=(e=>(e.CreatedAt="CREATED_AT",e.LastUsed="LAST_USED",e.Name="NAME",e))(A||{}),k=(e=>(e.All="ALL",e.Authenticated="AUTHENTICATED",e.Private="PRIVATE",e.Public="PUBLIC",e))(k||{}),I=(e=>(e.ClearScanQueue="CLEAR_SCAN_QUEUE",e.Diagnostics="DIAGNOSTICS",e.Metrics="METRICS",e.Pause="PAUSE",e.RetrySetup="RETRY_SETUP",e.RunExport="RUN_EXPORT",e.RunImport="RUN_IMPORT",e.RunScan="RUN_SCAN",e.Unpause="UNPAUSE",e.Update="UPDATE",e))(I||{}),P=(e=>(e.AffectedAssets="AFFECTED_ASSETS",e.Name="NAME",e))(P||{}),M=(e=>(e.Hostname="HOSTNAME",e.Id="ID",e.Ip="IP",e.LastCheckin="LAST_CHECKIN",e.Name="NAME",e.Platform="PLATFORM",e.Status="STATUS",e.Version="VERSION",e))(M||{}),D=(e=>(e.Active="ACTIVE",e.Missing="MISSING",e))(D||{}),b=(e=>(e.PolicyMrn="POLICY_MRN",e.Rating="RATING",e.RiskFactors="RISK_FACTORS",e.State="STATE",e.Types="TYPES",e))(b||{}),h=(e=>(e.BlastRadius="BLAST_RADIUS",e.FirstDetectedAt="FIRST_DETECTED_AT",e.Rank="RANK",e.RiskScore="RISK_SCORE",e.RiskValue="RISK_VALUE",e.Title="TITLE",e))(h||{}),E=(e=>(e.Disabled="DISABLED",e.Enabled="ENABLED",e.FalsePositive="FALSE_POSITIVE",e.Preview="PREVIEW",e.RiskAccepted="RISK_ACCEPTED",e.Snoozed="SNOOZED",e.Workaround="WORKAROUND",e))(E||{}),R=(e=>(e.Advisory="ADVISORY",e.Asset="ASSET",e.Check="CHECK",e.Control="CONTROL",e.Framework="FRAMEWORK",e.Other="OTHER",e.Policy="POLICY",e.Risk="RISK",e.Software="SOFTWARE",e.VersionedSoftware="VERSIONED_SOFTWARE",e.Vulnerability="VULNERABILITY",e))(R||{}),O=(e=>(e.Annotations="ANNOTATIONS",e.Labels="LABELS",e.Name="NAME",e.Platform="PLATFORM",e.RiskRating="RISK_RATING",e))(O||{}),T=(e=>(e.Id="ID",e.LastUpdated="LAST_UPDATED",e.Name="NAME",e.Platform="PLATFORM",e.RiskScore="RISK_SCORE",e.RiskValue="RISK_VALUE",e.Score="SCORE",e))(T||{}),F=(e=>(e.Asset="ASSET",e.Integration="INTEGRATION",e))(F||{}),N=(e=>(e.Critical="CRITICAL",e.High="HIGH",e.Low="LOW",e.Medium="MEDIUM",e.Ok="OK",e.Unscored="UNSCORED",e))(N||{}),q=(e=>(e.All="ALL",e.Security="SECURITY",e.Vulnerabilities="VULNERABILITIES",e))(q||{}),G=(e=>(e.Action="ACTION",e.Identity="IDENTITY",e.Timestamp="TIMESTAMP",e))(G||{}),w=(e=>(e.Timestamp="TIMESTAMP",e))(w||{}),L=(e=>(e.CreateTime="CREATE_TIME",e.IssuerUri="ISSUER_URI",e.LastUsed="LAST_USED",e.Name="NAME",e))(L||{}),U=(e=>(e.ServiceAccount="SERVICE_ACCOUNT",e.User="USER",e))(U||{}),V=(e=>(e.Projects="PROJECTS",e))(V||{}),x=(e=>(e.Csv="CSV",e.Jsonl="JSONL",e.Unknown="UNKNOWN",e))(x||{}),B=(e=>(e.Closed="CLOSED",e.Error="ERROR",e.Open="OPEN",e.Pending="PENDING",e))(B||{}),Q=(e=>(e.SpaceRiskDelta="SPACE_RISK_DELTA",e))(Q||{}),z=(e=>(e.All="ALL",e.Policy="POLICY",e.Query="QUERY",e.Querypack="QUERYPACK",e))(z||{}),W=(e=>(e.AssetName="ASSET_NAME",e.LastUpdated="LAST_UPDATED",e.RiskValue="RISK_VALUE",e.Score="SCORE",e))(W||{}),K=(e=>(e.Active="ACTIVE",e.Disabled="DISABLED",e.Snoozed="SNOOZED",e))(K||{}),j=(e=>(e.AssetsCount="ASSETS_COUNT",e.Completion="COMPLETION",e.Name="NAME",e))(j||{}),_=(e=>(e.Aws="AWS",e.AwsHosted="AWS_HOSTED",e.AwsS3="AWS_S3",e.Azure="AZURE",e.AzureBlob="AZURE_BLOB",e.Bigquery="BIGQUERY",e.CrowdstrikeFalcon="CROWDSTRIKE_FALCON",e.Gcp="GCP",e.GcsBucket="GCS_BUCKET",e.Github="GITHUB",e.Gitlab="GITLAB",e.GoogleWorkspace="GOOGLE_WORKSPACE",e.Host="HOST",e.HostedSlack="HOSTED_SLACK",e.K8S="K8S",e.ManagedClient="MANAGED_CLIENT",e.MicrosoftDefender="MICROSOFT_DEFENDER",e.Ms365="MS365",e.Oci="OCI",e.Okta="OKTA",e.Postgres="POSTGRES",e.S3="S3",e.SecurityPipelineGithub="SECURITY_PIPELINE_GITHUB",e.SentinelOne="SENTINEL_ONE",e.Shodan="SHODAN",e.Snowflake="SNOWFLAKE",e.TicketSystemAzureDevops="TICKET_SYSTEM_AZURE_DEVOPS",e.TicketSystemEmail="TICKET_SYSTEM_EMAIL",e.TicketSystemGithub="TICKET_SYSTEM_GITHUB",e.TicketSystemGitlab="TICKET_SYSTEM_GITLAB",e.TicketSystemJira="TICKET_SYSTEM_JIRA",e.TicketSystemZendesk="TICKET_SYSTEM_ZENDESK",e.Unknown="UNKNOWN",e))(_||{}),H=(e=>(e.Gt="GT",e.Lt="LT",e))(H||{}),J=(e=>(e.Completion="COMPLETION",e.Id="ID",e.LastUpdated="LAST_UPDATED",e.Name="NAME",e.Platform="PLATFORM",e))(J||{}),Y=(e=>(e.Disable="DISABLE",e.Enable="ENABLE",e.Preview="PREVIEW",e))(Y||{}),Z=(e=>(e.Active="ACTIVE",e.Disabled="DISABLED",e.Preview="PREVIEW",e))(Z||{}),X=(e=>(e.Name="NAME",e))(X||{}),ee=(e=>(e.Active="ACTIVE",e.Disabled="DISABLED",e.FalsePositive="FALSE_POSITIVE",e.OutOfScope="OUT_OF_SCOPE",e.RiskAccepted="RISK_ACCEPTED",e.Snoozed="SNOOZED",e.Workaround="WORKAROUND",e))(ee||{}),te=(e=>(e.Assets="ASSETS",e.Checks="CHECKS",e.Completion="COMPLETION",e.Exceptions="EXCEPTIONS",e.Id="ID",e.Queries="QUERIES",e.Title="TITLE",e))(te||{}),ne=(e=>(e.AssetName="ASSET_NAME",e.LastUpdated="LAST_UPDATED",e))(ne||{}),ie=(e=>(e.Csv="CSV",e.Jsonl="JSONL",e.Pdf="PDF",e))(ie||{}),re=(e=>(e.Completed="COMPLETED",e.Failed="FAILED",e.Queued="QUEUED",e.Running="RUNNING",e))(re||{}),se=(e=>(e.AdvisoryReport="ADVISORY_REPORT",e.AssetReport="ASSET_REPORT",e.ChecksReport="CHECKS_REPORT",e.CheckReport="CHECK_REPORT",e.ControlReport="CONTROL_REPORT",e.Export="EXPORT",e.FrameworkReport="FRAMEWORK_REPORT",e.SecurityReport="SECURITY_REPORT",e.VulnerabilitiesReport="VULNERABILITIES_REPORT",e.VulnerabilityReport="VULNERABILITY_REPORT",e))(se||{}),oe=(e=>(e.Eol="EOL",e.Scheduled="SCHEDULED",e))(oe||{}),ae=(e=>(e.NewsletterEvents="NEWSLETTER_EVENTS",e.NewsletterGeneral="NEWSLETTER_GENERAL",e.NewsletterProduct="NEWSLETTER_PRODUCT",e.NotificationExceptionsPendingReview="NOTIFICATION_EXCEPTIONS_PENDING_REVIEW",e.NotificationExpiringExceptions="NOTIFICATION_EXPIRING_EXCEPTIONS",e.NotificationSpaceAlerts="NOTIFICATION_SPACE_ALERTS",e.NotificationWeeklyReports="NOTIFICATION_WEEKLY_REPORTS",e))(ae||{}),ue=(e=>(e.Disable="DISABLE",e.Enable="ENABLE",e.FalsePositive="FALSE_POSITIVE",e.OutOfScope="OUT_OF_SCOPE",e.RiskAccepted="RISK_ACCEPTED",e.Snooze="SNOOZE",e.Workaround="WORKAROUND",e))(ue||{}),ce=(e=>(e.Approved="APPROVED",e.Rejected="REJECTED",e))(ce||{}),le=(e=>(e.Advisory="ADVISORY",e.Compliance="COMPLIANCE",e.Cve="CVE",e.Security="SECURITY",e))(le||{}),pe=(e=>(e.PolicyMrn="POLICY_MRN",e.Rating="RATING",e.RiskFactors="RISK_FACTORS",e.SoftwareMrn="SOFTWARE_MRN",e.State="STATE",e.Types="TYPES",e))(pe||{}),de=(e=>(e.Advisory="ADVISORY",e.AppPackage="APP_PACKAGE",e.Check="CHECK",e.Cve="CVE",e.OsPackage="OS_PACKAGE",e.Package="PACKAGE",e))(de||{}),me=(e=>(e.AssetName="ASSET_NAME",e.BaseScore="BASE_SCORE",e.CvssScore="CVSS_SCORE",e.FirstFound="FIRST_FOUND",e.LastUpdated="LAST_UPDATED",e.Mrn="MRN",e.PackageName="PACKAGE_NAME",e.RiskFactors="RISK_FACTORS",e.RiskScore="RISK_SCORE",e.RiskValue="RISK_VALUE",e))(me||{}),ge=(e=>(e.Org="ORG",e.Repo="REPO",e))(ge||{}),fe=(e=>(e.Group="GROUP",e.None="NONE",e))(fe||{}),ye=(e=>(e.Aix="AIX",e.AlmaLinux="ALMA_LINUX",e.Alpine="ALPINE",e.Amazon="AMAZON",e.Apple="APPLE",e.Arch="ARCH",e.Arista="ARISTA",e.Asset="ASSET",e.Atlassian="ATLASSIAN",e.Aws="AWS",e.Azure="AZURE",e.Busybox="BUSYBOX",e.Centos="CENTOS",e.Check="CHECK",e.CisaKev="CISA_KEV",e.Containers="CONTAINERS",e.Cve="CVE",e.Debian="DEBIAN",e.Default="DEFAULT",e.Dns="DNS",e.DomainsAndHosts="DOMAINS_AND_HOSTS",e.Equinix="EQUINIX",e.EuroLinux="EURO_LINUX",e.Fedora="FEDORA",e.Gcp="GCP",e.Gentoo="GENTOO",e.Github="GITHUB",e.Gitlab="GITLAB",e.GoogleChrome="GOOGLE_CHROME",e.GoogleWorkspace="GOOGLE_WORKSPACE",e.Iac="IAC",e.Ipmi="IPMI",e.K8S="K8S",e.Kali="KALI",e.Linux="LINUX",e.LinuxMint="LINUX_MINT",e.Macos="MACOS",e.Manjaro="MANJARO",e.Metasploit="METASPLOIT",e.Microsoft="MICROSOFT",e.MicrosoftDotnet="MICROSOFT_DOTNET",e.MicrosoftEdge="MICROSOFT_EDGE",e.MicrosoftVisualStudioCode="MICROSOFT_VISUAL_STUDIO_CODE",e.Mozilla="MOZILLA",e.MozillaFirefox="MOZILLA_FIREFOX",e.Ms365="MS365",e.NetworkDevices="NETWORK_DEVICES",e.NistNvd="NIST_NVD",e.Nmap="NMAP",e.Oci="OCI",e.Okta="OKTA",e.Opcua="OPCUA",e.Openwrt="OPENWRT",e.OperatingSystem="OPERATING_SYSTEM",e.Oracle="ORACLE",e.Other="OTHER",e.Policy="POLICY",e.Pop="POP",e.Python="PYTHON",e.Raspbian="RASPBIAN",e.Redhat="REDHAT",e.Risk="RISK",e.RockyLinux="ROCKY_LINUX",e.Safari="SAFARI",e.ScientificLinux="SCIENTIFIC_LINUX",e.Slack="SLACK",e.Suse="SUSE",e.Tailscale="TAILSCALE",e.Terraform="TERRAFORM",e.Ubios="UBIOS",e.Ubuntu="UBUNTU",e.Vcd="VCD",e.Vmware="VMWARE",e.VmwarePhoton="VMWARE_PHOTON",e.Windows="WINDOWS",e.WrLinux="WR_LINUX",e))(ye||{}),ve=(e=>(e.Error="ERROR",e.Info="INFO",e.Warning="WARNING",e))(ve||{}),$e=(e=>(e.Aws="AWS",e.AwsHosted="AWS_HOSTED",e.AwsS3="AWS_S3",e.Azure="AZURE",e.AzureBlob="AZURE_BLOB",e.Bigquery="BIGQUERY",e.CrowdstrikeFalcon="CROWDSTRIKE_FALCON",e.Gcp="GCP",e.GcsBucket="GCS_BUCKET",e.Github="GITHUB",e.Gitlab="GITLAB",e.GoogleWorkspace="GOOGLE_WORKSPACE",e.Host="HOST",e.HostedSlack="HOSTED_SLACK",e.Httppost="HTTPPOST",e.K8S="K8S",e.ManagedClient="MANAGED_CLIENT",e.MicrosoftDefender="MICROSOFT_DEFENDER",e.Ms365="MS365",e.Msteams="MSTEAMS",e.Oci="OCI",e.Okta="OKTA",e.Postgres="POSTGRES",e.S3="S3",e.SecurityPipelineGithub="SECURITY_PIPELINE_GITHUB",e.SentinelOne="SENTINEL_ONE",e.Shodan="SHODAN",e.Slack="SLACK",e.Snowflake="SNOWFLAKE",e.Telegram="TELEGRAM",e.TicketSystemAzureDevops="TICKET_SYSTEM_AZURE_DEVOPS",e.TicketSystemEmail="TICKET_SYSTEM_EMAIL",e.TicketSystemGithub="TICKET_SYSTEM_GITHUB",e.TicketSystemGitlab="TICKET_SYSTEM_GITLAB",e.TicketSystemJira="TICKET_SYSTEM_JIRA",e.TicketSystemZendesk="TICKET_SYSTEM_ZENDESK",e.Unknown="UNKNOWN",e))($e||{}),Se=(e=>(e.Projects="PROJECTS",e.Users="USERS",e))(Se||{}),Ce=(e=>(e.Cronjob="CRONJOB",e.Daemonset="DAEMONSET",e.Deployment="DEPLOYMENT",e.Unknown="UNKNOWN",e))(Ce||{}),Ae=(e=>(e.CreatedAt="CREATED_AT",e.ValidUntil="VALID_UNTIL",e))(Ae||{}),ke=(e=>(e.Active="ACTIVE",e.Available="AVAILABLE",e))(ke||{}),Ie=(e=>(e.AssetUpdates="ASSET_UPDATES",e.TriageConversations="TRIAGE_CONVERSATIONS",e))(Ie||{}),Pe=(e=>(e.Asc="ASC",e.Desc="DESC",e))(Pe||{}),Me=(e=>(e.Active="ACTIVE",e.Ignore="IGNORE",e))(Me||{}),De=(e=>(e.Check="CHECK",e.Set="SET",e.Unset="UNSET",e))(De||{}),be=(e=>(e.Created="CREATED",e.Description="DESCRIPTION",e.Mrn="MRN",e))(be||{}),he=(e=>(e.Ansible="ANSIBLE",e.Powershell="POWERSHELL",e.Shell="SHELL",e))(he||{}),Ee=(e=>(e.AssetOverview="ASSET_OVERVIEW",e.CicdJob="CICD_JOB",e.CicdProject="CICD_PROJECT",e.OrgView="ORG_VIEW",e.SecurityDashboard="SECURITY_DASHBOARD",e.VulnerabilityDashboard="VULNERABILITY_DASHBOARD",e))(Ee||{}),Re=(e=>(e.Approved="APPROVED",e.NotReviewed="NOT_REVIEWED",e.Rejected="REJECTED",e))(Re||{}),Oe=(e=>(e.Disable="DISABLE",e.Enable="ENABLE",e))(Oe||{}),Te=(e=>(e.Critical="CRITICAL",e.High="HIGH",e.Low="LOW",e.Medium="MEDIUM",e.None="NONE",e.Unscored="UNSCORED",e))(Te||{}),Fe=(e=>(e.Error="ERROR",e.Result="RESULT",e.Skipped="SKIPPED",e.Unknown="UNKNOWN",e.Unscored="UNSCORED",e))(Fe||{}),Ne=(e=>(e.Closed="CLOSED",e.Disabled="DISABLED",e.FalsePositive="FALSE_POSITIVE",e.Open="OPEN",e.RiskAccepted="RISK_ACCEPTED",e.Snoozed="SNOOZED",e.Workaround="WORKAROUND",e))(Ne||{}),qe=(e=>(e.All="ALL",e.Closed="CLOSED",e.Open="OPEN",e))(qe||{}),Ge=(e=>(e.Disabled="DISABLED",e.Error="ERROR",e.OutOfScope="OUT_OF_SCOPE",e.Result="RESULT",e.Unknown="UNKNOWN",e.Unscored="UNSCORED",e))(Ge||{}),we=(e=>(e.Average="AVERAGE",e.Banded="BANDED",e.Decayed="DECAYED",e.HighestImpact="HIGHEST_IMPACT",e.WeightedAverage="WEIGHTED_AVERAGE",e))(we||{}),Le=(e=>(e.AggregateScore="AGGREGATE_SCORE",e.Mvd="MVD",e.MvdV2="MVD_V2",e))(Le||{}),Ue=(e=>(e.CreatedAt="CREATED_AT",e.Id="ID",e.LastUsed="LAST_USED",e.Name="NAME",e))(Ue||{}),Ve=(e=>(e.Critical="CRITICAL",e.High="HIGH",e.Low="LOW",e.Medium="MEDIUM",e.None="NONE",e))(Ve||{}),xe=(e=>(e.AzureDevops="AZURE_DEVOPS",e.Email="EMAIL",e.Github="GITHUB",e.Gitlab="GITLAB",e.Jira="JIRA",e.Unknown="UNKNOWN",e.Zendesk="ZENDESK",e))(xe||{}),Be=(e=>(e.All="ALL",e.Official="OFFICIAL",e.Oss="OSS",e.Private="PRIVATE",e.VerifiedPublisher="VERIFIED_PUBLISHER",e))(Be||{}),Qe=(e=>(e.Enabled="ENABLED",e.Unknown="UNKNOWN",e.Waitlisted="WAITLISTED",e))(Qe||{}),ze=(e=>(e.CustomVpc="CUSTOM_VPC",e.DefaultVpc="DEFAULT_VPC",e.MondooIgw="MONDOO_IGW",e.MondooNatgw="MONDOO_NATGW",e))(ze||{}),We=(e=>(e.RiskScore="RISK_SCORE",e.Unknown="UNKNOWN",e))(We||{}),Ke=(e=>(e.Annotations="ANNOTATIONS",e.Labels="LABELS",e.Unknown="UNKNOWN",e))(Ke||{}),je=(e=>(e.Contains="CONTAINS",e.NotContains="NOT_CONTAINS",e.Unknown="UNKNOWN",e))(je||{}),_e=(e=>(e.Equal="EQUAL",e.Gt="GT",e.Lt="LT",e.NotEqual="NOT_EQUAL",e.Unknown="UNKNOWN",e))(_e||{}),He=(e=>(e.And="AND",e.AndNot="AND_NOT",e.Unknown="UNKNOWN",e))(He||{}),Je=(e=>(e.Risk="RISK",e.Unknown="UNKNOWN",e))(Je||{}),Ye=(e=>(e.Equal="EQUAL",e.NotEqual="NOT_EQUAL",e.Unknown="UNKNOWN",e))(Ye||{}),Ze=(e=>(e.AssetKind="ASSET_KIND",e.AssetName="ASSET_NAME",e.Platform="PLATFORM",e.PlatformVersion="PLATFORM_VERSION",e.Technology="TECHNOLOGY",e.Unknown="UNKNOWN",e))(Ze||{}),Xe=(e=>(e.Contains="CONTAINS",e.Equal="EQUAL",e.NotEqual="NOT_EQUAL",e.Unknown="UNKNOWN",e))(Xe||{}),et=(e=>(e.Fields="FIELDS",e))(et||{});const a=n`
  fragment VulnerabilityRiskFactorsFields on VulnerabilityRiskFactors {
    knownExploited
    remoteExploitable
  }
`;n`
  fragment AdvisoryNodeFields on Advisory {
    id
    title
    publishedAt
    iconIDEnum
    cvssScore {
      id
      source
      type
      value
      vector
      rating
    }
    vulnerabilityRiskFactors {
      ...VulnerabilityRiskFactorsFields
    }
    cves {
      id
      vulnerabilityRiskFactors {
        ...VulnerabilityRiskFactorsFields
      }
    }
  }
  ${a}
`;n`
  fragment AffectedAssetStatsFields on AffectedAssetStats {
    affectedCount
    fixedCount
    totalCount
  }
`;const tt=n`
  fragment AgentFields on AgentsConnection {
    totalCount
    edges {
      cursor
      node {
        id
        mrn
        name
        status {
          version
          state
          lastCheckin
        }
        labels {
          key
          value
        }
        platform {
          name
          release
          arch
        }
        hostname
        ipaddress
        createdAt
      }
    }
    pageInfo {
      startCursor
      endCursor
      hasNextPage
    }
  }
`,nt=n`
  fragment AssetFields on AssetsConnection {
    totalCount
    edges {
      cursor
      node {
        id
        mrn
        name
        state
        score {
          id
          value
          type
          completion
          weight
          message
          riskRating
          riskValue
        }
        updatedAt
        labels {
          key
          value
        }
        platform {
          name
          title
          release
          arch
          kind
          runtime
        }
      }
    }
    pageInfo {
      startCursor
      endCursor
      hasNextPage
    }
  }
`;n`
  fragment AssetGradeDistributionFields on AssetGradeDistribution {
    total
    A
    B
    C
    D
    F
    U
    X
  }
`;const u=n`
  fragment BlastRadiusFields on BlastRadius {
    indicator
    assets
    affected
    critical
    high
    medium
    low
    none
    snoozed
    disabled
  }
`;n`
  fragment CveNodeFields on Cve {
    id
    state
    published
    title
    vulnerabilityRiskFactors {
      ...VulnerabilityRiskFactorsFields
    }
    epssScore {
      probability
    }
    cvssScore {
      type
      value
      vector
      rating
    }
    score {
      value
      type
    }
  }
  ${a}
`;n`
  fragment CvssScoreFields on CvssScore {
    id
    value
    type
    vector
    source
  }
`;const c=n`
  fragment MqueryDocsFields on MqueryDocs {
    audit
    desc
    references {
      title
      url
    }
    remediations {
      ... on Remediations {
        entries {
          id
          idName
          desc
        }
      }
      ... on AuthenticationRequired {
        message
        code
      }
    }
  }
`;n`
  fragment PackageFields on Package {
    id
    name
    version
    arch
    available
    status
    vulnDiscoveryTime
    iconIDEnum
    cvssScore {
      type
      value
      vector
    }
    epssScore {
      percentile
      probability
    }
  }
`;n`
  fragment PageInfoFields on PageInfo {
    startCursor
    endCursor
    hasNextPage
    hasPreviousPage
  }
`;n`
  fragment PlatformFields on Platform {
    name
    release
    arch
    kind
    runtime
  }
`;const l=n`
  fragment RemediationPackageFields on Package {
    id
    name
    version
    namespace
    ecosystem
    arch
  }
`,p=n`
  fragment RemediationScriptFields on RemediationScript {
    type
    script
    packageManager
    platformName
    platformVersion
  }
`,it=n`
  fragment ServiceAccountFields on ServiceAccountConnection {
    totalCount
    edges {
      cursor
      node {
        id
        mrn
        name
        description
        roles {
          mrn
          title
        }
        createdAt
        lastUsed
        labels {
          key
          value
        }
        creator {
          mrn
          email
          service
        }
        notes
      }
    }
    pageInfo {
      startCursor
      endCursor
      hasNextPage
    }
  }
`,d=n`
  fragment WorkspaceSelection on WorkspaceSelections {
    selections {
      conditions {
        operator
        condition {
          ... on WorkspaceSelectionStringCondition {
            stringField: field
            stringOperator: operator
            stringValues: values {
              value
              displayName
            }
          }
          ... on WorkspaceSelectionIntCondition {
            intField: field
            intOperator: operator
            intValues: values
          }
          ... on WorkspaceSelectionRatingCondition {
            ratingField: field
            ratingOperator: operator
            ratingValues: values
          }
          ... on WorkspaceSelectionKeyValueCondition {
            keyValueField: field
            keyValueOperator: operator
            keyValueValues: values {
              key
              value
            }
          }
        }
      }
    }
  }
`,rt=n`
  query GetAffectedEcosystems($vulnId: String!, $scopeMrn: String!) {
    affectedEcosystems(vulnId: $vulnId, scopeMrn: $scopeMrn) {
      friendlyName
      icon
      versions {
        friendlyName
        ecosystem
      }
    }
  }
`;function _r(e){const t={...i,...e};return o(rt,t)}const st=n`
  query GetRemediation(
    $vulnId: String!
    $scopeMrn: String!
    $ecosystem: String
    $packages: [PackageReferenceInput!]
  ) {
    remediationForScope(
      vulnId: $vulnId
      scopeMrn: $scopeMrn
      ecosystem: $ecosystem
      packages: $packages
    ) {
      ... on Remediation {
        scopeMrn
        scripts {
          ...RemediationScriptFields
        }
        allPackages {
          ...RemediationPackageFields
        }
      }
    }
  }
  ${p}
  ${l}
`;function Hr(e){const t={...i,...e};return o(st,t)}const ot=n`
  query StartConversation($input: FindingsWebhookPostRequest) {
    createFindingsWebhookPost(input: $input) {
      status
    }
  }
`;function Jr(e){const t={...i,...e};return o(ot,t)}const at=n`
  mutation AcceptInvitation($invitationMrn: ID!) {
    acceptInvitation(invitationMrn: $invitationMrn)
  }
`;function Yr(e){const t={...i,...e};return s(at,t)}const ut=n`
  mutation AcceptLegalPolicy($input: AcceptLegalPolicy!) {
    acceptLegalPolicy(input: $input)
  }
`;function Zr(e){const t={...i,...e};return s(ut,t)}const ct=n`
  mutation ActivateUserInRegion {
    activateUserInRegion {
      user {
        mrn
      }
    }
  }
`;function Xr(e){const t={...i,...e};return s(ct,t)}const lt=n`
  mutation AddPolicy($input: [PolicyAddInput!]!) {
    addPolicy(input: $input)
  }
`;function es(e){const t={...i,...e};return s(lt,t)}const pt=n`
  mutation AddQueryPack($input: [QueryPackAddInput!]!) {
    addQueryPack(input: $input)
  }
`;function ts(e){const t={...i,...e};return s(pt,t)}const dt=n`
  mutation ApplyException($input: ExceptionMutationInput!) {
    applyException(input: $input)
  }
`;function ns(e){const t={...i,...e};return s(dt,t)}const mt=n`
  mutation ApplyExceptionReview($input: ExceptionReviewInput!) {
    applyExceptionReview(input: $input)
  }
`;function is(e){const t={...i,...e};return s(mt,t)}const gt=n`
  mutation ApplyFramework($input: ComplianceFrameworkMutationInput!) {
    applyFrameworkMutation(input: $input)
  }
`;function rs(e){const t={...i,...e};return s(gt,t)}const ft=n`
  mutation AssignPolicy($input: PolicyAssignmentInput!) {
    assignPolicy(input: $input)
  }
`;function ss(e){const t={...i,...e};return s(ft,t)}const yt=n`
  mutation CancelInvitation($invitationMrn: ID!) {
    cancelInvitation(invitationMrn: $invitationMrn)
  }
`;function os(e){const t={...i,...e};return s(yt,t)}const vt=n`
  mutation ChangeSubscriptionPlan($input: ChangeSubscriptionPlanInput!) {
    changeSubscriptionPlan(input: $input) {
      __typename
      ... on BillingSession {
        url
      }
      ... on PaymentPreview {
        currency
        recurringCost
        dueToday
        prorationDate
        effectiveDate
      }
    }
  }
`;function as(e){const t={...i,...e};return s(vt,t)}const $t=n`
  mutation CreateBillingSession($input: BillingSessionInput!) {
    createBillingSession(input: $input) {
      url
    }
  }
`;function us(e){const t={...i,...e};return s($t,t)}const St=n`
  mutation CreateCase($input: CreateCaseInput!) {
    createCase(input: $input) {
      mrn
      ticketRefs {
        ticketId
      }
    }
  }
`;function cs(e){const t={...i,...e};return s(St,t)}const Ct=n`
  mutation CreateClientIntegration($input: CreateClientIntegrationInput!) {
    createClientIntegration(input: $input) {
      integration {
        mrn
        token
        name
        status
        created
        lastCheckin
        type
        messages {
          message
          status
        }
        configurationOptions {
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
          ... on AWSConfigurationOptions {
            region
            isOrganization
            snsEndpoint
            originAWSAccountId
            cloudFormationTemplateUrl
            scanConfiguration {
              accountScan
              ec2Scan
              ecrScan
              ecsScan
              cronScaninHours
              ec2ScanOptions {
                ebsVolumeScan
                instanceConnect
                instanceIdsFilter
                excludedInstanceIdsFilter
                regionsFilter
                excludedRegionsFilter
                ssm
                tagsFilter
                excludedTagsFilter
              }
              vpcConfiguration {
                CIDR
                vpcFlavour
                vpcTag {
                  key
                  value
                }
              }
            }
          }
          ... on HostedAwsConfigurationOptions {
            accessKeyId
            role
          }
          ... on AgentOptions {
            id
            version
            notes
            platform {
              name
              release
              arch
              kind
              runtime
            }
            hostname
            ipaddress
          }
          ... on AzureConfigurationOptions {
            tenantId
            clientId
            subscriptionsWhitelist
            subscriptionsBlacklist
            scanVms
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
          ... on OktaConfigurationOptions {
            organization
          }
          ... on GcsBucketConfigurationOptions {
            output
            bucket
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
          ... on GoogleWorkspaceConfigurationOptions {
            customerId
            impersonatedUserEmail
          }
          ... on SlackConfigurationOptions {
            placeholder
          }
          ... on PostgresConfigurationOptions {
            host
            port
            database
            user
          }
          ... on OciConfigurationOptions {
            tenancyOcid
            userOcid
            region
            fingerprint
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
          ... on SentinelOneConfigurationOptions {
            host
            account
            secretType
          }
          ... on CrowdstrikeFalconConfigurationOptions {
            clientId
            cloud
            memberCID
            createAssets
          }
        }
      }
    }
  }
`;function ls(e){const t={...i,...e};return s(Ct,t)}const At=n`
  mutation CreateException($input: ExceptionMutationInput!) {
    createException(input: $input) {
      exceptionGroup {
        id
        exceptionId
      }
    }
  }
`;function ps(e){const t={...i,...e};return s(At,t)}const kt=n`
  mutation CreateExceptionForScopes($input: ApplyExceptionForScopesInput!) {
    createExceptionForScopes(input: $input) {
      exceptionGroups {
        id
        exceptionId
      }
    }
  }
`;function ds(e){const t={...i,...e};return s(kt,t)}const It=n`
  mutation CreateInvitation($input: CreateInvitationInput!) {
    createInvitation(input: $input) {
      mrn
    }
  }
`;function ms(e){const t={...i,...e};return s(It,t)}const Pt=n`
  mutation CreateOrganization($input: CreateOrganizationInput!) {
    createOrganization(input: $input) {
      id
      mrn
    }
  }
`;function gs(e){const t={...i,...e};return s(Pt,t)}const Mt=n`
  mutation CreateServiceAccount($input: CreateServiceAccountInput) {
    createServiceAccount(input: $input) {
      mrn
      certificate
      privateKey
      scopeMrn
      apiEndpoint
      spaceMrn
    }
  }
`;function fs(e){const t={...i,...e};return s(Mt,t)}const Dt=n`
  mutation CreateSpace($input: CreateSpaceInput!) {
    createSpace(input: $input) {
      id
      mrn
    }
  }
`;function ys(e){const t={...i,...e};return s(Dt,t)}const bt=n`
  mutation CreateWorkspace($input: CreateWorkspaceInput!) {
    createWorkspace(input: $input) {
      mrn
    }
  }
`;function vs(e){const t={...i,...e};return s(bt,t)}const ht=n`
  mutation DeclineInvitation($invitationMrn: ID!) {
    declineInvitation(invitationMrn: $invitationMrn)
  }
`;function $s(e){const t={...i,...e};return s(ht,t)}const Et=n`
  mutation DeleteAgents($input: DeleteAgentsInput!) {
    deleteAgents(input: $input) {
      agentMrns
      errors
    }
  }
`;function Ss(e){const t={...i,...e};return s(Et,t)}const Rt=n`
  mutation DeleteAPIToken($input: DeleteAPITokenInput!) {
    deleteAPIToken(input: $input) {
      ok
    }
  }
`;function Cs(e){const t={...i,...e};return s(Rt,t)}const Ot=n`
  mutation DeleteAssets($input: DeleteAssetsInput!) {
    deleteAssets(input: $input) {
      assetMrns
      errors
    }
  }
`;function As(e){const t={...i,...e};return s(Ot,t)}const Tt=n`
  mutation DeleteCicdProjects($input: DeleteProjectsInput!) {
    deleteCicdProjects(input: $input) {
      mrns
    }
  }
`;function ks(e){const t={...i,...e};return s(Tt,t)}const Ft=n`
  mutation DeleteClientIntegration($input: DeleteClientIntegrationInput!) {
    deleteClientIntegration(input: $input) {
      mrn
    }
  }
`;function Is(e){const t={...i,...e};return s(Ft,t)}const Nt=n`
  mutation DeleteCustomPolicy($input: DeleteCustomPolicyInput!) {
    deleteCustomPolicy(input: $input) {
      policyMrn
    }
  }
`;function Ps(e){const t={...i,...e};return s(Nt,t)}const qt=n`
  mutation DeleteCustomQueryPack($input: DeleteCustomQueryPackInput!) {
    deleteCustomQueryPack(input: $input) {
      queryPackMrn
    }
  }
`;function Ms(e){const t={...i,...e};return s(qt,t)}const Gt=n`
  mutation DeleteDocument($documentMrn: String!) {
    deleteDocument(documentMRN: $documentMrn)
  }
`;function Ds(e){const t={...i,...e};return s(Gt,t)}const wt=n`
  mutation DeleteExceptions($input: ExceptionsDeleteInput!) {
    deleteExceptions(input: $input)
  }
`;function bs(e){const t={...i,...e};return s(wt,t)}const Lt=n`
  mutation DeleteFramework($input: DeleteFrameworkInput!) {
    deleteFramework(input: $input)
  }
`;function hs(e){const t={...i,...e};return s(Lt,t)}const Ut=n`
  mutation DeleteOrganization($orgMrn: ID!) {
    deleteOrganization(orgMrn: $orgMrn)
  }
`;function Es(e){const t={...i,...e};return s(Ut,t)}const Vt=n`
  mutation DeletePolicy($input: PolicyDeleteInput!) {
    deletePolicy(input: $input)
  }
`;function Rs(e){const t={...i,...e};return s(Vt,t)}const xt=n`
  mutation DeleteServiceAccounts($input: DeleteServiceAccountsInput!) {
    deleteServiceAccounts(input: $input) {
      mrns
      errors
    }
  }
`;function Os(e){const t={...i,...e};return s(xt,t)}const Bt=n`
  mutation DeleteSpace($spaceMrn: ID!) {
    deleteSpace(spaceMrn: $spaceMrn)
  }
`;function Ts(e){const t={...i,...e};return s(Bt,t)}const Qt=n`
  mutation DeleteWorkspaces($input: DeleteWorkspacesInput!) {
    deleteWorkspaces(input: $input)
  }
`;function Fs(e){const t={...i,...e};return s(Qt,t)}const zt=n`
  mutation EditProperties($input: PropertyQueryMutationInput!) {
    applyPropertyQueryMutation(input: $input) {
      ... on PropertyQueryMutationInvalidTarget {
        message
        code
      }
      ... on PropertyQueryMutationInvalidProperty {
        message
        code
      }
      ... on PropertyQueryMutationSuccess {
        success
      }
    }
  }
`;function Ns(e){const t={...i,...e};return s(zt,t)}const Wt=n`
  mutation EnableSSOProvider($input: EnableSSOProviderInput!) {
    enableSSOProvider(input: $input)
  }
`;function qs(e){const t={...i,...e};return s(Wt,t)}const Kt=n`
  mutation GenerateAPIToken($input: GenerateAPITokenInput!) {
    generateAPIToken(input: $input) {
      token
      spaceMrn
      scopeMrn
      name
      mrn
      description
      createdBy
      createdAt
    }
  }
`;function Gs(e){const t={...i,...e};return s(Kt,t)}const jt=n`
  mutation GenerateDocument($input: GenerateDocumentInput!) {
    generateDocument(input: $input) {
      mrn
    }
  }
`;function ws(e){const t={...i,...e};return s(jt,t)}const _t=n`
  mutation GeneratePolicy($input: GeneratePolicyInput!) {
    generatePolicy(input: $input) {
      content
      yaml
      policyMrns
    }
  }
`;function Ls(e){const t={...i,...e};return s(_t,t)}const Ht=n`
  mutation GenerateRegistrationToken($input: RegistrationTokenInput!) {
    generateRegistrationToken(input: $input) {
      id
      mrn
      description
      labels {
        key
        value
      }
      token
      revoked
      createdAt
      createdBy
      expiresAt
    }
  }
`;function Us(e){const t={...i,...e};return s(Ht,t)}const Jt=n`
  mutation ModifySpaceRiskFactors(
    $spaceMrn: String!
    $riskFactors: [ModifyRiskFactorInput!]!
  ) {
    modifyRiskFactors(spaceMrn: $spaceMrn, riskFactors: $riskFactors)
  }
`;function Vs(e){const t={...i,...e};return s(Jt,t)}const Yt=n`
  mutation ProcessCaseEvents($input: ProcessCaseEventsInput!) {
    processCaseEvents(input: $input)
  }
`;function xs(e){const t={...i,...e};return s(Yt,t)}const Zt=n`
  mutation RefreshAggregateScores($groupMrn: String!) {
    refreshAggregateScores(groupMrn: $groupMrn)
  }
`;function Bs(e){const t={...i,...e};return s(Zt,t)}const Xt=n`
  mutation RemoveOrganizationMembership(
    $input: RemoveOrganizationMembershipInput!
  ) {
    removeOrganizationMembership(input: $input)
  }
`;function Qs(e){const t={...i,...e};return s(Xt,t)}const en=n`
  mutation RemoveSpaceMembership($input: RemoveSpaceMembershipInput!) {
    removeSpaceMembership(input: $input)
  }
`;function zs(e){const t={...i,...e};return s(en,t)}const tn=n`
  mutation ReportViewed($input: ReportViewedInput!) {
    reportViewed(input: $input)
  }
`;function Ws(e){const t={...i,...e};return s(tn,t)}const nn=n`
  mutation RequestDocumentDownloadUrl($documentMrn: String!) {
    requestDocumentDownloadUrl(documentMRN: $documentMrn) {
      downloadUrl
      expiresAt
    }
  }
`;function Ks(e){const t={...i,...e};return s(nn,t)}const rn=n`
  mutation ResendInvitation($invitationMrn: ID!) {
    resendInvitation(invitationMrn: $invitationMrn)
  }
`;function js(e){const t={...i,...e};return s(rn,t)}const sn=n`
  mutation RevokeRegistrationToken($input: RevokeRegistrationTokenInput!) {
    revokeRegistrationToken(input: $input) {
      ... on RevokeRegistrationTokenSuccess {
        ok
      }
      ... on RevokeRegistrationTokenFailure {
        message
        code
      }
    }
  }
`;function _s(e){const t={...i,...e};return s(sn,t)}const on=n`
  mutation SetAssetAnnotations($input: SetAssetAnnotationsInput!) {
    setAssetAnnotations(input: $input) {
      annotations {
        key
        value
      }
    }
  }
`;function Hs(e){const t={...i,...e};return s(on,t)}const an=n`
  mutation SetEmailPreference($input: [EmailPreferenceInput!]!) {
    setEmailPreference(input: $input)
  }
`;function Js(e){const t={...i,...e};return s(an,t)}const un=n`
  mutation SetIntegration($input: IntegrationInput!) {
    setIntegration(input: $input)
  }
`;function Ys(e){const t={...i,...e};return s(un,t)}const cn=n`
  mutation SetOrganizationMembership($input: SetOrganizationMembershipInput!) {
    setOrganizationMembership(input: $input)
  }
`;function Zs(e){const t={...i,...e};return s(cn,t)}const ln=n`
  mutation SetRoles($input: SetRolesInput!) {
    setRoles(input: $input) {
      mrns
      errors
    }
  }
`;function Xs(e){const t={...i,...e};return s(ln,t)}const pn=n`
  mutation SetSSOProvider($input: SetSSOProviderInput!) {
    setSSOProvider(input: $input)
  }
`;function eo(e){const t={...i,...e};return s(pn,t)}const dn=n`
  mutation SetSpaceMembership($input: SetSpaceMembershipInput!) {
    setSpaceMembership(input: $input)
  }
`;function to(e){const t={...i,...e};return s(dn,t)}const mn=n`
  mutation SetViewerSetting($key: String!, $value: String!) {
    changeViewerSetting(key: $key, value: $value)
  }
`;function no(e){const t={...i,...e};return s(mn,t)}const gn=n`
  mutation SuppressIntegrationMessage(
    $input: SuppressIntegrationMessageInput!
  ) {
    suppressIntegrationMessage(input: $input) {
      mrn
    }
  }
`;function io(e){const t={...i,...e};return s(gn,t)}const fn=n`
  mutation UnassignPolicy($input: PolicyAssignmentInput!) {
    unassignPolicy(input: $input)
  }
`;function ro(e){const t={...i,...e};return s(fn,t)}n`
  mutation UpdateAPIToken($input: UpdateAPITokenInput!) {
    updateAPIToken(input: $input) {
      mrn
      spaceMrn
      name
      description
      roles {
        mrn
        title
      }
      createdAt
      lastUsed
      creator {
        mrn
        email
      }
    }
  }
`;const yn=n`
  mutation CloseCase($input: CloseCaseInput!) {
    closeCase(input: $input)
  }
`;function so(e){const t={...i,...e};return s(yn,t)}const vn=n`
  mutation UpdateClientIntegrationConfiguration(
    $input: UpdateClientIntegrationConfigurationInput!
  ) {
    updateClientIntegrationConfiguration(input: $input) {
      configurationOptions {
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
        ... on AWSConfigurationOptions {
          region
          isOrganization
          snsEndpoint
          scanConfiguration {
            accountScan
            ec2Scan
            ecrScan
            ecsScan
            cronScaninHours
            ec2ScanOptions {
              ssm
              instanceConnect
              instanceIdsFilter
              excludedInstanceIdsFilter
              regionsFilter
              excludedRegionsFilter
              tagsFilter
              excludedTagsFilter
              ebsVolumeScan
            }
            vpcConfiguration {
              CIDR
              vpcFlavour
            }
          }
        }
        ... on HostedAwsConfigurationOptions {
          accessKeyId
          role
        }
        ... on AzureConfigurationOptions {
          tenantId
          clientId
          subscriptionsWhitelist
          subscriptionsBlacklist
          scanVms
          secretType
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
        ... on GcsBucketConfigurationOptions {
          output
          bucket
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
        ... on AzureDevopsConfigurationOptions {
          defaultProjectName
          organizationUrl
          servicePrincipalId
          tenantId
          autoCloseTickets
          autoCreateTickets
        }
        ... on HostConfigurationOptions {
          host
          https
          http
        }
        ... on AgentOptions {
          id
          version
          notes
          platform {
            name
            release
            arch
            kind
            runtime
          }
          hostname
          ipaddress
        }
        ... on MicrosoftDefenderConfigurationOptions {
          tenantId
          clientId
          subscriptionsAllowlist
          subscriptionsDenylist
          secretType
        }
        ... on OktaConfigurationOptions {
          organization
        }
        ... on GoogleWorkspaceConfigurationOptions {
          customerId
          impersonatedUserEmail
        }
        ... on OciConfigurationOptions {
          tenancyOcid
          userOcid
          region
          fingerprint
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
    }
  }
`;function oo(e){const t={...i,...e};return s(vn,t)}const $n=n`
  mutation UpdateOrganizationName($input: UpdateOrganizationInput!) {
    updateOrganization(input: $input) {
      organization {
        name
        mrn
        description
      }
    }
  }
`;function ao(e){const t={...i,...e};return s($n,t)}const Sn=n`
  mutation UpdateSecurityModel($input: UpdateSecurityModelInput!) {
    updateSecurityModel(input: $input) {
      scopeMrn
      slas {
        findings {
          rating
          daysToResolve
          daysBeforeWarning
        }
      }
    }
  }
`;function uo(e){const t={...i,...e};return s(Sn,t)}const Cn=n`
  mutation UpdateSpace($input: UpdateSpaceInput!) {
    updateSpace(input: $input) {
      space {
        name
        mrn
        settings {
          eolAssetsConfiguration {
            enable
            monthsInAdvance
          }
          exceptionsConfiguration {
            requireApproval
            allowSelfApproval
            allowIndefiniteValidUntil
          }
          garbageCollectAssetsConfiguration {
            enable
            afterDays
          }
          terminatedAssetsConfiguration {
            cleanup
            after
          }
          unusedServiceAccountsConfiguration {
            cleanup
            after
          }
          platformVulnerabilityConfiguration {
            enable
          }
          casesConfiguration {
            autoCreate
            aggregationWindow
          }
          platformMqlVexConfiguration {
            enable
          }
          mvdExperimentalSourcesConfiguration {
            sources {
              id
              name
              enabled
            }
          }
        }
      }
    }
  }
`;function co(e){const t={...i,...e};return s(Cn,t)}const An=n`
  mutation UpdateUserName($input: UpdateUserInput!) {
    updateUser(input: $input) {
      user {
        name
        mrn
      }
    }
  }
`;function lo(e){const t={...i,...e};return s(An,t)}const kn=n`
  mutation UpdateWorkspace($input: UpdateWorkspaceInput!) {
    updateWorkspace(input: $input) {
      mrn
      name
      description
      selections {
        ...WorkspaceSelection
      }
    }
  }
  ${d}
`;function po(e){const t={...i,...e};return s(kn,t)}const In=n`
  mutation UploadFramework($input: UploadFrameworkInput!) {
    uploadFramework(input: $input)
  }
`;function mo(e){const t={...i,...e};return s(In,t)}const Pn=n`
  query AgentForwardPagination(
    $spaceMrn: String!
    $after: String
    $first: Int
    $query: String
    $queryTerms: [String!]
    $version: [AgentVersionFilter!]
    $state: [AgentState!]
    $orderBy: AgentOrder
  ) {
    agents(
      spaceMrn: $spaceMrn
      first: $first
      after: $after
      query: $query
      queryTerms: $queryTerms
      version: $version
      state: $state
      orderBy: $orderBy
    ) {
      ...AgentFields
    }
  }
  ${tt}
`;function go(e){const t={...i,...e};return r(Pn,t)}const m=n`
  query AssetForwardPagination(
    $scopeMrn: String!
    $after: String
    $first: Int
    $queryTerms: [String!]
    $platformTitle: [String!]
    $platformName: [String!]
    $platformKind: [PlatformKind!]
    $platformRuntime: [String!]
    $scoreType: ScoreType!
    $labels: [KeyValueInput!]
    $updated: AssetUpdateFilter
    $eol: AssetEolFilter
    $reboot: AssetOSRebootFilter
    $exploitable: AssetExploitableFilter
    $orderBy: AssetOrder
    $groups: [GroupFilter!]
    $assetTypes: [String!]
    $relatedToAssetMrn: String
    $assetUrlFilter: [AssetUrlSegmentInput!]
    $rating: [ScoreRating!]
  ) {
    assets(
      scopeMrn: $scopeMrn
      after: $after
      first: $first
      orderBy: $orderBy
      queryTerms: $queryTerms
      platformTitle: $platformTitle
      platformName: $platformName
      platformKind: $platformKind
      platformRuntime: $platformRuntime
      scoreType: $scoreType
      labels: $labels
      updated: $updated
      eol: $eol
      reboot: $reboot
      exploitable: $exploitable
      groups: $groups
      assetTypes: $assetTypes
      relatedToAssetMrn: $relatedToAssetMrn
      assetUrlFilter: $assetUrlFilter
      rating: $rating
    ) {
      ...AssetFields
    }
  }
  ${nt}
`;function fo(e){const t={...i,...e};return r(m,t)}function yo(e){const t={...i,...e};return o(m,t)}const Mn=n`
  query AssetResources($input: AssetResourceInput!) {
    assetResources(input: $input) {
      selectedNames
      selectedPaths
      resources {
        name
        fields {
          name
          description
          path
          type
          value
          updatedAt
          numElements
          nestedContent
        }
        type
        path
        numElements
        nestedContent
      }
    }
  }
`;function vo(e){const t={...i,...e};return r(Mn,t)}const Dn=n`
  query AssetSearchSuggestions($input: AssetSearchSuggestionsInput!) {
    assetSearchSuggestions(input: $input) {
      ... on AssetSearchSuggestions {
        suggestions {
          value
        }
      }
    }
  }
`;function $o(e){const t={...i,...e};return r(Dn,t)}const bn=n`
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
`;function So(e){const t={...i,...e};return r(bn,t)}const hn=n`
  query DownloadBundle($input: DownloadBundleInput!) {
    downloadBundle(input: $input) {
      ... on PolicyBundleYaml {
        yaml
      }
    }
  }
`;function Co(e){const t={...i,...e};return o(hn,t)}const En=n`
  query DownloadFramework($input: DownloadFrameworkInput!) {
    downloadFramework(input: $input) {
      ... on FrameworkBundle {
        yaml
      }
    }
  }
`;function Ao(e){const t={...i,...e};return o(En,t)}const Rn=n`
  query FindNewAwsAsset($scopeMrn: String!) {
    assets(scopeMrn: $scopeMrn, platformName: "aws") {
      edges {
        cursor
        node {
          mrn
          platform {
            name
          }
        }
      }
    }
  }
`;function ko(e){const t={...i,...e};return o(Rn,t)}const On=n`
  query GetActivePolicies($input: ActivePoliciesInput!) {
    activePolicies(input: $input) {
      totalCount
      edges {
        cursor
        node {
          mrn
          name
          icon
          updatedAt
          lastAppliedAt
          action
          score {
            riskValue
            rating
            blastRadius {
              indicator
              assets
              affected
              critical
              high
              medium
              low
              none
              error
              pass
            }
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
  }
`;function Io(e){const t={...i,...e};return r(On,t)}const Tn=n`
  query GetActivePoliciesCount($input: ActivePoliciesInput!) {
    activePolicies(input: $input) {
      totalCount
    }
  }
`;function Po(e){const t={...i,...e};return r(Tn,t)}const Fn=n`
  query GetAdvisories(
    $scopeMrn: String!
    $first: Int
    $after: String
    $last: Int
    $before: String
    $orderBy: FindingsOrder
    $filter: FindingsFilter
  ) {
    findings(
      scopeMrn: $scopeMrn
      first: $first
      after: $after
      last: $last
      before: $before
      orderBy: $orderBy
      filter: $filter
    ) {
      ... on FindingsConnection {
        totalCount
        filteredTotalCount
        edges {
          cursor
          node {
            ... on AdvisoryFinding {
              id
              mrn
              title
              asset {
                id
              }
              rating
              riskValue
              lastUpdated
              publishedAt
              firstDetectedAt
              iconId
              tags {
                key
                value
              }
              riskFactors {
                mrn
                indicator
                title
                affected
                total
                isPositive
              }
              state
              exception {
                id
                exceptionId
                scope
                reviewStatus
                justification
                action
                author {
                  name
                  mrn
                  email
                  type
                }
                createdAt
              }
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
      ... on RequestError {
        message
        code
      }
      ... on NotFoundError {
        message
        code
      }
    }
  }
`;function Mo(e){const t={...i,...e};return r(Fn,t)}const Nn=n`
  query GetAffectedAssets(
    $scopeMrn: String!
    $first: Int
    $after: String
    $last: Int
    $before: String
    $orderBy: FindingsOrder
    $filter: FindingsFilter
  ) {
    findings(
      scopeMrn: $scopeMrn
      first: $first
      after: $after
      last: $last
      before: $before
      orderBy: $orderBy
      filter: $filter
    ) {
      ... on FindingsConnection {
        totalCount
        filteredTotalCount
        edges {
          cursor
          node {
            ... on CheckFinding {
              id
              asset {
                id
                mrn
                name
                icon
                tags {
                  key
                  value
                }
              }
              iconId
              lastUpdated
              mrn
              riskValue
              rating
              riskFactors {
                mrn
                indicator
                title
                affected
                total
                isPositive
              }
              title
              state
              exception {
                id
                exceptionId
                reviewStatus
                action
              }
            }
            ... on CveFinding {
              id
              asset {
                id
                mrn
                name
                icon
                tags {
                  key
                  value
                }
              }
              iconId
              lastUpdated
              mrn
              riskValue
              rating
              riskFactors {
                mrn
                indicator
                title
                affected
                total
                isPositive
              }
              title
              state
              exception {
                id
                exceptionId
                reviewStatus
                action
              }
            }
            ... on AdvisoryFinding {
              id
              asset {
                id
                mrn
                name
                icon
                tags {
                  key
                  value
                }
              }
              iconId
              lastUpdated
              mrn
              riskValue
              rating
              riskFactors {
                mrn
                indicator
                title
                affected
                total
                isPositive
              }
              title
              state
              exception {
                id
                exceptionId
                reviewStatus
                action
              }
            }
            ... on PackageFinding {
              id
              packageName
              asset {
                id
                mrn
                name
                icon
                tags {
                  key
                  value
                }
              }
              rating
              riskValue
              lastUpdated
              tags {
                key
                value
              }
              riskFactors {
                mrn
                indicator
                title
                affected
                total
                isPositive
              }
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
      ... on RequestError {
        message
        code
      }
      ... on NotFoundError {
        message
        code
      }
    }
  }
`;function Do(e){const t={...i,...e};return r(Nn,t)}const qn=n`
  query GetAggregateScores(
    $entityMrn: String!
    $filter: AggregateScoreFilter
    $first: Int
    $after: String
    $last: Int
    $before: String
    $orderBy: AggregateScoreOrder
  ) {
    aggregateScores(
      entityMrn: $entityMrn
      filter: $filter
      first: $first
      after: $after
      last: $last
      before: $before
      orderBy: $orderBy
    ) {
      ... on AggregateScoresConnection {
        totalCount
        edges {
          cursor
          node {
            id
            iconId
            state
            effort
            manualEffort {
              totalManualEffort
              research
              scripting
              rollout
              verification
            }
            entity {
              ... on EntityInfoAsset {
                id
                mrn
                name
              }
              ... on EntityInfoSpace {
                id
                mrn
                name
              }
              ... on EntityInfoWorkspace {
                id
                mrn
                name
              }
            }
            findingMrn
            rank
            baseScore
            baseValue
            baseRating
            riskValue
            rankScore
            scoreType
            rating
            blastRadius {
              ...BlastRadiusFields
            }
            epss {
              probability
              percentile
            }
            cvss {
              id
              value
              type
              vector
              source
              rating
            }
            riskFactors {
              mrn
              indicator
              title
              total
              affected
              isPositive
            }
            detectionSources {
              name
              firstDetectedAt
              lastUpdatedAt
              affectedAssets
              vendor
            }
            title
            description
            tags {
              key
              value
            }
            lastScannedAt
            firstDetectedAt
            remediatedAt
            spaceId
            spaceRiskImprovement
            cases {
              totalCount
              edges {
                node {
                  status
                  mrn
                  createdAt
                  ticketRefs {
                    type
                  }
                }
              }
            }
            exception {
              id
              reviewStatus
              action
              justification
              scope
              exceptionId
              createdAt
              author {
                name
                mrn
                email
                type
              }
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
      ... on RequestError {
        message
        code
      }
      ... on NotFoundError {
        message
        code
      }
    }
  }
  ${u}
`;function bo(e){const t={...i,...e};return r(qn,t)}const Gn=n`
  query GetAggregateScoresRefreshInfo($groupMrn: String!) {
    aggregateScoresRefreshInfo(groupMrn: $groupMrn) {
      refreshInProgress
      lastUpdatedAt
    }
  }
`;function ho(e){const t={...i,...e};return r(Gn,t)}const wn=n`
  query GetAggregateScoresSuggestions(
    $entityMrn: String!
    $filterType: AggScoresFilterType!
    $searchText: String
    $filter: AggregateScoreFilter
    $limit: Int
  ) {
    aggregateScoresSuggestions(
      entityMrn: $entityMrn
      filterType: $filterType
      searchText: $searchText
      filter: $filter
      limit: $limit
    ) {
      label
      value {
        ... on StringValue {
          stringValue: value
        }
        ... on AggregateScoreStateValue {
          stateValue: value
        }
        ... on AggregateScoreTypeValue {
          typeValue: value
        }
        ... on AggregateScoreRatingValue {
          ratingValue: value
        }
      }
    }
  }
`;function Eo(e){const t={...i,...e};return r(wn,t)}const Ln=n`
  query GetApiTokens(
    $spaceMrn: String!
    $scopeMrn: String
    $first: Int
    $after: String
    $queryTerms: [String!]
    $orderBy: APITokenOrder
  ) {
    apiTokens(
      spaceMrn: $spaceMrn
      scopeMrn: $scopeMrn
      first: $first
      after: $after
      queryTerms: $queryTerms
      orderBy: $orderBy
    ) {
      totalCount
      edges {
        cursor
        node {
          mrn
          spaceMrn
          scopeMrn
          name
          description
          roles {
            mrn
            title
          }
          createdAt
          lastUsed
          creator {
            mrn
            email
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
  }
`;function Ro(e){const t={...i,...e};return r(Ln,t)}const Un=n`
  query GetAssetFilterSuggestions(
    $scopeMrn: String!
    $filterType: AssetFilterType!
    $searchText: String
    $filter: AssetSearchFilter
    $limit: Int
  ) {
    assetFilterSuggestions(
      scopeMrn: $scopeMrn
      filterType: $filterType
      searchText: $searchText
      filter: $filter
      limit: $limit
    ) {
      label
      value {
        ... on StringValue {
          stringValue: value
        }
        ... on ScoreRatingValue {
          ratingValue: value
        }
      }
    }
  }
`;function Oo(e){const t={...i,...e};return r(Un,t)}const Vn=n`
  query GetAssetGroupStats($scopeMrn: String!, $queryTerms: [String!]) {
    assets(scopeMrn: $scopeMrn, queryTerms: $queryTerms, first: 1) {
      assetGroupStats {
        groupType
        count
        displayName
        icon
        listsAssetTypes {
          assetType
          displayName
          shortName
          aliases
        }
        statistics {
          type {
            assetType
            displayName
            shortName
            aliases
          }
          count
        }
      }
    }
  }
`;function To(e){const t={...i,...e};return r(Vn,t)}const xn=n`
  query GetAssetLinkInfo($input: AssetLinkInfoInput!) {
    getAssetLinkInfo(input: $input) {
      ... on FleetAssetLinkInfo {
        mrn
        assetLinkType
      }
      ... on CiAssetLinkInfo {
        mrn
        assetLinkType
        projectID
      }
    }
  }
`;function Fo(e){const t={...i,...e};return r(xn,t)}const Bn=n`
  query GetAssetPackages(
    $scopeMrn: String!
    $first: Int
    $after: String
    $last: Int
    $before: String
    $orderBy: FindingsOrder
    $filter: FindingsFilter
  ) {
    findings(
      scopeMrn: $scopeMrn
      first: $first
      after: $after
      last: $last
      before: $before
      orderBy: $orderBy
      filter: $filter
    ) {
      ... on FindingsConnection {
        edges {
          cursor
          node {
            ... on PackageFinding {
              id
              baseScore
              riskValue
              rating
              title
              packageName
              installedVersion
              availableVersion
              lastUpdated
              firstFound
              cvss {
                id
                value
                type
                vector
                source
                rating
              }
              epss {
                probability
                percentile
              }
              iconId
              packageType
              riskFactors {
                mrn
                indicator
                title
                affected
                total
                isPositive
              }
              platform
              tags {
                key
                value
              }
              asset {
                id
                mrn
                name
                icon
                lastUpdated
                platform {
                  name
                  title
                  arch
                  version
                  kind
                  runtime
                  family
                  labels {
                    key
                    value
                  }
                }
              }
            }
          }
        }
        filteredTotalCount
        pageInfo {
          startCursor
          endCursor
          hasNextPage
          hasPreviousPage
        }
        totalCount
      }
      ... on RequestError {
        message
        code
      }
      ... on NotFoundError {
        message
        code
      }
    }
  }
`;function No(e){const t={...i,...e};return r(Bn,t)}n`
  query GetAssetPackagesStats($input: AssetPackagesStatsInput!) {
    assetPackagesStats(input: $input) {
      appsCount
      osPackagesCount
    }
  }
`;const Qn=n`
  query GetAssetSupportVulnerabilities($assetMrn: String!) {
    assetSupportVulnerabilities(assetMrn: $assetMrn)
  }
`;function qo(e){const t={...i,...e};return r(Qn,t)}const zn=n`
  query GetAssetSupportsVulnerabilities($assetMrn: String!) {
    assetSupportVulnerabilities(assetMrn: $assetMrn)
  }
`;function Go(e){const t={...i,...e};return r(zn,t)}const Wn=n`
  query GetAssetUrlStats($input: AssetUrlStatsInput!) {
    assetUrlStats(input: $input) {
      stats {
        assetUrl {
          key
          value
        }
        scoreDistribution {
          Unscored
          Ok
          Low
          Medium
          High
          Critical
        }
      }
    }
  }
`;function wo(e){const t={...i,...e};return r(Wn,t)}const Kn=n`
  query GetAuditLogFilterSuggestions(
    $resourceMrn: String!
    $filterType: AuditLogFilterType!
    $searchText: String
    $filter: AuditLogsFilter
    $limit: Int
  ) {
    auditLogSuggestions(
      resourceMrn: $resourceMrn
      filterType: $filterType
      searchText: $searchText
      filter: $filter
      limit: $limit
    ) {
      label
      value {
        ... on StringValue {
          stringValue: value
        }
      }
    }
  }
`;function Lo(e){const t={...i,...e};return r(Kn,t)}const jn=n`
  query GetCVEs(
    $scopeMrn: String!
    $first: Int
    $after: String
    $last: Int
    $before: String
    $orderBy: FindingsOrder
    $filter: FindingsFilter
  ) {
    findings(
      scopeMrn: $scopeMrn
      first: $first
      after: $after
      last: $last
      before: $before
      orderBy: $orderBy
      filter: $filter
    ) {
      ... on FindingsConnection {
        totalCount
        filteredTotalCount
        edges {
          cursor
          node {
            ... on CveFinding {
              id
              mrn
              title
              asset {
                icon
                name
                id
                mrn
                tags {
                  key
                  value
                }
              }
              rating
              riskValue
              lastUpdated
              publishedAt
              state
              tags {
                key
                value
              }
              riskFactors {
                mrn
                indicator
                title
                affected
                total
                isPositive
              }
              lastUpdated
              exception {
                id
                exceptionId
                scope
                reviewStatus
                justification
                action
                author {
                  name
                  email
                  type
                }
                createdAt
              }
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
      ... on RequestError {
        message
        code
      }
      ... on NotFoundError {
        message
        code
      }
    }
  }
`;function Uo(e){const t={...i,...e};return r(jn,t)}const _n=n`
  query GetCaseContent($input: CaseContentInput!) {
    caseContent(input: $input) {
      title
    }
  }
`;function Vo(e){const t={...i,...e};return r(_n,t)}const Hn=n`
  query GetCaseDetails(
    $mrn: String!
    $affectedAssetsFirst: Int
    $affectedAssetsAfter: String
    $mitigatedAssetsFirst: Int
    $mitigatedAssetsAfter: String
  ) {
    case(mrn: $mrn) {
      ... on NotFoundError {
        message
        code
      }
      ... on RequestError {
        message
        code
      }
      ... on Case {
        status
        mrn
        title
        createdAt
        createdBy {
          name
          email
          mrn
          type
        }
        modifiedAt
        tags {
          key
          value
        }
        assetsCount
        totalRefsCount
        closedRefsCount
        ticketRefs {
          url
          type
          ticketId
        }
        vulnerabilityRefs {
          findingMrn
          scopeMrn
        }
        queryRefs {
          findingMrn
          scopeMrn
        }
        affectedAssets(
          first: $affectedAssetsFirst
          after: $affectedAssetsAfter
        ) {
          totalCount
          pageInfo {
            endCursor
            hasNextPage
            hasPreviousPage
            startCursor
          }
          edges {
            cursor
            node {
              id
              mrn
              name
              icon
              tags {
                key
                value
              }
              lastUpdated
            }
          }
        }
        mitigatedAssets(
          first: $mitigatedAssetsFirst
          after: $mitigatedAssetsAfter
        ) {
          totalCount
          pageInfo {
            endCursor
            hasNextPage
            hasPreviousPage
            startCursor
          }
          edges {
            cursor
            node {
              id
              mrn
              name
              icon
              tags {
                key
                value
              }
              lastUpdated
            }
          }
        }
      }
    }
  }
`;function xo(e){const t={...i,...e};return r(Hn,t)}const Jn=n`
  query GetCases(
    $first: Int
    $last: Int
    $after: String
    $before: String
    $input: CasesInput!
  ) {
    cases(
      first: $first
      after: $after
      before: $before
      input: $input
      last: $last
    ) {
      pageInfo {
        startCursor
        endCursor
        hasNextPage
        hasPreviousPage
      }
      totalCount
      edges {
        cursor
        node {
          mrn
          title
          createdAt
          createdBy {
            name
          }
          modifiedAt
          tags {
            key
            value
          }
          assetsCount
          totalRefsCount
          closedRefsCount
          spaceRiskDelta
          ticketRefs {
            url
            ticketId
            type
          }
        }
      }
    }
  }
`;function Bo(e){const t={...i,...e};return r(Jn,t)}const Yn=n`
  query GetCasesCount($input: CasesInput!) {
    cases(input: $input) {
      totalCount
    }
  }
`;function Qo(e){const t={...i,...e};return r(Yn,t)}const Zn=n`
  query GetCheckRowData(
    $scopeMrn: String!
    $first: Int
    $after: String
    $last: Int
    $before: String
    $orderBy: FindingsOrder
    $filter: FindingsFilter
    $renderedAssetQueryInput: RenderedAssetQueryDataInput!
  ) {
    findings(
      scopeMrn: $scopeMrn
      first: $first
      after: $after
      last: $last
      before: $before
      orderBy: $orderBy
      filter: $filter
    ) {
      ... on FindingsConnection {
        edges {
          node {
            ... on CheckFinding {
              mrn
              id
              title
              state
              iconId
              baseScore
              rating
              riskValue
              riskFactors {
                mrn
                indicator
                title
                affected
                total
                isPositive
              }
              lastUpdated
              tags {
                key
                value
              }
              asset {
                id
                mrn
                name
                icon
                lastUpdated
              }
              exception {
                id
                reviewStatus
                action
                justification
              }
              resultType
              mquery {
                uid
                mrn
                title
                docs {
                  desc
                  remediations {
                    ... on Remediations {
                      entries {
                        id
                        idName
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
                  audit
                  remediation
                }
                impact {
                  value
                  rating
                }
                mql
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
                  mql
                  filter
                  filterID
                }
                action
                code
                codeId
                severity
              }
            }
          }
        }
      }
      ... on RequestError {
        message
        code
      }
      ... on NotFoundError {
        message
        code
      }
    }
    renderedAssetQueryData(input: $renderedAssetQueryInput) {
      ... on RenderedAssetQueryData {
        data
        assessment
      }
      ... on RequestError {
        message
        code
      }
      ... on NotFoundError {
        message
        code
      }
    }
  }
`;function zo(e){const t={...i,...e};return r(Zn,t)}const Xn=n`
  query GetCheckScores(
    $entityMrn: String!
    $first: Int
    $after: String
    $orderBy: CheckScoreOrder
    $filter: CheckScoreFilter
  ) {
    checkScores(
      entityMrn: $entityMrn
      first: $first
      after: $after
      orderBy: $orderBy
      filter: $filter
    ) {
      ... on CheckScoresConnection {
        totalCount
        filteredTotalCount
        edges {
          cursor
          node {
            mrn
            id
            title
            state
            iconId
            baseScore
            riskValue
            queryState
            severity
            resultType
            impactRating
            rating
            riskFactors {
              mrn
              indicator
              title
              affected
              total
              isPositive
            }
            lastUpdated
            tags {
              key
              value
            }
            asset {
              id
              mrn
              name
              icon
            }
            platform {
              name
              title
              arch
              version
              kind
              runtime
              release
            }
            exception {
              id
              exceptionId
              reviewStatus
              action
              justification
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
      ... on RequestError {
        message
        code
      }
      ... on NotFoundError {
        message
        code
      }
    }
  }
`;function Wo(e){const t={...i,...e};return r(Xn,t)}const ei=n`
  query GetChecks(
    $scopeMrn: String!
    $first: Int
    $after: String
    $last: Int
    $before: String
    $orderBy: FindingsOrder
    $filter: FindingsFilter
  ) {
    findings(
      scopeMrn: $scopeMrn
      first: $first
      after: $after
      last: $last
      before: $before
      orderBy: $orderBy
      filter: $filter
    ) {
      ... on FindingsConnection {
        totalCount
        filteredTotalCount
        edges {
          cursor
          node {
            ... on CheckFinding {
              id
              mrn
              title
              asset {
                id
              }
              rating
              state
              resultType
              riskValue
              state
              lastUpdated
              tags {
                key
                value
              }
              riskFactors {
                mrn
                indicator
                title
                affected
                total
                isPositive
              }
              exception {
                id
                exceptionId
                scope
                reviewStatus
                action
                justification
                author {
                  name
                  mrn
                  email
                  type
                }
                createdAt
              }
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
      ... on RequestError {
        message
        code
      }
      ... on NotFoundError {
        message
        code
      }
    }
  }
`;function Ko(e){const t={...i,...e};return r(ei,t)}const ti=n`
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
`;function jo(e){const t={...i,...e};return r(ti,t)}const ni=n`
  query GetClientIntegrationDeleteCommand(
    $input: GetClientIntegrationDeleteCommandInput!
  ) {
    getClientIntegrationDeleteCommand(input: $input) {
      message
    }
  }
`;function _o(e){const t={...i,...e};return r(ni,t)}const ii=n`
  query GetClientIntegrationToken($input: GetClientIntegrationTokenInput!) {
    getClientIntegrationToken(input: $input) {
      token
    }
  }
`;function Ho(e){const t={...i,...e};return r(ii,t)}const ri=n`
  query GetComplianceControl($input: ComplianceControlInput!) {
    complianceControl(input: $input) {
      framework {
        name
        version
      }
      mrn
      description
      title
      manual
      completion
      tags {
        key
        value
      }
      state
      assetGroupStatistics {
        count
        groupType
        listsAssetTypes {
          assetType
          aliases
          displayName
          shortName
        }
        statistics {
          count
          type {
            assetType
            aliases
            displayName
            shortName
          }
        }
      }
      assetsStats {
        compliantAssets
        failedAssets
        totalAssets
      }
      checksStats {
        activeChecks
        snoozedChecks
        disabledChecks
        totalChecks
      }
      exceptions {
        id
        author {
          name
          mrn
          email
          type
        }
        reviewer {
          name
          email
        }
        createdAt
        modifiedAt
        title
        justification
        reviewStatus
        action
      }
    }
  }
`;function Jo(e){const t={...i,...e};return r(ri,t)}const si=n`
  query GetComplianceControlAssets(
    $input: ComplianceControlInput!
    $assetsInput: ComplianceAssetsSearchInput!
  ) {
    complianceControl(input: $input) {
      mrn
      description
      title
      assets(input: $assetsInput) {
        totalCount
        edges {
          cursor
          node {
            asset {
              id
              mrn
              state
              name
              labels {
                key
                value
              }
              updatedAt
              platform {
                name
                title
                arch
                version
                kind
                runtime
                release
              }
              score {
                id
                value
                type
                completion
                weight
                message
                grade
              }
              referenceIDs
              annotations {
                key
                value
              }
              asset_type
            }
            compliancePercentage
            relatedAssets
            exception {
              author {
                name
                mrn
                email
                type
              }
              createdAt
              action
              id
              reviewStatus
              title
              justification
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
    }
  }
`;function Yo(e){const t={...i,...e};return r(si,t)}const oi=n`
  query GetComplianceControlChecks(
    $input: ComplianceControlInput!
    $checksInput: ChecksSearchInput!
    $first: Int
    $after: String
  ) {
    complianceControl(input: $input) {
      mrn
      description
      title
      checks(input: $checksInput, first: $first, after: $after) {
        totalCount
        edges {
          cursor
          node {
            ... on PolicyCheck {
              state
              policyName
              policyMrn
              completion
              assets
            }
            ... on QueryCheck {
              exception {
                id
                action
                justification
                reviewStatus
              }
              state
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
              mquery {
                action
                impact {
                  rating
                  value
                }
                uid
                title
                mrn
              }
              completion
              assets
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
    }
  }
`;function Zo(e){const t={...i,...e};return r(oi,t)}const ai=n`
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
`;function Xo(e){const t={...i,...e};return r(ai,t)}const ui=n`
  query GetComplianceFramework($input: ComplianceFrameworkInput!) {
    complianceFramework(input: $input) {
      mrn
      name
      version
      createdAt
      modifiedAt
      authors {
        name
        email
        type
      }
      tags {
        key
        value
      }
      description
      summary
      stats {
        controls {
          activeControls
          snoozedControls
          outOfScopeControls
          disabledControls
          totalControls
          averageCompletion
          previousAverageCompletion
        }
        checks
        assets
        exceptions
      }
      state
      policiesMrns
      scopeMrn
      completion
      assetGroupStatistics {
        listsAssetTypes {
          assetType
          aliases
          displayName
          shortName
        }
        groupType
        count
        statistics {
          type {
            assetType
            aliases
            displayName
            shortName
          }
          count
        }
      }
      previousCompletionScores {
        entries {
          score
          timestamp
        }
      }
    }
  }
`;function ea(e){const t={...i,...e};return r(ui,t)}const ci=n`
  query GetComplianceFrameworkAssets(
    $input: ComplianceFrameworkInput!
    $assetsInput: ComplianceAssetsSearchInput!
  ) {
    complianceFramework(input: $input) {
      mrn
      name
      assetGroupStatistics {
        listsAssetTypes {
          assetType
          aliases
          displayName
          shortName
        }
        groupType
        count
        statistics {
          type {
            assetType
            aliases
            displayName
            shortName
          }
          count
        }
      }
      assets(input: $assetsInput) {
        totalCount
        edges {
          cursor
          node {
            compliancePercentage
            asset {
              id
              mrn
              state
              name
              labels {
                key
                value
              }
              updatedAt
              platform {
                name
                title
                arch
                version
                kind
                runtime
                release
              }
              score {
                completion
                grade
                id
                message
                type
                value
                weight
              }
              referenceIDs
              annotations {
                key
                value
              }
              asset_type
              relatedAssets {
                count {
                  count
                  isParent
                  type
                }
                list {
                  totalCount
                }
              }
            }
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
`;function ta(e){const t={...i,...e};return r(ci,t)}const li=n`
  query GetComplianceFrameworkControls(
    $input: ComplianceFrameworkInput!
    $controlsInput: ControlsSearchInput!
  ) {
    complianceFramework(input: $input) {
      mrn
      name
      controls(input: $controlsInput) {
        totalCount
        edges {
          cursor
          node {
            mrn
            description
            title
            manual
            completion
            tags {
              key
              value
            }
            state
            assetsStats {
              compliantAssets
              failedAssets
              totalAssets
            }
            checksStats {
              activeChecks
              snoozedChecks
              disabledChecks
              totalChecks
              totalQueries
            }
            exception {
              author {
                name
                mrn
                email
                type
              }
              createdAt
              action
              id
              reviewStatus
              title
              justification
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
    }
  }
`;function na(e){const t={...i,...e};return r(li,t)}const ia=n`
  query GetComplianceFrameworks($input: ComplianceFrameworksInput!) {
    complianceFrameworks(input: $input) {
      authors {
        name
        email
      }
      createdAt
      modifiedAt
      completion
      description
      mrn
      name
      previousCompletionScores {
        entries {
          score
          timestamp
        }
      }
      scopeMrn
      state
      stats {
        controls {
          activeControls
          snoozedControls
          outOfScopeControls
          disabledControls
          totalControls
          averageCompletion
          previousAverageCompletion
        }
        checks
        assets
        exceptions
      }
      summary
      version
      tags {
        key
        value
      }
    }
  }
`,pi=n`
  query GetContent($input: ContentSearchInput!) {
    content(input: $input) {
      totalCount
      edges {
        cursor
        node {
          ... on Policy {
            access
            action
            assigned
            authors {
              email
              name
              type
            }
            category
            summary
            docs
            createdAt
            featured
            trustLevel
            mrn
            name
            statistics {
              checks
              policies
              queries
            }
            uid
            updatedAt
            version
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
  }
`;function ra(e){const t={...i,...e};return r(pi,t)}const di=n`
  query GetCveAdvisories(
    $id: ID!
    $scopeMrn: String!
    $advisoriesFirst: Int
    $advisoriesAfter: String
  ) {
    cve(id: $id) {
      id
      mrn
      advisoryAggregateScores(
        first: $advisoriesFirst
        after: $advisoriesAfter
        scopeMrn: $scopeMrn
      ) {
        ... on AggregateScoresConnection {
          totalCount
          pageInfo {
            startCursor
            endCursor
            hasNextPage
            hasPreviousPage
          }
          edges {
            cursor
            node {
              id
              iconId
              findingMrn
              scoreType
              state
              effort
              spaceRiskImprovement
              description
              remediatedAt
              spaceId
              title
              firstDetectedAt
              riskValue
              rankScore
              rank
              rating
              baseScore
              baseValue
              baseRating
              blastRadius {
                ...BlastRadiusFields
              }
              riskFactors {
                mrn
                indicator
                title
                total
                affected
                isPositive
              }
              detectionSources {
                name
                firstDetectedAt
                lastUpdatedAt
                affectedAssets
                vendor
              }
            }
          }
        }
      }
    }
  }
  ${u}
`;function sa(e){const t={...i,...e};return r(di,t)}const mi=n`
  query GetDataQueriesList(
    $entityMrn: String!
    $first: Int
    $after: String
    $orderBy: DataQueryOrder
    $filter: DataQueryFilter
  ) {
    dataQueries(
      entityMrn: $entityMrn
      first: $first
      after: $after
      orderBy: $orderBy
      filter: $filter
    ) {
      ... on DataQueriesConnection {
        totalCount
        edges {
          cursor
          node {
            mrn
            id
            title
            iconId
            lastUpdated
            tags {
              key
              value
            }
            asset {
              id
              mrn
              name
              icon
            }
            platform {
              name
              title
              arch
              version
              kind
              runtime
              family
              labels {
                key
                value
              }
            }
            mquery {
              uid
              mrn
              title
              mql
              action
              code
              codeId
            }
          }
        }
        pageInfo {
          startCursor
          endCursor
          hasNextPage
          hasPreviousPage
        }
        filteredTotalCount
      }
      ... on RequestError {
        message
        code
      }
      ... on NotFoundError {
        message
        code
      }
    }
  }
`;function oa(e){const t={...i,...e};return r(mi,t)}const gi=n`
  query GetDataQuery(
    $entityMrn: String!
    $first: Int
    $after: String
    $orderBy: DataQueryOrder
    $filter: DataQueryFilter
  ) {
    dataQueries(
      entityMrn: $entityMrn
      first: $first
      after: $after
      orderBy: $orderBy
      filter: $filter
    ) {
      ... on DataQueriesConnection {
        totalCount
        edges {
          cursor
          node {
            mrn
            id
            iconId
            lastUpdated
            tags {
              key
              value
            }
            asset {
              id
              mrn
              name
              icon
            }
            platform {
              name
              title
              arch
              version
              kind
              runtime
              family
              labels {
                key
                value
              }
            }
            value
            mquery {
              uid
              mrn
              title
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
                audit
                remediation
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
                mql
                filter
                filterID
              }
              action
              code
              codeId
              severity
            }
          }
        }
        pageInfo {
          startCursor
          endCursor
          hasNextPage
          hasPreviousPage
        }
        filteredTotalCount
      }
      ... on RequestError {
        message
        code
      }
      ... on NotFoundError {
        message
        code
      }
    }
  }
`;function aa(e){const t={...i,...e};return o(gi,t)}const fi=n`
  query GetFindingRiskFactors(
    $entityMrn: String!
    $filter: AggregateScoreFilter
    $first: Int
    $after: String
    $orderBy: AggregateScoreOrder
  ) {
    aggregateScores(
      entityMrn: $entityMrn
      filter: $filter
      first: $first
      after: $after
      orderBy: $orderBy
    ) {
      ... on AggregateScoresConnection {
        totalCount
        edges {
          cursor
          node {
            id
            findingMrn
            riskFactors {
              mrn
              indicator
              title
              total
              isPositive
              magnitude {
                value
                isToxic
              }
              affected
            }
          }
        }
      }
      ... on RequestError {
        message
        code
      }
      ... on NotFoundError {
        message
        code
      }
    }
  }
`;function ua(e){const t={...i,...e};return r(fi,t)}const yi=n`
  query GetFindingsFilterSuggestions(
    $resourceMrn: String!
    $filterType: FindingFilterType!
    $searchText: String
    $filter: FindingsFilter
    $limit: Int
  ) {
    findingsFilterSuggestions(
      resourceMrn: $resourceMrn
      filterType: $filterType
      searchText: $searchText
      filter: $filter
      limit: $limit
    ) {
      label
      value {
        ... on StringValue {
          stringValue: value
        }
        ... on ScoreRatingValue {
          ratingValue: value
        }
        ... on FindingTypeValue {
          findingTypeValue: value
        }
        ... on ScoreStateFilterValue {
          scoreStateValue: value
        }
      }
    }
  }
`;function ca(e){const t={...i,...e};return r(yi,t)}const vi=n`
  query GetIntegrationsSummary($input: IntegrationsSummaryInput!) {
    integrationsSummary(input: $input) {
      integrationSummaries {
        totalCount
        activeCount
        failedCount
        warningCount
        assetsCount
        policiesCount
        checksCount
        type
      }
      total
    }
  }
`;function la(e){const t={...i,...e};return r(vi,t)}const $i=n`
  query GetListFrameworks($input: ListFrameworksInput!) {
    listFrameworks(input: $input) {
      edges {
        cursor
        node {
          mrn
          authors {
            name
            email
            type
          }
          title
          description
          state
          tags {
            key
            value
          }
          score {
            id
            iconId
            spaceId
            entity {
              ... on EntityInfoAsset {
                id
                mrn
                name
                icon
                lastUpdated
              }
              ... on EntityInfoSpace {
                id
                mrn
                name
              }
            }
            tags {
              key
              value
            }
            findingMrn
            rank
            baseScore
            riskValue
            completion
            scoreType
            blastRadius {
              indicator
              assets
              affected
              critical
              high
              medium
              low
              none
              error
              pass
              disabled
              snoozed
            }
            riskFactors {
              mrn
              indicator
              title
              affected
              total
              isPositive
            }
            title
            description
            epss {
              probability
              percentile
            }
            cvss {
              id
              value
              type
              vector
              source
            }
            lastScannedAt
            firstDetectedAt
            remediatedAt
            versionDistribution {
              total
              distribution {
                version
                count
                riskValue
              }
              assets
              installations
            }
            state
          }
          uploadedAt
        }
      }
    }
  }
`;function pa(e){const t={...i,...e};return r($i,t)}const Si=n`
  query GetMetrics(
    $entityMrn: String!
    $metricMrns: [String!]
    $startTime: String
    $endTime: String
  ) {
    metrics(
      entityMrn: $entityMrn
      metricMrns: $metricMrns
      startTime: $startTime
      endTime: $endTime
    ) {
      ... on MetricsResponse {
        entries {
          metricMrn
          title
          arrowResult
        }
      }
    }
  }
`;function da(e){const t={...i,...e};return r(Si,t)}const Ci=n`
  query GetOrganizationOverview($input: OrganizationOverviewInput!) {
    organizationOverview(input: $input) {
      organizationMrn
      assetScores {
        date
        scores {
          total
          A
          B
          C
          D
          F
          U
          Error
        }
      }
      assets {
        scores {
          total
          A
          B
          C
          D
          F
          U
          Error
        }
        improved
        regressed
        unchanged
      }
      vulnerabilities {
        date
        critical
        high
      }
      topVulnerabilities {
        totalAffectedAssets
        stats {
          amountAssets
          spaceMrn
          spaceName
          spaceOwners
        }
        cve {
          id
          title
          description
          cvssScore {
            id
            type
            value
          }
        }
      }
      newVulnerabilities {
        date
        assetsAffected
        cve {
          id
          title
          description
          cvssScore {
            type
            value
          }
        }
      }
      spacesOverview {
        spaceName
        spaceMrn
        scores {
          total
          A
          B
          C
          D
          F
          U
          Error
        }
      }
      integrationSummaries {
        type
        totalCount
      }
      eolAssets
      reportDate
    }
  }
`;function ma(e){const t={...i,...e};return r(Ci,t)}const Ai=n`
  query GetOrganizationScope($mrn: String!, $actions: [String!]!) {
    organization(mrn: $mrn) {
      id
      mrn
      name
      description
    }
    iamActions: testIamActions(resourceMrn: $mrn, actions: $actions)
  }
`;function ga(e){const t={...i,...e};return r(Ai,t)}n`
  query GetPackages(
    $scopeMrn: String!
    $first: Int
    $after: String
    $last: Int
    $before: String
    $orderBy: FindingsOrder
    $filter: FindingsFilter
  ) {
    findings(
      scopeMrn: $scopeMrn
      first: $first
      after: $after
      last: $last
      before: $before
      orderBy: $orderBy
      filter: $filter
    ) {
      ... on FindingsConnection {
        totalCount
        filteredTotalCount
        edges {
          cursor
          node {
            ... on PackageFinding {
              id
              asset {
                id
                mrn
                name
                icon
                tags {
                  key
                  value
                }
              }
              riskValue
              rating
              lastUpdated
              title
              packageName
              installedVersion
              availableVersion
              firstFound
              packageType
              iconId
              cvss {
                value
                id
                source
                type
                vector
              }
              epss {
                probability
                percentile
              }
              riskFactors {
                mrn
                indicator
                title
                total
                affected
                isPositive
              }
              platform
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
      ... on RequestError {
        message
        code
      }
      ... on NotFoundError {
        message
        code
      }
    }
  }
`;const ki=n`
  query GetPolicy($input: PolicyInput!) {
    policy(input: $input) {
      mrn
      name
      version
      action
      assigned
      trustLevel
      docs
      authors {
        name
        email
        type
      }
      variantPlatformFilters {
        id
        title
        icon
      }
    }
  }
`;function fa(e){const t={...i,...e};return r(ki,t)}const Ii=n`
  query GetPolicyProps($input: PolicyInput!, $scopeInput: PolicyInput!) {
    policy(input: $input) {
      uid
      mrn
      properties {
        uid
        mrn
        mql
        title
        for {
          mrn
        }
      }
      queries {
        uid
        mrn
        properties {
          uid
          mrn
          mql
          title
          for {
            mrn
          }
        }
      }
    }
    scopePolicy: policy(input: $scopeInput) {
      uid
      mrn
      properties {
        uid
        mrn
        mql
        title
        for {
          mrn
        }
      }
    }
  }
`;function ya(e){const t={...i,...e};return r(Ii,t)}const Pi=n`
  query GetQueryDetectedAssets(
    $entityMrn: String!
    $first: Int!
    $after: String
    $filter: DataQueryFilter
  ) {
    dataQueries(
      entityMrn: $entityMrn
      filter: $filter
      first: $first
      after: $after
    ) {
      ... on DataQueriesConnection {
        edges {
          node {
            mrn
            asset {
              mrn
              name
            }
            tags {
              key
              value
            }
            iconId
            id
            lastUpdated
            value
          }
          cursor
        }
        totalCount
        pageInfo {
          startCursor
          endCursor
          hasNextPage
          hasPreviousPage
        }
      }
    }
  }
`;function va(e){const t={...i,...e};return r(Pi,t)}const Mi=n`
  query GetQueryPack($input: PolicyInput!) {
    policy(input: $input) {
      mrn
      name
      version
      assigned
      authors {
        name
        email
        type
      }
      docs
      trustLevel
      variantPlatformFilters {
        id
        title
        icon
      }
    }
  }
`;function $a(e){const t={...i,...e};return r(Mi,t)}const Di=n`
  query GetQueryPackQueries($input: PolicyInput!) {
    policy(input: $input) {
      mrn
      queries {
        uid
        mrn
        title
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
        action
      }
      groups {
        title
        summary
        checks {
          mrn
          impact {
            value
            rating
          }
          action
        }
        queries {
          mrn
          impact {
            value
            rating
          }
          action
        }
        policies {
          mrn
          impact {
            value
            rating
          }
          action
        }
      }
    }
  }
`;function Sa(e){const t={...i,...e};return r(Di,t)}const g=n`
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
  ${p}
  ${l}
`;function Ca(e){const t={...i,...e};return r(g,t)}function Aa(e){const t={...i,...e};return o(g,t)}const f=n`
  query GetRenderedAssetDataQuery($input: RenderedAssetQueryDataInput!) {
    renderedAssetQueryData(input: $input) {
      ... on RenderedAssetQueryData {
        assessment
        data
      }
      ... on RequestError {
        message
        code
      }
      ... on NotFoundError {
        message
        code
      }
    }
  }
`;function ka(e){const t={...i,...e};return r(f,t)}function Ia(e){const t={...i,...e};return o(f,t)}const bi=n`
  query GetRiskFactorsDocs($spaceMrn: String!, $mrns: [String!]) {
    riskFactors(spaceMrn: $spaceMrn, mrns: $mrns) {
      edges {
        mrn
        title
        docs {
          active
          inactive
        }
      }
    }
  }
`;function Pa(e){const t={...i,...e};return r(bi,t)}n`
  query GetSearchResults(
    $input: AssetSearchInput!
    $orderBy: AssetOrder
    $first: Int!
    $after: String
  ) {
    assetSearch(
      input: $input
      first: $first
      after: $after
      orderBy: $orderBy
    ) {
      totalCount
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        startCursor
      }
      edges {
        cursor
        node {
          asset_type
          id
          mrn
          name
          platform {
            arch
            kind
            name
            runtime
            title
            version
          }
          referenceIDs
          score {
            completion
            grade
            id
            message
            type
            value
            weight
          }
          state
          updatedAt
        }
      }
    }
  }
`;const hi=n`
  query GetSecurityModel($scopeMrn: String!) {
    securityModel(scopeMrn: $scopeMrn) {
      scopeMrn
      slas {
        findings {
          daysBeforeWarning
          daysToResolve
          rating
        }
      }
    }
  }
`;function Ma(e){const t={...i,...e};return r(hi,t)}const Ei=n`
  query GetSharedSpacesCount {
    sharedSpaces(first: 0) {
      totalCount
    }
  }
`;function Da(e){const t={...i,...e};return r(Ei,t)}const Ri=n`
  query GetSpaceInventoryStats($spaceMrn: String!, $metricMrns: [String!]) {
    space(mrn: $spaceMrn) {
      mrn
      stats {
        integrationsStatistics {
          active
          pending
          errored
          total
          type
        }
      }
      metrics(metricMrns: $metricMrns) {
        ... on MetricsResponse {
          entries {
            metricMrn
            title
            arrowResult
          }
        }
      }
    }
  }
`;function ba(e){const t={...i,...e};return r(Ri,t)}const Oi=n`
  query GetSpaceRiskFactors($spaceMrn: String!) {
    riskFactors(spaceMrn: $spaceMrn) {
      edges {
        mrn
        title
        indicator
        action
        docs {
          active
          inactive
        }
        magnitude {
          value
          isToxic
        }
        defaultMagnitude {
          value
          isToxic
        }
        assetFieldFilters {
          labelBasedFilters {
            key
            value
          }
          annotationBasedFilters {
            key
            value
          }
        }
      }
    }
  }
`;function ha(e){const t={...i,...e};return r(Oi,t)}const Ti=n`
  query GetSpaceScope($mrn: String!, $actions: [String!]!) {
    space(mrn: $mrn) {
      id
      mrn
      name
      description
      shared
      organization {
        id
        mrn
      }
    }
    iamActions: testIamActions(resourceMrn: $mrn, actions: $actions)
  }
`;function Ea(e){const t={...i,...e};return r(Ti,t)}const Fi=n`
  query GetTicketContext($input: TicketContextInput!) {
    ticketContext(input: $input) {
      ... on JiraTicketContextProjectsPayload {
        projects {
          key
          name
        }
      }
      ... on EmailTicketContextPayload {
        recipients {
          name
          email
          isDefault
          referenceUrl
        }
      }
      ... on AzureDevopsTicketContextProjectsPayload {
        projects {
          name
        }
      }
      ... on ZendeskTicketContextFieldsPayload {
        priority {
          value
          displayName
        }
        type {
          value
          displayName
        }
      }
    }
  }
`;function Ra(e){const t={...i,...e};return r(Fi,t)}const Ni=n`
  query GetTicketingIntegrations($input: TicketingIntegrationsInput!) {
    ticketingIntegrations(input: $input) {
      integrations {
        mrn
        name
        type
        configurationOptions {
          ... on JiraConfigurationOptions {
            host
            email
            defaultProject
            autoCloseTickets
            autoCreateCases
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
        }
      }
    }
  }
`;function Oa(e){const t={...i,...e};return r(Ni,t)}const qi=n`
  query GetTopAssetFindings(
    $scopeMrn: String!
    $first: Int
    $after: String
    $last: Int
    $before: String
    $orderBy: FindingsOrder
    $filter: FindingsFilter
  ) {
    findings(
      scopeMrn: $scopeMrn
      first: $first
      after: $after
      last: $last
      before: $before
      orderBy: $orderBy
      filter: $filter
    ) {
      ... on FindingsConnection {
        edges {
          cursor
          node {
            ... on CheckFinding {
              mrn
              id
              title
              state
              iconId
              baseScore
              riskValue
              rating
              riskFactors {
                mrn
                indicator
                title
                affected
                total
                isPositive
              }
              lastUpdated
              tags {
                key
                value
              }
              asset {
                id
                mrn
                name
                icon
                lastUpdated
                platform {
                  name
                  title
                  arch
                  version
                  kind
                  runtime
                  release
                  family
                  labels {
                    key
                    value
                  }
                }
              }
              exception {
                id
                reviewStatus
                action
                justification
              }
              resultType
              mquery {
                uid
                mrn
                title
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
                  audit
                  remediation
                }
                impact {
                  value
                  rating
                }
                mql
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
                  mql
                  filter
                  filterID
                }
                action
                code
                codeId
                severity
              }
            }
            ... on CveFinding {
              mrn
              id
              asset {
                id
                mrn
                name
                icon
                lastUpdated
                platform {
                  name
                  title
                  arch
                  version
                  kind
                  runtime
                  release
                  family
                  labels {
                    key
                    value
                  }
                }
              }
              title
              state
              iconId
              epss {
                probability
                percentile
              }
              cvss {
                id
                value
                type
                vector
                source
                rating
              }
              riskValue
              rating
              riskFactors {
                mrn
                indicator
                title
                affected
                total
                isPositive
              }
              firstDetectedAt
              publishedAt
              tags {
                key
                value
              }
              lastUpdated
              detectionSources {
                name
                url
                firstDetectedAt
                lastUpdatedAt
                fixedAt
                vendor
                version
              }
              exception {
                id
                reviewStatus
                action
                justification
              }
            }
            ... on AdvisoryFinding {
              mrn
              id
              asset {
                id
                mrn
                name
                icon
                lastUpdated
                platform {
                  name
                  title
                  arch
                  version
                  kind
                  runtime
                  release
                  family
                  labels {
                    key
                    value
                  }
                }
              }
              title
              state
              iconId
              epss {
                probability
                percentile
              }
              cvss {
                id
                value
                type
                vector
                source
                rating
              }
              riskValue
              rating
              riskFactors {
                mrn
                indicator
                title
                affected
                total
                isPositive
              }
              firstDetectedAt
              publishedAt
              tags {
                key
                value
              }
              lastUpdated
              detectionSources {
                name
                url
                firstDetectedAt
                lastUpdatedAt
                fixedAt
                vendor
                version
              }
              exception {
                id
                reviewStatus
                action
                justification
              }
            }
          }
        }
      }
    }
  }
`;function Ta(e){const t={...i,...e};return r(qi,t)}const Gi=n`
  query GetTotalAssets($scopeMrn: String) {
    assets(scopeMrn: $scopeMrn) {
      totalCount
    }
  }
`;function Fa(e){const t={...i,...e};return r(Gi,t)}const wi=n`
  query GetWorkspace($mrn: String!, $metricMrns: [String!]) {
    workspace(mrn: $mrn) {
      ... on Workspace {
        mrn
        ownerMrn
        name
        description
        priorityFindings
        assetGroupStats {
          count
          groupType
          displayName
        }
        metrics(metricMrns: $metricMrns) {
          ... on MetricsResponse {
            entries {
              metricMrn
              title
              arrowResult
            }
          }
        }
      }
      ... on RequestError {
        code
        message
      }
      ... on NotFoundError {
        code
        message
      }
    }
  }
`;function Na(e){const t={...i,...e};return r(wi,t)}const Li=n`
  query GetWorkspaceInventoryStats(
    $workspaceMrn: String!
    $metricMrns: [String!]
  ) {
    workspace(mrn: $workspaceMrn) {
      ... on Workspace {
        mrn
        metrics(metricMrns: $metricMrns) {
          ... on MetricsResponse {
            entries {
              metricMrn
              title
              arrowResult
            }
          }
        }
      }
    }
  }
`;function qa(e){const t={...i,...e};return r(Li,t)}const Ui=n`
  query GetWorkspaceScope($mrn: String!, $actions: [String!]!) {
    workspace(mrn: $mrn) {
      ... on Workspace {
        mrn
        name
        description
      }
    }
    iamActions: testIamActions(resourceMrn: $mrn, actions: $actions)
  }
`;function Ga(e){const t={...i,...e};return r(Ui,t)}const Vi=n`
  query GetWorkspaces(
    $input: WorkspacesInput!
    $after: String
    $first: Int
    $metricMrns: [String!]
  ) {
    workspaces(input: $input, after: $after, first: $first) {
      totalCount
      pageInfo {
        startCursor
        endCursor
        hasNextPage
        hasPreviousPage
      }
      edges {
        cursor
        node {
          mrn
          ownerMrn
          name
          description
          assetGroupStats {
            count
            displayName
            groupType
            icon
            listsAssetTypes {
              assetType
              displayName
              shortName
              aliases
            }
            statistics {
              count
              type {
                assetType
                displayName
                shortName
                aliases
              }
            }
          }
          metrics(metricMrns: $metricMrns) {
            ... on MetricsResponse {
              entries {
                metricMrn
                title
                arrowResult
              }
            }
          }
          priorityFindings
        }
      }
    }
  }
`;function wa(e){const t={...i,...e};return r(Vi,t)}const xi=n`
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
`;function La(e){const t={...i,...e};return r(xi,t)}const Bi=n`
  query ListDiscoveryResults($input: ListDiscoveryResultsInput!) {
    listDiscoveryResults(input: $input) {
      stats {
        identifier
        query
        count
        title
      }
    }
  }
`;function Ua(e){const t={...i,...e};return r(Bi,t)}const Qi=n`
  query ListDocuments($scopeMrn: String!, $first: Int!, $after: String) {
    listDocuments(scopeMRN: $scopeMrn, first: $first, after: $after) {
      totalCount
      edges {
        cursor
        node {
          mrn
          name
          type
          format
          status
          statusMessage
          createdBy {
            name
            email
            type
          }
          requestedAt
          generatedAt
        }
      }
      pageInfo {
        startCursor
        endCursor
        hasNextPage
        hasPreviousPage
      }
    }
  }
`;function Va(e){const t={...i,...e};return r(Qi,t)}const zi=n`
  query ListExceptionGroups(
    $input: ListExceptionGroupsInput!
    $first: Int
    $after: String
    $last: Int
    $before: String
  ) {
    listExceptionGroups(
      input: $input
      first: $first
      after: $after
      last: $last
      before: $before
    ) {
      edges {
        cursor
        node {
          action
          author {
            email
            mrn
            name
            type
          }
          createdAt
          deletedAt
          deletedBy {
            name
            email
          }
          exceptionId
          id
          justification
          modifiedAt
          reviewStatus
          reviewer {
            email
            name
            type
          }
          scopeMrn
          title
          validUntil
          exceptions {
            ... on AssetCheckException {
              mrn
              score {
                id
                value
                type
                completion
                weight
                message
                grade
                riskScore
                riskValue
                riskRating
              }
              title
              riskScore
              riskValue
              rating
              policyMrn
              policyName
            }
            ... on SpaceCheckException {
              mrn
              title
              riskScore
              riskValue
              rating
              assetsStats {
                passed
                failed
                errored
                total
              }
              policyMrn
              policyName
            }
            ... on AssetCveException {
              mrn
              id
              title
              riskScore
              riskValue
              rating
              cvss {
                id
                value
                type
                vector
                source
                rating
              }
            }
            ... on AssetAdvisoryException {
              mrn
              id
              title
              iconId
              riskScore
              riskValue
              rating
              cvss {
                id
                value
                type
                vector
                source
                rating
              }
            }
            ... on SpaceCveException {
              mrn
              id
              title
              riskScore
              riskValue
              rating
              cvss {
                id
                value
                type
                vector
                source
                rating
              }
            }
            ... on SpaceAdvisoryException {
              mrn
              id
              title
              iconId
              riskScore
              riskValue
              rating
              cvss {
                id
                value
                type
                vector
                source
                rating
              }
            }
            ... on ControlsEdge {
              cursor
              node {
                exception {
                  id
                  author {
                    name
                    mrn
                    type
                    email
                  }
                  reviewer {
                    name
                    email
                  }
                  createdAt
                  modifiedAt
                  title
                  justification
                  reviewStatus
                  action
                }
                mrn
                assetsStats {
                  compliantAssets
                  failedAssets
                  totalAssets
                }
                title
                state
                scopeMrn
                description
                completion
                framework {
                  name
                  mrn
                }
              }
            }
          }
        }
      }
      pageInfo {
        startCursor
        endCursor
        hasNextPage
        hasPreviousPage
      }
      totalCount
    }
  }
`;function xa(e){const t={...i,...e};return r(zi,t)}const Wi=n`
  query ListSharedSpaces($first: Int, $after: String, $metricMrns: [String!]) {
    sharedSpaces(first: $first, after: $after) {
      totalCount
      edges {
        cursor
        node {
          id
          mrn
          name
          description
          priorityFindings
          assetGroupStats {
            listsAssetTypes {
              assetType
              aliases
              displayName
              shortName
            }
            groupType
            displayName
            icon
            count
            statistics {
              type {
                assetType
                aliases
                displayName
                shortName
              }
              count
            }
          }
          stats {
            assetGroupStatistics {
              groupType
              count
            }
          }
          organization {
            id
            name
            mrn
            description
          }
          metrics(metricMrns: $metricMrns) {
            ... on MetricsResponse {
              entries {
                metricMrn
                title
                arrowResult
              }
            }
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
  }
`;function Ba(e){const t={...i,...e};return r(Wi,t)}const Ki=n`
  query ListSpaceExceptions(
    $input: ListExceptionGroupsInput!
    $first: Int
    $after: String
    $last: Int
    $before: String
  ) {
    listExceptionGroups(
      input: $input
      first: $first
      after: $after
      last: $last
      before: $before
    ) {
      totalCount
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        startCursor
      }
      edges {
        cursor
        node {
          action
          author {
            name
            mrn
            email
            type
          }
          createdAt
          deletedAt
          deletedBy {
            email
            name
            type
          }
          exceptions {
            ... on ControlsEdge {
              node {
                framework {
                  name
                  version
                }
                mrn
                description
                title
                manual
                completion
                tags {
                  key
                  value
                }
                state
                assetsStats {
                  compliantAssets
                  failedAssets
                  totalAssets
                }
                checksStats {
                  activeChecks
                  snoozedChecks
                  disabledChecks
                  totalChecks
                }
              }
            }
            ... on SpaceAdvisoryException {
              mrn
              id
              title
              iconId
              riskValue
              rating
              cvss {
                id
                value
                type
                vector
                source
                rating
              }
            }
            ... on SpaceCheckException {
              mrn
              title
              riskValue
              rating
              assetsStats {
                passed
                failed
                errored
                total
              }
              policyMrn
              policyName
            }
            ... on SpaceCveException {
              mrn
              id
              title
              riskValue
              rating
              cvss {
                id
                value
                type
                vector
                source
                rating
              }
            }
            ... on AssetAdvisoryException {
              mrn
              id
              title
              iconId
              riskValue
              rating
              cvss {
                id
                value
                type
                vector
                source
                rating
              }
            }
            ... on AssetCheckException {
              mrn
              title
              riskValue
              rating
              policyMrn
              policyName
            }
            ... on AssetCveException {
              mrn
              id
              title
              riskValue
              rating
              cvss {
                id
                value
                type
                vector
                source
                rating
              }
            }
          }
          id
          exceptionId
          scopeMrn
          title
          justification
          modifiedAt
          validUntil
          reviewStatus
          reviewer {
            email
            name
            type
          }
        }
      }
    }
  }
`;function Qa(e){const t={...i,...e};return r(Ki,t)}const ji=n`
  query LoadAdvisory($id: ID!) {
    advisory(id: $id) {
      mrn
      id
      title
      vulnerabilityRiskFactors {
        ...VulnerabilityRiskFactorsFields
      }
      externalUrls {
        iconIDEnum
        url
        title
      }
      publishedAt
      modifiedAt
      description
      cvssScore {
        id
        value
        type
        vector
        source
        rating
      }
    }
  }
  ${a}
`;function za(e){const t={...i,...e};return r(ji,t)}const _i=n`
  query LoadAdvisoryCves($advisoryId: ID!, $scopeMrn: String) {
    advisory(id: $advisoryId) {
      id
      mrn
      cves(scopeMrn: $scopeMrn) {
        id
        mrn
        riskValue
        rating
        source {
          id
          name
          url
        }
        title
        description
        summary
        publishedAt
        modifiedAt
        url
        cvssScore {
          id
          value
          type
          vector
          source
        }
        epssScore {
          percentile
          probability
        }
        cwe
        state
        vulnerabilityRiskFactors {
          ...VulnerabilityRiskFactorsFields
        }
      }
    }
  }
  ${a}
`;function Wa(e){const t={...i,...e};return r(_i,t)}const Hi=n`
  query LoadAgent($mrn: String!) {
    agent(mrn: $mrn) {
      id
      mrn
      name
      status {
        version
        state
        lastCheckin
      }
      labels {
        key
        value
      }
      platform {
        name
        release
        arch
      }
      hostname
      ipaddress
      createdAt
      errors {
        timestamp
        message
      }
    }
  }
`;function Ka(e){const t={...i,...e};return r(Hi,t)}const Ji=n`
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
`;function ja(e){const t={...i,...e};return r(Ji,t)}const Yi=n`
  query LoadAssetListPolicies(
    $mrn: String!
    $first: Int
    $after: String
    $filter: AssetListPoliciesFilter
  ) {
    asset(mrn: $mrn) {
      mrn
      listPolicies(first: $first, after: $after, filter: $filter) {
        totalCount
        edges {
          cursor
          node {
            mrn
            name
            category
            action
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
    }
  }
`;function _a(e){const t={...i,...e};return r(Yi,t)}const Zi=n`
  query LoadCategories($input: CategoriesListInput!) {
    categories(input: $input) {
      name
      packs
      policies
      queries
    }
  }
`;function Ha(e){const t={...i,...e};return o(Zi,t)}const Xi=n`
  query LoadCicdProjectJobs(
    $input: CicdProjectJobsInput!
    $first: Int
    $after: String
    $labelFilter: [KeyValueInput!]
  ) {
    cicdProjectJobs(input: $input) {
      ... on CicdProjectJobs {
        id
        spaceMrn
        project {
          id
          mrn
          type
          name
          projectURL
          projectID
        }
        jobs(first: $first, after: $after, labelFilter: $labelFilter) {
          totalCount
          edges {
            cursor
            node {
              ... on GitlabJob {
                id
                mrn
                name
                target
                projectUrl
                projectId
                projectTitle
                pipelineUrl
                jobId
                jobName
                jobURL
                jobStage
                commitSha
                commitDescription
                commitRefName
                mergeRequestId
                mergeRequestProjectUrl
                userName
                userId
                userEmail
                defaultBranch
                score {
                  type
                  id
                  value
                  type
                  completion
                  weight
                  message
                  riskRating
                  riskValue
                }
                pipelineKind
                updatedAt
              }
              ... on GithubJob {
                id
                mrn
                name
                target
                action
                workflow
                job
                runId
                runNumber
                actor
                repository
                eventName
                eventPath
                workspace
                sha
                ref
                headRef
                baseRef
                serverUrl
                score {
                  type
                  id
                  value
                  type
                  completion
                  weight
                  message
                  riskRating
                  riskValue
                }
                pipelineKind
                updatedAt
              }
              ... on CircleCIJob {
                id
                mrn
                name
                target
                projectUrl
                mergeRequestUrl
                job
                jobId
                buildUrl
                userName
                commitSha
                repositoryUrl
                branch
                associatedPullRequests
                workflowId
                workflowJobId
                workflowWorkspaceId
                score {
                  type
                  id
                  value
                  type
                  completion
                  weight
                  message
                  riskRating
                  riskValue
                }
                pipelineKind
                updatedAt
              }
              ... on AzureDevopsJob {
                id
                mrn
                name
                target
                projectUrl
                job
                jobId
                buildUrl
                userName
                commitSha
                repositoryUrl
                branch
                score {
                  type
                  id
                  value
                  type
                  completion
                  weight
                  message
                  riskRating
                  riskValue
                }
                pipelineKind
                updatedAt
              }
              ... on JenkinsJob {
                id
                mrn
                name
                target
                projectUrl
                job
                jobId
                buildUrl
                userName
                commitSha
                repositoryUrl
                branch
                score {
                  type
                  id
                  value
                  type
                  completion
                  weight
                  message
                  riskRating
                  riskValue
                }
                pipelineKind
                updatedAt
              }
              ... on KubernetesJob {
                id
                mrn
                score {
                  type
                  id
                  value
                  type
                  completion
                  weight
                  message
                  riskRating
                  riskValue
                }
                updatedAt
                clusterId
                namespace
                uid
                name
                target
                operation
                kind
                author
                ownerName
                ownerUid
                ownerKind
                resourceVersion
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
      }
    }
  }
`;function Ja(e){const t={...i,...e};return r(Xi,t)}const er=n`
  query LoadCicdProjects($input: CicdProjectsInput!) {
    cicdProjects(input: $input) {
      ... on CicdProjects {
        spaceMrn
        projects {
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
          pageInfo {
            startCursor
            endCursor
            hasNextPage
            hasPreviousPage
          }
        }
      }
    }
  }
`;function Ya(e){const t={...i,...e};return r(er,t)}const tr=n`
  query LoadCve($id: ID!) {
    cve(id: $id) {
      cvssScore {
        id
        source
        type
        value
        vector
        rating
      }
      epssScore {
        percentile
        probability
      }
      cwe
      description
      id
      modifiedAt
      mrn
      publishedAt
      source {
        id
        name
        url
      }
      url
      references
      state
      summary
      title
      vulnerabilityRiskFactors {
        ...VulnerabilityRiskFactorsFields
      }
    }
  }
  ${a}
`;function Za(e){const t={...i,...e};return r(tr,t)}const nr=n`
  query LoadEmailPreferences {
    emailPreferences {
      listID
      subscribed
      subscribedAt
    }
  }
`;function Xa(e){const t={...i,...e};return r(nr,t)}const ir=n`
  query LoadIntegrations($mrn: String!) {
    integrations(mrn: $mrn) {
      mrn
      name
      enabled
      options {
        url
        chatid
        token
        notificationType
      }
    }
  }
`;function eu(e){const t={...i,...e};return r(ir,t)}const rr=n`
  query LoadLegalPolicyConsent($mrn: String!) {
    legalPolicies(mrn: $mrn) {
      name
      id
      consent {
        mrn
        email
        signatureAt
      }
    }
  }
`;function tu(e){const t={...i,...e};return r(rr,t)}const sr=n`
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
  ${c}
`;function nu(e){const t={...i,...e};return r(sr,t)}const or=n`
  query LoadOrganization($mrn: String!) {
    organization(mrn: $mrn) {
      id
      mrn
      name
      capabilities
    }
  }
`;function iu(e){const t={...i,...e};return o(or,t)}const y=n`
  query LoadOrganizationForSpace($spaceMrn: String!) {
    space(mrn: $spaceMrn) {
      id
      mrn
      organization {
        id
        mrn
        name
        capabilities
        description
      }
    }
  }
`;function ru(e){const t={...i,...e};return r(y,t)}function su(e){const t={...i,...e};return o(y,t)}const ar=n`
  query LoadOrganizationMembers($mrn: String!) {
    organization(mrn: $mrn) {
      id
      mrn
      members {
        edges {
          cursor
          node {
            user {
              mrn
              email
              name
            }
            roles {
              title
              mrn
            }
          }
        }
      }
    }
  }
`;function ou(e){const t={...i,...e};return r(ar,t)}const ur=n`
  query LoadOrganizationSSOProvider($mrn: String!) {
    ssoProvider(mrn: $mrn) {
      provider {
        idpEntityID
        ssoUrl
        rpEntityID
        x509Fingerprints
        enabled
      }
    }
  }
`;function au(e){const t={...i,...e};return r(ur,t)}const cr=n`
  query LoadOrganizationStats(
    $mrn: String!
    $first: Int
    $after: String
    $query: String
    $metricMrns: [String!]
  ) {
    organization(mrn: $mrn) {
      id
      mrn
      name
      spacesCount
      spacesList(first: $first, after: $after, query: $query) {
        totalCount
        edges {
          cursor
          node {
            id
            mrn
            name
            description
            priorityFindings
            assetGroupStats {
              listsAssetTypes {
                assetType
                aliases
                displayName
                shortName
              }
              groupType
              displayName
              icon
              count
              statistics {
                type {
                  assetType
                  aliases
                  displayName
                  shortName
                }
                count
              }
            }
            stats {
              assetGroupStatistics {
                groupType
                count
              }
            }
            metrics(metricMrns: $metricMrns) {
              ... on MetricsResponse {
                entries {
                  metricMrn
                  title
                  arrowResult
                }
              }
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
    }
  }
`;function uu(e){const t={...i,...e};return r(cr,t)}const lr=n`
  query LoadPlatforms($input: PlatformsListInput!) {
    platforms(input: $input) {
      id
      name
      version
    }
  }
`;function cu(e){const t={...i,...e};return o(lr,t)}const pr=n`
  query LoadPolicy($input: PolicyInput!) {
    policy(input: $input) {
      mrn
      assigned
      action
      access
      authors {
        email
        name
        type
      }
      category
      createdAt
      docs
      featured
      githubUrl
      groups {
        title
        summary
        checks {
          action
          mrn
          impact {
            rating
            value
          }
        }
        queries {
          action
          impact {
            rating
            value
          }
          mrn
        }
        policies {
          action
          impact {
            rating
            value
          }
          mrn
        }
      }
      mutationStatistics {
        checks {
          active
          ignored
          removed
        }
        queries {
          removed
          ignored
          active
        }
      }
      name
      platforms {
        id
        name
        version
      }
      queries {
        mrn
      }
      properties {
        mrn
      }
      runCli {
        command
        installDocsURL
      }
      scoringSystem
      defaultScoringSystem
      statistics {
        checks
        policies
        queries
      }
      summary
      tags {
        key
        value
      }
      trustLevel
      uid
      updatedAt
      variants {
        icon
        id
        title
      }
      version
    }
  }
`;function lu(e){const t={...i,...e};return r(pr,t)}const dr=n`
  query LoadRegistrationTokens(
    $spaceMrn: String!
    $orderBy: RegistrationTokenOrder
    $first: Int
    $after: String
  ) {
    registrationTokens(
      spaceMrn: $spaceMrn
      orderBy: $orderBy
      first: $first
      after: $after
    ) {
      edges {
        cursor
        node {
          id
          mrn
          description
          token
          createdBy
          createdAt
          expiresAt
          revoked
          labels {
            key
            value
          }
        }
      }
      totalCount
      pageInfo {
        hasPreviousPage
        hasNextPage
        endCursor
        startCursor
      }
    }
  }
`;function pu(e){const t={...i,...e};return r(dr,t)}const mr=n`
  query LoadResourceInvitations(
    $resourceMrn: String
    $inviteeMrn: String
    $first: Int
    $after: String
    $orderBy: InvitationOrder = { direction: ASC, field: CREATED }
  ) {
    invitations(
      resourceMrn: $resourceMrn
      inviteeMrn: $inviteeMrn
      first: $first
      after: $after
      orderBy: $orderBy
    ) {
      edges {
        cursor
        node {
          mrn
          resourceMrn
          senderEmail
          inviteeEmail
          roleMrn
          roleMrns
          expiresAt
          message
          state
        }
      }
      totalCount
      pageInfo {
        startCursor
        endCursor
        hasNextPage
        hasPreviousPage
      }
    }
  }
`;function du(e){const t={...i,...e};return r(mr,t)}const gr=n`
  query LoadServiceAccount($mrn: String!) {
    serviceAccount(mrn: $mrn) {
      id
      mrn
      name
      roles {
        mrn
        title
      }
      createdAt
      lastUsed
    }
  }
`;function mu(e){const t={...i,...e};return r(gr,t)}const v=n`
  query LoadSpace($spaceMrn: String!, $metricMrns: [String!]) {
    space(mrn: $spaceMrn) {
      id
      mrn
      name
      description
      priorityFindings
      assetGroupStats {
        listsAssetTypes {
          assetType
          aliases
          displayName
          shortName
        }
        groupType
        displayName
        icon
        count
        statistics {
          type {
            assetType
            aliases
            displayName
            shortName
          }
          count
        }
      }
      organization {
        id
        mrn
        name
        description
      }
      settings {
        exceptionsConfiguration {
          requireApproval
          allowSelfApproval
          allowIndefiniteValidUntil
        }
        garbageCollectAssetsConfiguration {
          enable
          afterDays
        }
        terminatedAssetsConfiguration {
          cleanup
          after
        }
        unusedServiceAccountsConfiguration {
          cleanup
          after
        }
        platformVulnerabilityConfiguration {
          enable
        }
        eolAssetsConfiguration {
          enable
          monthsInAdvance
        }
        casesConfiguration {
          autoCreate
          aggregationWindow
        }
        platformMqlVexConfiguration {
          enable
        }
        mvdExperimentalSourcesConfiguration {
          sources {
            id
            name
            enabled
          }
        }
      }
      stats {
        assetGroupStatistics {
          groupType
          count
        }
      }
      metrics(metricMrns: $metricMrns) {
        ... on MetricsResponse {
          entries {
            metricMrn
            title
            arrowResult
          }
        }
      }
    }
  }
`;function gu(e){const t={...i,...e};return r(v,t)}function fu(e){const t={...i,...e};return o(v,t)}const fr=n`
  query LoadSpaceMembers($mrn: String!) {
    space(mrn: $mrn) {
      id
      mrn
      members {
        edges {
          cursor
          node {
            user {
              mrn
              email
              name
            }
            roles {
              title
              mrn
            }
          }
        }
      }
    }
  }
`;function yu(e){const t={...i,...e};return r(fr,t)}const vu=n`
  query LoadSpaceStats($mrn: String!) {
    space(mrn: $mrn) {
      id
      mrn
      stats {
        assetGroupStatistics {
          groupType
          count
          listsAssetTypes {
            assetType
            displayName
            shortName
            aliases
          }
          statistics {
            type {
              assetType
              displayName
              shortName
            }
            count
          }
        }
        integrationsStatistics {
          active
          pending
          errored
          total
          type
        }
      }
    }
  }
`;n`
  query LoadTopMisconfigs($input: SpacePolicySummaryInput!) {
    spacePolicySummary(input: $input) {
      spaceMrn
      querySummaries {
        edges {
          cursor
          node {
            id
            mquery {
              impact {
                rating
                value
              }
              mrn
              parent
              title
              uid
              action
            }
            mqueryState
            mqueryType
          }
        }
        totalCount
      }
    }
  }
`;const yr=n`
  query LoadUserInvitations(
    $resourceMrn: String
    $inviteeMrn: String
    $first: Int
    $after: String
    $orderBy: InvitationOrder = { direction: ASC, field: CREATED }
  ) {
    invitations(
      resourceMrn: $resourceMrn
      inviteeMrn: $inviteeMrn
      first: $first
      after: $after
      orderBy: $orderBy
    ) {
      edges {
        cursor
        node {
          mrn
          resourceMrn
          senderEmail
          inviteeEmail
          roleMrn
          expiresAt
          message
          state
        }
      }
    }
  }
`;function $u(e){const t={...i,...e};return r(yr,t)}const vr=n`
  query LoadViewer {
    viewer {
      mrn
      email
      name
      state
      organizations {
        id
        mrn
        name
        description
        capabilities
        spacesCount
        subscriptionInfo {
          basePlan {
            name
            id
          }
        }
        members {
          totalCount
        }
        owners: members(
          first: 1
          rolesFilter: "//iam.api.mondoo.app/roles/owner"
        ) {
          totalCount
          edges {
            cursor
            node {
              user {
                mrn
                name
                email
              }
            }
          }
        }
      }
      firstSpace {
        id
        mrn
        name
        description
        priorityFindings
        organization {
          id
          mrn
          name
          description
        }
        settings {
          eolAssetsConfiguration {
            enable
            monthsInAdvance
          }
          garbageCollectAssetsConfiguration {
            enable
            afterDays
          }
          terminatedAssetsConfiguration {
            cleanup
            after
          }
          unusedServiceAccountsConfiguration {
            cleanup
            after
          }
          platformVulnerabilityConfiguration {
            enable
          }
          casesConfiguration {
            autoCreate
            aggregationWindow
          }
          platformMqlVexConfiguration {
            enable
          }
          mvdExperimentalSourcesConfiguration {
            sources {
              id
              name
              enabled
            }
          }
        }
        assetGroupStats {
          listsAssetTypes {
            assetType
            aliases
            displayName
            shortName
          }
          groupType
          displayName
          icon
          count
          statistics {
            type {
              assetType
              aliases
              displayName
              shortName
            }
            count
          }
        }
        stats {
          assetGroupStatistics {
            groupType
            count
          }
        }
      }
    }
    viewerSettings {
      key
      value
    }
  }
`;function Su(e){const t={...i,...e};return r(vr,t)}const $r=n`
  query MqueryAssetScores(
    $input: MqueryAssetScoresInput!
    $first: Int!
    $after: String
    $orderBy: AssetOrder
  ) {
    mqueryAssetScores(
      input: $input
      first: $first
      after: $after
      orderBy: $orderBy
    ) {
      title
      description
      totalCount
      scoreDistribution {
        pass
        fail
        error
        unknown
      }
      edges {
        cursor
        node {
          assetMrn
          assetName
          assetPlatform {
            name
            title
            arch
            version
            kind
            runtime
            release
          }
          score {
            id
            value
            type
            completion
            weight
            message
            grade
          }
        }
      }
      pageInfo {
        startCursor
        endCursor
        hasNextPage
        hasPreviousPage
      }
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
      mql
    }
  }
`;function Cu(e){const t={...i,...e};return r($r,t)}const Sr=n`
  query OrganizationIDSuggestion($input: IDSuggestionInput!) {
    organizationIDSuggestion(input: $input) {
      id
      available
    }
  }
`;function Au(e){const t={...i,...e};return o(Sr,t)}const Cr=n`
  query PingIntegration($input: PingIntegrationInput!) {
    pingIntegration(input: $input) {
      mrn
    }
  }
`;function ku(e){const t={...i,...e};return o(Cr,t)}n`
  query QueryPack($input: PolicyInput!) {
    policy(input: $input) {
      uid
      mrn
      name
      version
      summary
      docs
      authors {
        name
        email
        type
      }
      platforms {
        id
        name
        version
      }
      category
      trustLevel
      access
      statistics {
        checks
        queries
        policies
      }
      tags {
        key
        value
      }
      featured
      queries {
        uid
        mrn
        title
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
        action
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
      groups {
        title
        summary
        checks {
          mrn
          impact {
            value
            rating
          }
          action
        }
        queries {
          mrn
          impact {
            value
            rating
          }
          action
        }
        policies {
          mrn
          impact {
            value
            rating
          }
          action
        }
      }
      runCli {
        command
        installDocsURL
      }
      githubUrl
      assigned
      mutationStatistics {
        checks {
          active
          ignored
          removed
        }
        queries {
          active
          ignored
          removed
        }
      }
      updatedAt
      createdAt
      variantPlatformFilters {
        id
        title
        icon
      }
    }
  }
`;const Ar=n`
  query SearchAggregateScore(
    $query: String!
    $type: SearchType!
    $first: Int!
    $after: String
    $scope: String
    $filters: SearchFilters
  ) {
    search(
      query: $query
      type: $type
      first: $first
      after: $after
      scope: $scope
      filters: $filters
    ) {
      scoreTypeDistribution {
        vulnerability
        advisory
        check
        policy
        risk
        asset
        software
        control
        framework
      }
      edges {
        node {
          ... on AggregateScore {
            nodeId: id
            iconId
            entity {
              ... on EntityInfoAsset {
                id
                mrn
                name
              }
              ... on EntityInfoSpace {
                id
                mrn
                name
              }
            }
            findingMrn
            rank
            baseScore
            riskValue
            rating
            scoreType
            blastRadius {
              indicator
              assets
              affected
              critical
              high
              medium
              low
              none
            }
            riskFactors {
              mrn
              indicator
              title
              affected
              total
              isPositive
            }
            nodeTitle: title
            nodeDescription: description
            tags {
              key
              value
            }
            epss {
              probability
              percentile
            }
            cvss {
              id
              value
              type
              vector
              source
            }
            lastScannedAt
            firstDetectedAt
            remediatedAt
            spaceId
          }
          ... on Advisory {
            id
            iconID
            iconIDEnum
            mrn
            source {
              id
              name
              url
            }
            externalUrls {
              title
              url
              iconIDEnum
            }
            title
            description
            cves {
              id
              mrn
              title
              description
              summary
              published
              modified
              publishedAt
              modifiedAt
              url
              cwe
              state
              exploitable
              references
            }
            score {
              id
              value
              type
              vector
              source
            }
            cvssScore {
              id
              value
              type
              vector
              source
            }
            vendorscore
            affectedPackages {
              id
              iconID
              iconIDEnum
              name
              version
              arch
              format
              namespace
              description
              status
              available
              origin
              vulnDiscoveryTime
              type
            }
            published
            modified
            publishedAt
            modifiedAt
            vulnerabilityRiskFactors {
              knownExploited
              remoteExploitable
            }
          }
          ... on Cve {
            id
            mrn
            cveTitle: title
            description
            publishedAt
            modifiedAt
            cvssScores {
              id
              value
              type
              vector
              source
            }
            cwe
            state
            references
            epssScore {
              probability
              percentile
            }
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
  }
`;function Iu(e){const t={...i,...e};return r(Ar,t)}const $=n`
  query SearchPolicy($input: ContentSearchInput!) {
    content(input: $input) {
      totalCount
      edges {
        cursor
        node {
          ... on Policy {
            uid
            mrn
            name
            action
            version
            summary
            docs
            authors {
              name
              email
              type
            }
            category
            trustLevel
            access
            statistics {
              checks
              queries
              policies
            }
            featured
            assigned
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
  }
`;function Pu(e){const t={...i,...e};return r($,t)}function Mu(e){const t={...i,...e};return o($,t)}const kr=n`
  query SearchQueryPack($input: ContentSearchInput!) {
    content(input: $input) {
      totalCount
      edges {
        cursor
        node {
          ... on Policy {
            uid
            mrn
            name
            version
            summary
            docs
            authors {
              name
              email
              type
            }
            category
            trustLevel
            access
            statistics {
              checks
              queries
              policies
            }
            featured
            assigned
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
  }
`;function Du(e){const t={...i,...e};return o(kr,t)}const Ir=n`
  query ServiceAccountForwardPagination(
    $spaceMrn: String
    $scopeMrn: String
    $first: Int
    $after: String
    $query: String
    $queryTerms: [String!]
    $orderBy: ServiceAccountOrder
  ) {
    serviceAccounts(
      spaceMrn: $spaceMrn
      scopeMrn: $scopeMrn
      first: $first
      after: $after
      query: $query
      queryTerms: $queryTerms
      orderBy: $orderBy
    ) {
      ...ServiceAccountFields
    }
  }
  ${it}
`;function bu(e){const t={...i,...e};return r(Ir,t)}const Pr=n`
  query SpaceIDSuggestion($input: IDSuggestionInput!) {
    spaceIDSuggestion(input: $input) {
      id
      available
    }
  }
`;function hu(e){const t={...i,...e};return o(Pr,t)}const Mr=n`
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
`;function Eu(e){const t={...i,...e};return r(Mr,t)}const Dr=n`
  query TestIAMActions($resourceMrn: String!, $actions: [String!]!) {
    testIamActions(resourceMrn: $resourceMrn, actions: $actions)
  }
`;function Ru(e){const t={...i,...e};return r(Dr,t)}const br=n`
  query TriggerAction($input: TriggerActionInput!) {
    triggerAction(input: $input) {
      mrn
    }
  }
`;function Ou(e){const t={...i,...e};return o(br,t)}const hr=n`
  query GetRelatedAdvisoryFindings(
    $scopeMrn: String!
    $first: Int
    $after: String
    $last: Int
    $before: String
    $orderBy: FindingsOrder
    $filter: FindingsFilter
  ) {
    findings(
      scopeMrn: $scopeMrn
      first: $first
      after: $after
      last: $last
      before: $before
      orderBy: $orderBy
      filter: $filter
    ) {
      ... on FindingsConnection {
        totalCount
        edges {
          cursor
          node {
            ... on AdvisoryFinding {
              mrn
              id
              asset {
                id
                mrn
                name
                icon
                lastUpdated
                platform {
                  name
                  title
                  arch
                  version
                  kind
                  runtime
                  release
                  family
                  labels {
                    key
                    value
                  }
                }
              }
              title
              state
              iconId
              epss {
                probability
                percentile
              }
              cvss {
                id
                value
                type
                vector
                source
                rating
              }
              riskScore
              riskValue
              rating
              riskFactors {
                mrn
                indicator
                title
                affected
                total
                isPositive
                magnitude {
                  value
                  isToxic
                }
              }
              firstDetectedAt
              publishedAt
              tags {
                key
                value
              }
              lastUpdated
              detectionSources {
                name
                url
                firstDetectedAt
                lastUpdatedAt
                fixedAt
                vendor
                version
              }
              exception {
                id
                reviewStatus
                action
                justification
                scope
                exceptionId
                author {
                  name
                  email
                  mrn
                  type
                }
                createdAt
              }
              exceptions {
                id
                reviewStatus
                action
                justification
                scope
                exceptionId
                createdAt
              }
              baseRating
              baseValue
            }
          }
        }
        pageInfo {
          startCursor
          endCursor
          hasNextPage
          hasPreviousPage
        }
        filteredTotalCount
      }
      ... on RequestError {
        message
        code
      }
      ... on NotFoundError {
        message
        code
      }
    }
  }
`;function Tu(e){const t={...i,...e};return r(hr,t)}const Er=n`
  query GetFindingOnAsset(
    $scopeMrn: String!
    $first: Int
    $after: String
    $orderBy: FindingsOrder
    $filter: FindingsFilter
  ) {
    findings(
      scopeMrn: $scopeMrn
      first: $first
      after: $after
      orderBy: $orderBy
      filter: $filter
    ) {
      ... on FindingsConnection {
        edges {
          cursor
          node {
            ... on CveFinding {
              mrn
              id
              asset {
                id
                mrn
                name
                icon
                lastUpdated
                platform {
                  name
                  title
                  arch
                  version
                  kind
                  runtime
                  family
                  labels {
                    key
                    value
                  }
                }
              }
              title
              state
              iconId
              epss {
                probability
                percentile
              }
              cvss {
                id
                value
                type
                vector
                source
                rating
              }
              riskValue
              rating
              baseValue
              baseRating
              riskFactors {
                mrn
                indicator
                title
                affected
                total
                isPositive
              }
              firstDetectedAt
              publishedAt
              tags {
                key
                value
              }
              lastUpdated
              detectionSources {
                name
                url
                firstDetectedAt
                lastUpdatedAt
                fixedAt
                vendor
                version
              }
              exception {
                id
                exceptionId
                reviewStatus
                action
                scope
              }
            }
            ... on AdvisoryFinding {
              mrn
              id
              asset {
                id
                mrn
                name
                icon
                lastUpdated
                platform {
                  name
                  title
                  arch
                  version
                  kind
                  runtime
                  family
                  labels {
                    key
                    value
                  }
                }
              }
              title
              state
              iconId
              epss {
                probability
                percentile
              }
              cvss {
                id
                value
                type
                vector
                source
                rating
              }
              riskValue
              rating
              baseValue
              baseRating
              riskFactors {
                mrn
                indicator
                title
                affected
                total
                isPositive
              }
              firstDetectedAt
              publishedAt
              tags {
                key
                value
              }
              lastUpdated
              detectionSources {
                name
                url
                firstDetectedAt
                lastUpdatedAt
                fixedAt
                vendor
                version
              }
              exception {
                id
                exceptionId
                reviewStatus
                action
                scope
              }
            }
            ... on CheckFinding {
              mrn
              id
              asset {
                id
                mrn
                name
                icon
                lastUpdated
                platform {
                  name
                  title
                  arch
                  version
                  kind
                  runtime
                  family
                  labels {
                    key
                    value
                  }
                }
              }
              title
              state
              iconId
              riskValue
              rating
              baseValue
              baseRating
              riskFactors {
                mrn
                indicator
                title
                affected
                total
                isPositive
              }
              tags {
                key
                value
              }
              lastUpdated
              exception {
                id
                exceptionId
                reviewStatus
                action
                scope
              }
              mquery {
                mrn
                mql
                impact {
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
                docs {
                  ...MqueryDocsFields
                }
              }
              relatedPolicies {
                mrn
                name
                icon
                updatedAt
                lastAppliedAt
                action
                score {
                  riskValue
                  rating
                  blastRadius {
                    indicator
                    assets
                    affected
                    critical
                    high
                    medium
                    low
                    none
                    error
                    pass
                  }
                }
              }
            }
          }
        }
        filteredTotalCount
        pageInfo {
          startCursor
          endCursor
          hasNextPage
          hasPreviousPage
        }
        totalCount
      }
      ... on RequestError {
        message
        code
      }
      ... on NotFoundError {
        message
        code
      }
    }
  }
  ${c}
`;function Fu(e){const t={...i,...e};return r(Er,t)}const Rr=n`
  query GetSoftwareDetails(
    $scopeMrn: String!
    $first: Int
    $after: String
    $orderBy: FindingsOrder
    $filter: FindingsFilter
  ) {
    findings(
      scopeMrn: $scopeMrn
      first: $first
      after: $after
      orderBy: $orderBy
      filter: $filter
    ) {
      ... on FindingsConnection {
        totalCount
        edges {
          cursor
          node {
            ... on PackageFinding {
              id
              mrn
              asset {
                id
                mrn
                name
              }
              title
              packageName
              installedVersion
              availableVersion
              iconId
              firstFound
              lastUpdated
              cvss {
                value
                id
                source
                type
                vector
              }
              epss {
                probability
                percentile
              }
            }
          }
        }
      }
    }
  }
`;function Nu(e){const t={...i,...e};return r(Rr,t)}const Or=n`
  query GetCheckMquery($input: MqueryInput!) {
    mquery(input: $input) {
      mql
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
            code
            message
          }
        }
      }
      mrn
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
      title
      variants {
        id
        mrn
        title
        icon
      }
    }
  }
`;function qu(e){const t={...i,...e};return r(Or,t)}const Tr=n`
  query GetCheckReportAggregateNodeData(
    $entityMrn: String!
    $filter: AggregateScoreFilter
  ) {
    aggregateScores(entityMrn: $entityMrn, filter: $filter) {
      ... on AggregateScoresConnection {
        edges {
          node {
            rating
            riskValue
            cvss {
              id
              value
              type
              vector
              source
              rating
            }
            blastRadius {
              indicator
              assets
              affected
              critical
              high
              medium
              low
              none
              error
              pass
              disabled
              snoozed
            }
          }
        }
      }
    }
  }
`;function Gu(e){const t={...i,...e};return r(Tr,t)}const Fr=n`
  query GetSpaceName($mrn: String!) {
    space(mrn: $mrn) {
      id
      name
    }
  }
`;function wu(e){const t={...i,...e};return r(Fr,t)}const Nr=n`
  mutation CreateWIFAuthBinding($input: CreateWIFAuthBindingInput!) {
    createWIFAuthBinding(input: $input) {
      binding {
        mrn
      }
      config {
        universeDomain
        scopes
        type
        audience
        subjectTokenType
        issuerUri
      }
    }
  }
`;function Lu(e){const t={...i,...e};return s(Nr,t)}const qr=n`
  mutation RemoveWIFAuthBinding($mrn: String!) {
    removeWIFAuthBinding(mrn: $mrn) {
      mrn
    }
  }
`;function Uu(e){const t={...i,...e};return s(qr,t)}const Gr=n`
  query GetWIFAuthBindingConfig($bindingMrn: String!) {
    getWIFAuthBinding(mrn: $bindingMrn) {
      config {
        universeDomain
        scopes
        type
        audience
        subjectTokenType
        issuerUri
      }
    }
  }
`;function Vu(e){const t={...i,...e};return o(Gr,t)}const wr=n`
  query GetWIFAuthBindings($scopeMrn: String!, $orderBy: WIFAuthBindingOrder) {
    listWIFAuthBindings(scopeMrn: $scopeMrn, orderBy: $orderBy) {
      bindings {
        mrn
        name
        description
        expiration
        issuerUri
        createdAt
        lastUsed
        iconId
      }
    }
  }
`;function xu(e){const t={...i,...e};return r(wr,t)}const Lr=n`
  query GetAnnotationSuggestions(
    $scopeMrn: String!
    $key: String
    $query: String
  ) {
    annotationSuggestions(scopeMrn: $scopeMrn, key: $key, query: $query)
  }
`;function Bu(e){const t={...i,...e};return o(Lr,t)}const Ur=n`
  query GetLabelSuggestions($scopeMrn: String!, $key: String, $query: String) {
    labelSuggestions(scopeMrn: $scopeMrn, key: $key, query: $query)
  }
`;function Qu(e){const t={...i,...e};return o(Ur,t)}const Vr=n`
  query GetWorkspaceConditionPossibleValues(
    $input: WorkspaceConditionPossibleValuesInput!
  ) {
    workspaceConditionPossibleValues(input: $input) {
      ... on WorkspaceConditionIntValues {
        suggestions {
          intValue: value
          intDisplayName: displayName
        }
      }
      ... on WorkspaceConditionStringValues {
        suggestions {
          stringValue: value
          stringDisplayName: displayName
        }
      }
      ... on WorkspaceConditionRatingValues {
        suggestions {
          ratingValue: value
          ratingDisplayName: displayName
        }
      }
    }
  }
`;function zu(e){const t={...i,...e};return o(Vr,t)}const xr=n`
  query GetWorkspaceSelections($mrn: String!) {
    workspace(mrn: $mrn) {
      ... on Workspace {
        mrn
        selections {
          ...WorkspaceSelection
        }
      }
    }
  }
  ${d}
`;function Wu(e){const t={...i,...e};return r(xr,t)}const Br=n`
  query GetSpaceSoftware(
    $entityMrn: String!
    $filter: AggregateScoreFilter
    $first: Int
    $after: String
    $orderBy: AggregateScoreOrder
  ) {
    aggregateScores(
      entityMrn: $entityMrn
      filter: $filter
      first: $first
      after: $after
      orderBy: $orderBy
    ) {
      ... on AggregateScoresConnection {
        totalCount
        edges {
          cursor
          node {
            id
            iconId
            state
            effort
            spaceRiskImprovement
            versionDistribution {
              total
              assets
              installations
              distribution {
                version
                count
                riskScoreRating
                riskValue
              }
            }
            entity {
              ... on EntityInfoAsset {
                id
                mrn
                name
              }
              ... on EntityInfoSpace {
                id
                mrn
                name
              }
              ... on EntityInfoWorkspace {
                id
                mrn
                name
              }
            }
            findingMrn
            rank
            rankScore
            baseScore
            riskValue
            scoreType
            riskValue
            rating
            baseScore
            baseValue
            baseRating
            blastRadius {
              ...BlastRadiusFields
            }
            riskFactors {
              mrn
              indicator
              title
              total
              affected
              isPositive
            }
            detectionSources {
              name
              firstDetectedAt
              lastUpdatedAt
              affectedAssets
              vendor
            }
            tags {
              key
              value
            }
            epss {
              percentile
              probability
            }
            cvss {
              value
              id
              value
              type
              vector
              source
              rating
            }
            title
            description
            lastScannedAt
            firstDetectedAt
            remediatedAt
            spaceId
          }
        }
        pageInfo {
          startCursor
          endCursor
          hasNextPage
          hasPreviousPage
        }
      }
      ... on RequestError {
        message
        code
      }
      ... on NotFoundError {
        message
        code
      }
    }
  }
  ${u}
`;function Ku(e){const t={...i,...e};return r(Br,t)}n`
  query GetAggregateScores(
    $entityMrn: String!
    $filter: AggregateScoreFilter
    $first: Int
    $after: String
    $last: Int
    $before: String
    $orderBy: AggregateScoreOrder
  ) {
    aggregateScores(
      entityMrn: $entityMrn
      filter: $filter
      first: $first
      after: $after
      last: $last
      before: $before
      orderBy: $orderBy
    ) {
      ... on AggregateScoresConnection {
        totalCount
        edges {
          cursor
          node {
            id
            iconId
            state
            effort
            manualEffort {
              totalManualEffort
              research
              scripting
              rollout
              verification
            }
            entity {
              ... on EntityInfoAsset {
                id
                mrn
                name
              }
              ... on EntityInfoSpace {
                id
                mrn
                name
              }
              ... on EntityInfoWorkspace {
                id
                mrn
                name
              }
            }
            findingMrn
            rank
            baseScore
            baseValue
            baseRating
            riskValue
            rankScore
            scoreType
            rating
            blastRadius {
              ...BlastRadiusFields
            }
            epss {
              probability
              percentile
            }
            cvss {
              id
              value
              type
              vector
              source
              rating
            }
            riskFactors {
              mrn
              indicator
              title
              total
              affected
              isPositive
            }
            detectionSources {
              name
              firstDetectedAt
              lastUpdatedAt
              affectedAssets
              vendor
            }
            title
            description
            tags {
              key
              value
            }
            lastScannedAt
            firstDetectedAt
            remediatedAt
            spaceId
            spaceRiskImprovement
            cases {
              totalCount
              edges {
                node {
                  status
                  mrn
                  createdAt
                  ticketRefs {
                    type
                  }
                }
              }
            }
            exception {
              id
              reviewStatus
              action
              justification
              scope
              exceptionId
              createdAt
              author {
                name
                mrn
                email
                type
              }
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
      ... on RequestError {
        message
        code
      }
      ... on NotFoundError {
        message
        code
      }
    }
  }
  ${u}
`;n`
  query GetTotalAssets($scopeMrn: String) {
    assets(scopeMrn: $scopeMrn) {
      totalCount
    }
  }
`;n`
  query GetActivePoliciesCount($input: ActivePoliciesInput!) {
    activePolicies(input: $input) {
      totalCount
    }
  }
`;n`
  query GetSpaceRiskFactors($spaceMrn: String!) {
    riskFactors(spaceMrn: $spaceMrn) {
      edges {
        mrn
        title
        indicator
        action
        docs {
          active
          inactive
        }
        magnitude {
          value
          isToxic
        }
        defaultMagnitude {
          value
          isToxic
        }
        assetFieldFilters {
          labelBasedFilters {
            key
            value
          }
          annotationBasedFilters {
            key
            value
          }
        }
      }
    }
  }
`;n`
  query GetSearchResults(
    $input: AssetSearchInput!
    $orderBy: AssetOrder
    $first: Int!
    $after: String
  ) {
    assetSearch(
      input: $input
      first: $first
      after: $after
      orderBy: $orderBy
    ) {
      totalCount
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        startCursor
      }
      edges {
        cursor
        node {
          asset_type
          id
          mrn
          name
          platform {
            arch
            kind
            name
            runtime
            title
            version
          }
          referenceIDs
          score {
            completion
            grade
            id
            message
            type
            value
            weight
          }
          state
          updatedAt
        }
      }
    }
  }
`;n`
  query GetSecurityModel($scopeMrn: String!) {
    securityModel(scopeMrn: $scopeMrn) {
      scopeMrn
      slas {
        findings {
          daysBeforeWarning
          daysToResolve
          rating
          # riskValue is not yet available on FindingsSLA
          # riskValue
        }
      }
    }
  }
`;n`
  query GetWorkspace($mrn: String!, $metricMrns: [String!]) {
    workspace(mrn: $mrn) {
      ... on Workspace {
        mrn
        ownerMrn
        name
        description
        priorityFindings
        assetGroupStats {
          count
          groupType
          displayName
        }
        metrics(metricMrns: $metricMrns) {
          ... on MetricsResponse {
            entries {
              metricMrn
              title
              arrowResult
            }
          }
        }
      }
      ... on RequestError {
        code
        message
      }
      ... on NotFoundError {
        code
        message
      }
    }
  }
`;n`
  query GetWorkspaces(
    $input: WorkspacesInput!
    $after: String
    $first: Int
    $metricMrns: [String!]
  ) {
    workspaces(input: $input, after: $after, first: $first) {
      totalCount
      pageInfo {
        startCursor
        endCursor
        hasNextPage
        hasPreviousPage
      }
      edges {
        cursor
        node {
          mrn
          ownerMrn
          name
          description
          assetGroupStats {
            count
            displayName
            groupType
            icon
            listsAssetTypes {
              assetType
              displayName
              shortName
              aliases
            }
            statistics {
              count
              type {
                assetType
                displayName
                shortName
                aliases
              }
            }
          }
          metrics(metricMrns: $metricMrns) {
            ... on MetricsResponse {
              entries {
                metricMrn
                title
                arrowResult
              }
            }
          }
          priorityFindings
        }
      }
    }
  }
`;n`
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
`;n`
  query ListDiscoveryResults($input: ListDiscoveryResultsInput!) {
    listDiscoveryResults(input: $input) {
      stats {
        identifier
        query
        count
        title
      }
    }
  }
`;n`
  query ListDocuments($scopeMrn: String!, $first: Int!, $after: String) {
    listDocuments(scopeMRN: $scopeMrn, first: $first, after: $after) {
      totalCount
      edges {
        cursor
        node {
          mrn
          name
          type
          format
          status
          statusMessage
          createdBy {
            name
            email
            type
          }
          requestedAt
          generatedAt
        }
      }
      pageInfo {
        startCursor
        endCursor
        hasNextPage
        hasPreviousPage
      }
    }
  }
`;n`
  query ListSpaceExceptions(
    $input: ListExceptionGroupsInput!
    $first: Int
    $after: String
    $last: Int
    $before: String
  ) {
    listExceptionGroups(
      input: $input
      first: $first
      after: $after
      last: $last
      before: $before
    ) {
      totalCount
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        startCursor
      }
      edges {
        cursor
        node {
          action
          author {
            name
            mrn
            email
            type
          }
          createdAt
          deletedAt
          deletedBy {
            email
            name
            type
          }
          exceptions {
            ... on ControlsEdge {
              node {
                framework {
                  name
                  version
                }
                mrn
                description
                title
                manual
                completion
                tags {
                  key
                  value
                }
                state
                assetsStats {
                  compliantAssets
                  failedAssets
                  totalAssets
                }
                checksStats {
                  activeChecks
                  snoozedChecks
                  disabledChecks
                  totalChecks
                }
              }
            }
            ... on SpaceAdvisoryException {
              mrn
              id
              title
              iconId
              riskValue
              rating
              cvss {
                id
                value
                type
                vector
                source
                rating
              }
            }
            ... on SpaceCheckException {
              mrn
              title
              riskValue
              rating
              assetsStats {
                passed
                failed
                errored
                total
              }
              policyMrn
              policyName
            }
            ... on SpaceCveException {
              mrn
              id
              title
              riskValue
              rating
              cvss {
                id
                value
                type
                vector
                source
                rating
              }
            }
            ... on AssetAdvisoryException {
              mrn
              id
              title
              iconId
              riskValue
              rating
              cvss {
                id
                value
                type
                vector
                source
                rating
              }
            }
            ... on AssetCheckException {
              mrn
              title
              riskValue
              rating
              policyMrn
              policyName
            }
            ... on AssetCveException {
              mrn
              id
              title
              riskValue
              rating
              cvss {
                id
                value
                type
                vector
                source
                rating
              }
            }
          }
          id
          exceptionId
          scopeMrn
          title
          justification
          modifiedAt
          validUntil
          reviewStatus
          reviewer {
            email
            name
            type
          }
        }
      }
    }
  }
`;n`
  query LoadAdvisory($id: ID!) {
    advisory(id: $id) {
      mrn
      id
      title
      vulnerabilityRiskFactors {
        ...VulnerabilityRiskFactorsFields
      }
      externalUrls {
        iconIDEnum
        url
        title
      }
      publishedAt
      modifiedAt
      description
      cvssScore {
        id
        value
        type
        vector
        source
        rating
      }
    }
  }
`;n`
  query LoadAdvisoryCves($advisoryId: ID!, $scopeMrn: String) {
    advisory(id: $advisoryId) {
      id
      mrn
      cves(scopeMrn: $scopeMrn) {
        id
        mrn
        riskValue
        rating
        source {
          id
          name
          url
        }
        title
        description
        summary
        publishedAt
        modifiedAt
        url
        cvssScore {
          id
          value
          type
          vector
          source
        }
        epssScore {
          percentile
          probability
        }
        cwe
        state
        vulnerabilityRiskFactors {
          ...VulnerabilityRiskFactorsFields
        }
      }
    }
  }
`;n`
  query LoadAgent($mrn: String!) {
    agent(mrn: $mrn) {
      id
      mrn
      name
      status {
        version
        state
        lastCheckin
      }
      labels {
        key
        value
      }
      platform {
        name
        release
        arch
      }
      hostname
      ipaddress
      createdAt
      errors {
        timestamp
        message
      }
    }
  }
`;n`
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
`;n`
  query LoadAssetListPolicies(
    $mrn: String!
    $first: Int
    $after: String
    $filter: AssetListPoliciesFilter
  ) {
    asset(mrn: $mrn) {
      mrn
      listPolicies(first: $first, after: $after, filter: $filter) {
        totalCount
        edges {
          cursor
          node {
            mrn
            name
            category
            action
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
    }
  }
`;n`
  query LoadCategories($input: CategoriesListInput!) {
    categories(input: $input) {
      name
      packs
      policies
      queries
    }
  }
`;n`
  query LoadCicdProjectJobs(
    $input: CicdProjectJobsInput!
    $first: Int
    $after: String
    $labelFilter: [KeyValueInput!]
  ) {
    cicdProjectJobs(input: $input) {
      ... on CicdProjectJobs {
        id
        spaceMrn
        project {
          id
          mrn
          type
          name
          projectURL
          projectID
        }
        jobs(first: $first, after: $after, labelFilter: $labelFilter) {
          totalCount
          edges {
            cursor
            node {
              ... on GitlabJob {
                id
                mrn
                name
                target
                projectUrl
                projectId
                projectTitle
                pipelineUrl
                jobId
                jobName
                jobURL
                jobStage
                commitSha
                commitDescription
                commitRefName
                mergeRequestId
                mergeRequestProjectUrl
                userName
                userId
                userEmail
                defaultBranch
                score {
                  type
                  id
                  value
                  type
                  completion
                  weight
                  message
                  riskRating
                  riskValue
                }
                pipelineKind
                updatedAt
              }
              ... on GithubJob {
                id
                mrn
                name
                target
                action
                workflow
                job
                runId
                runNumber
                actor
                repository
                eventName
                eventPath
                workspace
                sha
                ref
                headRef
                baseRef
                serverUrl
                score {
                  type
                  id
                  value
                  type
                  completion
                  weight
                  message
                  riskRating
                  riskValue
                }
                pipelineKind
                updatedAt
              }
              ... on CircleCIJob {
                id
                mrn
                name
                target
                projectUrl
                mergeRequestUrl
                job
                jobId
                buildUrl
                userName
                commitSha
                repositoryUrl
                branch
                associatedPullRequests
                workflowId
                workflowJobId
                workflowWorkspaceId
                score {
                  type
                  id
                  value
                  type
                  completion
                  weight
                  message
                  riskRating
                  riskValue
                }
                pipelineKind
                updatedAt
              }
              ... on AzureDevopsJob {
                id
                mrn
                name
                target
                projectUrl
                job
                jobId
                buildUrl
                userName
                commitSha
                repositoryUrl
                branch
                score {
                  type
                  id
                  value
                  type
                  completion
                  weight
                  message
                  riskRating
                  riskValue
                }
                pipelineKind
                updatedAt
              }
              ... on JenkinsJob {
                id
                mrn
                name
                target
                projectUrl
                job
                jobId
                buildUrl
                userName
                commitSha
                repositoryUrl
                branch
                score {
                  type
                  id
                  value
                  type
                  completion
                  weight
                  message
                  riskRating
                  riskValue
                }
                pipelineKind
                updatedAt
              }
              ... on KubernetesJob {
                id
                mrn
                score {
                  type
                  id
                  value
                  type
                  completion
                  weight
                  message
                  riskRating
                  riskValue
                }
                updatedAt
                clusterId
                namespace
                uid
                name
                target
                operation
                kind
                author
                ownerName
                ownerUid
                ownerKind
                resourceVersion
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
      }
    }
  }
`;n`
  query LoadCicdProjects($input: CicdProjectsInput!) {
    cicdProjects(input: $input) {
      ... on CicdProjects {
        spaceMrn
        projects {
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
          pageInfo {
            startCursor
            endCursor
            hasNextPage
            hasPreviousPage
          }
        }
      }
    }
  }
`;n`
  query LoadCve($id: ID!) {
    cve(id: $id) {
      cvssScore {
        id
        source
        type
        value
        vector
        rating
      }
      epssScore {
        percentile
        probability
      }
      cwe
      description
      id
      modifiedAt
      mrn
      publishedAt
      source {
        id
        name
        url
      }
      url
      references
      state
      summary
      title
      vulnerabilityRiskFactors {
        ...VulnerabilityRiskFactorsFields
      }
    }
  }
`;n`
  query LoadEmailPreferences {
    emailPreferences {
      listID
      subscribed
      subscribedAt
    }
  }
`;n`
  query LoadIntegrations($mrn: String!) {
    integrations(mrn: $mrn) {
      mrn
      name
      enabled
      options {
        url
        chatid
        token
        notificationType
      }
    }
  }
`;n`
  query LoadLegalPolicyConsent($mrn: String!) {
    legalPolicies(mrn: $mrn) {
      name
      id
      consent {
        mrn
        email
        signatureAt
      }
    }
  }
`;const Qr=n`
  fragment MqueryDocsFields on MqueryDocs {
    audit
    desc
    references {
      title
      url
    }
    remediations {
      ... on Remediations {
        entries {
          id
          idName
          desc
        }
      }
      ... on AuthenticationRequired {
        message
        code
      }
    }
  }
`;n`
  ${Qr}
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
`;n`
  query LoadOrganizationMembers($mrn: String!) {
    organization(mrn: $mrn) {
      id
      mrn
      members {
        edges {
          cursor
          node {
            user {
              mrn
              email
              name
            }
            roles {
              title
              mrn
            }
          }
        }
      }
    }
  }
`;n`
  query LoadOrganizationSSOProvider($mrn: String!) {
    ssoProvider(mrn: $mrn) {
      provider {
        idpEntityID
        ssoUrl
        rpEntityID
        x509Fingerprints
        enabled
      }
    }
  }
`;n`
  query LoadOrganizationStats(
    $mrn: String!
    $first: Int
    $after: String
    $query: String
    $metricMrns: [String!]
  ) {
    organization(mrn: $mrn) {
      id
      mrn
      name
      spacesCount
      spacesList(first: $first, after: $after, query: $query) {
        totalCount
        edges {
          cursor
          node {
            id
            mrn
            name
            description
            priorityFindings
            assetGroupStats {
              listsAssetTypes {
                assetType
                aliases
                displayName
                shortName
              }
              groupType
              displayName
              icon
              count
              statistics {
                type {
                  assetType
                  aliases
                  displayName
                  shortName
                }
                count
              }
            }
            stats {
              assetGroupStatistics {
                groupType
                count
              }
            }
            metrics(metricMrns: $metricMrns) {
              ... on MetricsResponse {
                entries {
                  metricMrn
                  title
                  arrowResult
                }
              }
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
    }
  }
`;n`
  query LoadPlatforms($input: PlatformsListInput!) {
    platforms(input: $input) {
      id
      name
      version
    }
  }
`;n`
  query LoadPolicy($input: PolicyInput!) {
    policy(input: $input) {
      mrn
      assigned
      action
      access
      authors {
        email
        name
        type
      }
      category
      createdAt
      docs
      featured
      githubUrl
      groups {
        title
        summary
        checks {
          action
          mrn
          impact {
            rating
            value
          }
        }
        queries {
          action
          impact {
            rating
            value
          }
          mrn
        }
        policies {
          action
          impact {
            rating
            value
          }
          mrn
        }
      }
      mutationStatistics {
        checks {
          active
          ignored
          removed
        }
        queries {
          removed
          ignored
          active
        }
      }
      name
      platforms {
        id
        name
        version
      }
      queries {
        mrn
      }
      properties {
        mrn
      }
      runCli {
        command
        installDocsURL
      }
      scoringSystem
      defaultScoringSystem
      statistics {
        checks
        policies
        queries
      }
      summary
      tags {
        key
        value
      }
      trustLevel
      uid
      updatedAt
      variants {
        icon
        id
        title
      }
      version
    }
  }
`;n`
  query LoadRegistrationTokens(
    $spaceMrn: String!
    $orderBy: RegistrationTokenOrder
    $first: Int
    $after: String
  ) {
    registrationTokens(
      spaceMrn: $spaceMrn
      orderBy: $orderBy
      first: $first
      after: $after
    ) {
      edges {
        cursor
        node {
          id
          mrn
          description
          token
          createdBy
          createdAt
          expiresAt
          revoked
          labels {
            key
            value
          }
        }
      }
      totalCount
      pageInfo {
        hasPreviousPage
        hasNextPage
        endCursor
        startCursor
      }
    }
  }
`;n`
  query LoadResourceInvitations(
    $resourceMrn: String
    $inviteeMrn: String
    $first: Int
    $after: String
    $orderBy: InvitationOrder = { direction: ASC, field: CREATED }
  ) {
    invitations(
      resourceMrn: $resourceMrn
      inviteeMrn: $inviteeMrn
      first: $first
      after: $after
      orderBy: $orderBy
    ) {
      edges {
        cursor
        node {
          mrn
          resourceMrn
          senderEmail
          inviteeEmail
          roleMrn
          roleMrns
          expiresAt
          message
          state
        }
      }
      totalCount
      pageInfo {
        startCursor
        endCursor
        hasNextPage
        hasPreviousPage
      }
    }
  }
`;n`
  query LoadServiceAccount($mrn: String!) {
    serviceAccount(mrn: $mrn) {
      id
      mrn
      name
      roles {
        mrn
        title
      }
      createdAt
      lastUsed
    }
  }
`;n`
  query LoadSpaceMembers($mrn: String!) {
    space(mrn: $mrn) {
      id
      mrn
      members {
        edges {
          cursor
          node {
            user {
              mrn
              email
              name
            }
            roles {
              title
              mrn
            }
          }
        }
      }
    }
  }
`;n`
  query LoadSpaceStats($mrn: String!) {
    space(mrn: $mrn) {
      id
      mrn
      stats {
        assetGroupStatistics {
          groupType
          count
          listsAssetTypes {
            assetType
            displayName
            shortName
            aliases
          }
          statistics {
            type {
              assetType
              displayName
              shortName
            }
            count
          }
        }
        integrationsStatistics {
          active
          pending
          errored
          total
          type
        }
      }
    }
  }
`;n`
  query LoadTopMisconfigs($input: SpacePolicySummaryInput!) {
    spacePolicySummary(input: $input) {
      spaceMrn
      querySummaries {
        edges {
          cursor
          node {
            id
            mquery {
              impact {
                rating
                value
              }
              mrn
              parent
              title
              uid
              action
            }
            mqueryState
            mqueryType
          }
        }
        totalCount
      }
    }
  }
`;n`
  query LoadUserInvitations(
    $resourceMrn: String
    $inviteeMrn: String
    $first: Int
    $after: String
    $orderBy: InvitationOrder = { direction: ASC, field: CREATED }
  ) {
    invitations(
      resourceMrn: $resourceMrn
      inviteeMrn: $inviteeMrn
      first: $first
      after: $after
      orderBy: $orderBy
    ) {
      edges {
        cursor
        node {
          mrn
          resourceMrn
          senderEmail
          inviteeEmail
          roleMrn
          expiresAt
          message
          state
        }
      }
    }
  }
`;n`
  query LoadViewer {
    viewer {
      mrn
      email
      name
      state
      organizations {
        id
        mrn
        name
        description
        capabilities
        spacesCount
        subscriptionInfo {
          basePlan {
            name
            id
          }
        }
        members {
          totalCount
        }
        owners: members(
          first: 1
          rolesFilter: "//iam.api.mondoo.app/roles/owner"
        ) {
          totalCount
          edges {
            cursor
            node {
              user {
                mrn
                name
                email
              }
            }
          }
        }
      }
      firstSpace {
        id
        mrn
        name
        description
        priorityFindings
        organization {
          id
          mrn
          name
          description
        }
        settings {
          eolAssetsConfiguration {
            enable
            monthsInAdvance
          }
          garbageCollectAssetsConfiguration {
            enable
            afterDays
          }
          terminatedAssetsConfiguration {
            cleanup
            after
          }
          unusedServiceAccountsConfiguration {
            cleanup
            after
          }
          platformVulnerabilityConfiguration {
            enable
          }
          casesConfiguration {
            autoCreate
            aggregationWindow
          }
          platformMqlVexConfiguration {
            enable
          }
          mvdExperimentalSourcesConfiguration {
            sources {
              id
              name
              enabled
            }
          }
        }
        assetGroupStats {
          listsAssetTypes {
            assetType
            aliases
            displayName
            shortName
          }
          groupType
          displayName
          icon
          count
          statistics {
            type {
              assetType
              aliases
              displayName
              shortName
            }
            count
          }
        }
        stats {
          assetGroupStatistics {
            groupType
            count
          }
        }
      }
    }
    viewerSettings {
      key
      value
    }
  }
`;n`
  query MqueryAssetScores(
    $input: MqueryAssetScoresInput!
    $first: Int!
    $after: String
    $orderBy: AssetOrder
  ) {
    mqueryAssetScores(
      input: $input
      first: $first
      after: $after
      orderBy: $orderBy
    ) {
      title
      description
      totalCount
      scoreDistribution {
        pass
        fail
        error
        unknown
      }
      edges {
        cursor
        node {
          assetMrn
          assetName
          assetPlatform {
            name
            title
            arch
            version
            kind
            runtime
            release
          }
          score {
            id
            value
            type
            completion
            weight
            message
            grade
          }
        }
      }
      pageInfo {
        startCursor
        endCursor
        hasNextPage
        hasPreviousPage
      }
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
      mql
    }
  }
`;n`
  query OrganizationIDSuggestion($input: IDSuggestionInput!) {
    organizationIDSuggestion(input: $input) {
      id
      available
    }
  }
`;n`
  query PingIntegration($input: PingIntegrationInput!) {
    pingIntegration(input: $input) {
      mrn
    }
  }
`;n`
  query QueryPack($input: PolicyInput!) {
    policy(input: $input) {
      # namespace
      uid
      mrn
      name
      version
      summary
      docs
      authors {
        name
        email
        type
      }
      platforms {
        id
        name
        version
      }
      category
      trustLevel
      access
      statistics {
        checks
        queries
        policies
      }
      tags {
        key
        value
      }
      featured
      queries {
        # namespace
        uid
        mrn
        title
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
        action
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
      groups {
        title
        summary
        checks {
          mrn
          impact {
            value
            rating
          }
          action
        }
        queries {
          mrn
          impact {
            value
            rating
          }
          action
        }
        policies {
          mrn
          impact {
            value
            rating
          }
          action
        }
      }
      runCli {
        command
        installDocsURL
      }
      githubUrl
      assigned
      mutationStatistics {
        checks {
          active
          ignored
          removed
        }
        queries {
          active
          ignored
          removed
        }
      }
      updatedAt
      createdAt
      variantPlatformFilters {
        id
        title
        icon
      }
    }
  }
`;n`
  query SearchAggregateScore(
    $query: String!
    $type: SearchType!
    $first: Int!
    $after: String
    $scope: String
    $filters: SearchFilters
  ) {
    search(
      query: $query
      type: $type
      first: $first
      after: $after
      scope: $scope
      filters: $filters
    ) {
      scoreTypeDistribution {
        vulnerability
        advisory
        check
        policy
        risk
        asset
        software
        control
        framework
      }
      edges {
        node {
          ... on AggregateScore {
            nodeId: id
            iconId
            entity {
              ... on EntityInfoAsset {
                id
                mrn
                name
              }
              ... on EntityInfoSpace {
                id
                mrn
                name
              }
            }
            findingMrn
            rank
            baseScore
            riskValue
            rating
            scoreType
            blastRadius {
              indicator
              assets
              affected
              critical
              high
              medium
              low
              none
            }
            riskFactors {
              mrn
              indicator
              title
              affected
              total
              isPositive
            }
            nodeTitle: title
            nodeDescription: description
            tags {
              key
              value
            }
            epss {
              probability
              percentile
            }
            cvss {
              id
              value
              type
              vector
              source
            }
            lastScannedAt
            firstDetectedAt
            remediatedAt
            spaceId
          }
          ... on Advisory {
            id
            iconID
            iconIDEnum
            mrn
            source {
              id
              name
              url
            }
            externalUrls {
              title
              url
              iconIDEnum
            }
            title
            description
            cves {
              id
              mrn
              title
              description
              summary
              published
              modified
              publishedAt
              modifiedAt
              url
              cwe
              state
              exploitable
              references
            }
            score {
              id
              value
              type
              vector
              source
            }
            cvssScore {
              id
              value
              type
              vector
              source
            }
            vendorscore
            affectedPackages {
              id
              iconID
              iconIDEnum
              name
              version
              arch
              format
              namespace
              description
              status
              available
              origin
              vulnDiscoveryTime
              type
            }
            published
            modified
            publishedAt
            modifiedAt
            vulnerabilityRiskFactors {
              knownExploited
              remoteExploitable
            }
          }
          ... on Cve {
            id
            mrn
            cveTitle: title
            description

            publishedAt
            modifiedAt

            cvssScores {
              id
              value
              type
              vector
              source
            }
            cwe
            state
            references
            epssScore {
              probability
              percentile
            }
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
  }
`;n`
  query SearchPolicy($input: ContentSearchInput!) {
    content(input: $input) {
      totalCount
      edges {
        cursor
        node {
          ... on Policy {
            uid
            mrn
            name
            action
            version
            summary
            docs
            authors {
              name
              email
              type
            }
            category
            trustLevel
            access
            statistics {
              checks
              queries
              policies
            }
            featured
            assigned
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
  }
`;n`
  query SearchQueryPack($input: ContentSearchInput!) {
    content(input: $input) {
      totalCount
      edges {
        cursor
        node {
          # ToDo: It should be '... on QueryPack' ?
          ... on Policy {
            uid
            mrn
            name
            version
            summary
            docs
            authors {
              name
              email
              type
            }
            category
            trustLevel
            access
            statistics {
              checks
              queries
              policies
            }
            featured
            assigned
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
  }
`;const zr=n`
  fragment ServiceAccountFields on ServiceAccountConnection {
    totalCount
    edges {
      cursor
      node {
        id
        mrn
        name
        description
        roles {
          mrn
          title
        }
        createdAt
        lastUsed
        labels {
          key
          value
        }
        creator {
          mrn
          email
          service
        }
        notes
      }
    }
    pageInfo {
      startCursor
      endCursor
      hasNextPage
    }
  }
`;n`
  query ServiceAccountForwardPagination(
    $spaceMrn: String
    $scopeMrn: String
    $first: Int
    $after: String
    $query: String
    $queryTerms: [String!]
    $orderBy: ServiceAccountOrder
  ) {
    serviceAccounts(
      spaceMrn: $spaceMrn
      scopeMrn: $scopeMrn
      first: $first
      after: $after
      query: $query
      queryTerms: $queryTerms
      orderBy: $orderBy
    ) {
      ...ServiceAccountFields
    }
  }
  ${zr}
`;n`
  query SpaceIDSuggestion($input: IDSuggestionInput!) {
    spaceIDSuggestion(input: $input) {
      id
      available
    }
  }
`;n`
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
`;n`
  query TestIAMActions($resourceMrn: String!, $actions: [String!]!) {
    testIamActions(resourceMrn: $resourceMrn, actions: $actions)
  }
`;n`
  query TriggerAction($input: TriggerActionInput!) {
    triggerAction(input: $input) {
      mrn
    }
  }
`;const Wr=n`
  fragment RemediationScriptFields on RemediationScript {
    type
    script
    packageManager
    platformName
    platformVersion
  }
`,Kr=n`
  fragment RemediationPackageFields on Package {
    id
    name
    version
    namespace
    ecosystem
    arch
  }
`;n`
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
  ${Wr}
  ${Kr}
`;n`
  query DownloadFramework($input: DownloadFrameworkInput!) {
    downloadFramework(input: $input) {
      ... on FrameworkBundle {
        yaml
      }
    }
  }
`;n`
  query GetTicketingIntegrations($input: TicketingIntegrationsInput!) {
    ticketingIntegrations(input: $input) {
      integrations {
        mrn
        name
        type
        configurationOptions {
          ... on JiraConfigurationOptions {
            host
            email
            defaultProject
            autoCloseTickets
            autoCreateCases
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
        }
      }
    }
  }
`;n`
  query GetAffectedAssets(
    $scopeMrn: String!
    $first: Int
    $after: String
    $last: Int
    $before: String
    $orderBy: FindingsOrder
    $filter: FindingsFilter
  ) {
    findings(
      scopeMrn: $scopeMrn
      first: $first
      after: $after
      last: $last
      before: $before
      orderBy: $orderBy
      filter: $filter
    ) {
      ... on FindingsConnection {
        totalCount
        filteredTotalCount
        edges {
          cursor
          node {
            ... on CheckFinding {
              id
              asset {
                id
                mrn
                name
                icon
                tags {
                  key
                  value
                }
              }
              iconId
              lastUpdated
              mrn
              riskValue
              rating
              riskFactors {
                mrn
                indicator
                title
                affected
                total
                isPositive
              }
              title
              state
              exception {
                id
                exceptionId
                reviewStatus
                action
              }
            }

            ... on CveFinding {
              id
              asset {
                id
                mrn
                name
                icon
                tags {
                  key
                  value
                }
              }
              iconId
              lastUpdated
              mrn
              riskValue
              rating
              riskFactors {
                mrn
                indicator
                title
                affected
                total
                isPositive
              }
              title
              state
              exception {
                id
                exceptionId
                reviewStatus
                action
              }
            }

            ... on AdvisoryFinding {
              id
              asset {
                id
                mrn
                name
                icon
                tags {
                  key
                  value
                }
              }
              iconId
              lastUpdated
              mrn
              riskValue
              rating
              riskFactors {
                mrn
                indicator
                title
                affected
                total
                isPositive
              }
              title
              state
              exception {
                id
                exceptionId
                reviewStatus
                action
              }
            }

            ... on PackageFinding {
              id
              packageName
              asset {
                id
                mrn
                name
                icon
                tags {
                  key
                  value
                }
              }
              rating
              riskValue
              lastUpdated
              tags {
                key
                value
              }
              riskFactors {
                mrn
                indicator
                title
                affected
                total
                isPositive
              }
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
      ... on RequestError {
        message
        code
      }
      ... on NotFoundError {
        message
        code
      }
    }
  }
`;n`
  query GetChecks(
    $scopeMrn: String!
    $first: Int
    $after: String
    $last: Int
    $before: String
    $orderBy: FindingsOrder
    $filter: FindingsFilter
  ) {
    findings(
      scopeMrn: $scopeMrn
      first: $first
      after: $after
      last: $last
      before: $before
      orderBy: $orderBy
      filter: $filter
    ) {
      ... on FindingsConnection {
        totalCount
        filteredTotalCount
        edges {
          cursor
          node {
            ... on CheckFinding {
              id
              mrn
              title
              asset {
                id
              }
              rating
              state
              resultType
              riskValue
              state
              lastUpdated
              tags {
                key
                value
              }
              riskFactors {
                mrn
                indicator
                title
                affected
                total
                isPositive
              }
              exception {
                id
                exceptionId
                scope
                reviewStatus
                action
                justification
                author {
                  name
                  mrn
                  email
                  type
                }
                createdAt
              }
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
      ... on RequestError {
        message
        code
      }
      ... on NotFoundError {
        message
        code
      }
    }
  }
`;n`
  query GetCheckScores(
    $entityMrn: String!
    $first: Int
    $after: String
    $orderBy: CheckScoreOrder
    $filter: CheckScoreFilter
  ) {
    checkScores(
      entityMrn: $entityMrn
      first: $first
      after: $after
      orderBy: $orderBy
      filter: $filter
    ) {
      ... on CheckScoresConnection {
        totalCount
        filteredTotalCount
        edges {
          cursor
          node {
            mrn
            id
            title
            state
            iconId
            baseScore
            riskValue
            queryState
            severity
            resultType
            impactRating
            rating
            riskFactors {
              mrn
              indicator
              title
              affected
              total
              isPositive
            }
            lastUpdated
            tags {
              key
              value
            }
            asset {
              id
              mrn
              name
              icon
            }
            platform {
              name
              title
              arch
              version
              kind
              runtime
              release
            }
            exception {
              id
              exceptionId
              reviewStatus
              action
              justification
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
      ... on RequestError {
        message
        code
      }
      ... on NotFoundError {
        message
        code
      }
    }
  }
`;n`
  query GetCVEs(
    $scopeMrn: String!
    $first: Int
    $after: String
    $last: Int
    $before: String
    $orderBy: FindingsOrder
    $filter: FindingsFilter
  ) {
    findings(
      scopeMrn: $scopeMrn
      first: $first
      after: $after
      last: $last
      before: $before
      orderBy: $orderBy
      filter: $filter
    ) {
      ... on FindingsConnection {
        totalCount
        filteredTotalCount
        edges {
          cursor
          node {
            ... on CveFinding {
              id
              mrn
              title
              asset {
                icon
                name
                id
                mrn
                tags {
                  key
                  value
                }
              }
              rating
              riskValue
              lastUpdated
              publishedAt
              state
              tags {
                key
                value
              }
              riskFactors {
                mrn
                indicator
                title
                affected
                total
                isPositive
              }
              lastUpdated
              exception {
                id
                exceptionId
                scope
                reviewStatus
                justification
                action
                author {
                  name
                  email
                  type
                }
                createdAt
              }
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
      ... on RequestError {
        message
        code
      }
      ... on NotFoundError {
        message
        code
      }
    }
  }
`;export{vs as $,Xr as A,Us as B,Ga as C,Ea as D,ga as E,de as F,ba as G,qa as H,ye as I,To as J,$e as K,vr as L,fo as M,Ge as N,Pe as O,Me as P,_e as Q,Ye as R,Te as S,je as T,Qe as U,Ze as V,Xe as W,We as X,Je as Y,Ke as Z,He as _,no as a,ca as a$,Vi as a0,zu as a1,Qu as a2,Bu as a3,hu as a4,ys as a5,ho as a6,se as a7,ws as a8,ie as a9,Ws as aA,ru as aB,Ee as aC,Fo as aD,Qo as aE,B as aF,jo as aG,mu as aH,jn as aI,Fn as aJ,ei as aK,Ji as aL,Jr as aM,cs as aN,Oa as aO,Bo as aP,Ra as aQ,Se as aR,_ as aS,V as aT,et as aU,Vo as aV,xe as aW,R as aX,qn as aY,di as aZ,Yn as a_,Qi as aa,N as ab,wo as ac,Bs as ad,Gn as ae,Oo as af,O as ag,As as ah,T as ai,yo as aj,vu as ak,m as al,ue as am,gu as an,Re as ao,ce as ap,ns as aq,ps as ar,ds as as,bs as at,zi as au,U as av,xa as aw,oe as ax,Uo as ay,le as az,ao as b,Wu as b$,pe as b0,Ae as b1,Qa as b2,is as b3,F as b4,Hs as b5,Ta as b6,Wa as b7,ne as b8,oa as b9,ss as bA,ro as bB,Ps as bC,Ms as bD,On as bE,$a as bF,Be as bG,Sa as bH,va as bI,nu as bJ,ra as bK,z as bL,X as bM,Ha as bN,cu as bO,Mu as bP,Du as bQ,es as bR,$ as bS,ts as bT,Rs as bU,k as bV,Ve as bW,Do as bX,Ku as bY,po as bZ,wi as b_,aa as ba,vo as bb,_a as bc,qo as bd,Go as be,ua as bf,Pa as bg,Fu as bh,Za as bi,za as bj,Er as bk,ka as bl,Tu as bm,he as bn,Aa as bo,Hr as bp,_r as bq,Ki as br,Nn as bs,ri as bt,E as bu,Eo as bv,b as bw,h as bx,bo as by,Co as bz,Es as c,Si as c$,Fs as c0,Gs as c1,Lo as c2,G as c3,H as c4,w as c5,So as c6,ms as c7,mr as c8,du as c9,as as cA,ma as cB,tu as cC,Zr as cD,rr as cE,Ue as cF,bu as cG,Os as cH,oo as cI,ti as cJ,Ou as cK,I as cL,ls as cM,xi as cN,vi as cO,Pu as cP,Ce as cQ,Yr as cR,$s as cS,$u as cT,yr as cU,Wi as cV,Ei as cW,x as cX,Ma as cY,uo as cZ,hi as c_,os as ca,js as cb,Qs as cc,zs as cd,Zs as ce,to as cf,yu as cg,ou as ch,ar as ci,fr as cj,pu as ck,be as cl,_s as cm,dr as cn,Ro as co,A as cp,Xs as cq,Cs as cr,Ln as cs,fs as ct,au as cu,qs as cv,eo as cw,ur as cx,Eu as cy,us as cz,co as d,ee as d$,fe as d0,ge as d1,Fi as d2,ze as d3,eu as d4,Ys as d5,ir as d6,Ie as d7,Is as d8,la as d9,ha as dA,Ja as dB,Ya as dC,ks as dD,er as dE,Xi as dF,lu as dG,we as dH,pr as dI,fa as dJ,Ns as dK,De as dL,ya as dM,W as dN,Wo as dO,P as dP,Io as dQ,Ls as dR,Ao as dS,rs as dT,$i as dU,mo as dV,hs as dW,Y as dX,Z as dY,pa as dZ,ke as d_,La as da,xs as db,Vu as dc,L as dd,xu as de,Uu as df,wr as dg,Lu as dh,Ss as di,Ka as dj,D as dk,io as dl,ve as dm,Ua as dn,Ho as dp,ku as dq,Iu as dr,Le as ds,_o as dt,M as du,go as dv,sa as dw,Vs as dx,Oi as dy,Oe as dz,Ts as e,K as e0,ui as e1,ia as e2,li as e3,ea as e4,te as e5,J as e6,j as e7,ta as e8,na as e9,Au as eA,gs as eB,Da as eC,Ru as eD,wu as eE,Fa as eF,qu as eG,Gu as eH,Jo as ea,Yo as eb,si as ec,Zo as ed,oi as ee,Xo as ef,Ia as eg,Cu as eh,ko as ei,q as ej,Q as ek,Po as el,so as em,Jn as en,Va as eo,re as ep,Ds as eq,Ks as er,xo as es,Hn as et,Nu as eu,Ca as ev,lo as ew,Xa as ex,Js as ey,ae as ez,v as f,or as g,Ne as h,Fe as i,zo as j,Ko as k,qe as l,me as m,No as n,Mo as o,ja as p,$o as q,iu as r,su as s,fu as t,Su as u,da as v,Na as w,wa as x,uu as y,Ba as z};
//# sourceMappingURL=operations.BJu_C5Bf.js.map
