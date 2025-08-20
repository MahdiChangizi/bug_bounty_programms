import { gql } from "@apollo/client";
import { ASSET_FIELDS } from "../fragments/AssetFields";

export const ASSET_FORWARD_PAGINATION = gql`
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
  ${ASSET_FIELDS}
`;
