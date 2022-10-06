/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateProductDetails = /* GraphQL */ `
  subscription OnCreateProductDetails(
    $id: Int
    $category: String
    $count: Int
    $description: String
    $image: String
  ) {
    onCreateProductDetails(
      id: $id
      category: $category
      count: $count
      description: $description
      image: $image
    ) {
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
export const onUpdateProductDetails = /* GraphQL */ `
  subscription OnUpdateProductDetails(
    $id: Int
    $category: String
    $count: Int
    $description: String
    $image: String
  ) {
    onUpdateProductDetails(
      id: $id
      category: $category
      count: $count
      description: $description
      image: $image
    ) {
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
export const onDeleteProductDetails = /* GraphQL */ `
  subscription OnDeleteProductDetails(
    $id: Int
    $category: String
    $count: Int
    $description: String
    $image: String
  ) {
    onDeleteProductDetails(
      id: $id
      category: $category
      count: $count
      description: $description
      image: $image
    ) {
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
