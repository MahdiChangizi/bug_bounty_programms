import { gql } from "@apollo/client";

export const LOAD_CATEGORIES = gql`
  query LoadCategories($input: CategoriesListInput!) {
    categories(input: $input) {
      name
      packs
      policies
      queries
    }
  }
`;
