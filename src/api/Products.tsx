import { gql } from "@apollo/client";

export const GET_PRODUCTS = gql`
  query ListProductDetails(
    $filter: TableProductDetailsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProductDetails(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        category
        count
        description
        image
        price
        rating
        title
      }
      nextToken
    }
  }
`;
