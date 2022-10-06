/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getProductDetails = /* GraphQL */ `
  query GetProductDetails($id: Int!) {
    getProductDetails(id: $id) {
      id
      category
      count
      description
      image
      price
      rating
      title
    }
  }
`;
export const listProductDetails = /* GraphQL */ `
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
