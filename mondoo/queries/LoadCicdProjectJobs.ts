import { gql } from "@apollo/client";

export const LOAD_CICD_PROJECT_JOBS = gql`
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
`;
