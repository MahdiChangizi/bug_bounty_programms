import { gql } from "@apollo/client";

export const GET_TICKETING_INTEGRATIONS = gql`
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
`;
