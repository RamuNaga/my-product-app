import { gql } from 'apollo-angular';
export const SEARCH_COMPANIES_QUERY = gql`
  query SearchCompanies($searchTerm: String!) {
    searchCompanies(searchTerm: $searchTerm) {
      id
      name
      type
      contact
    }
  }
`;
