/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateProductDetailsInput = {
  id: number,
  category?: string | null,
  count?: number | null,
  description?: string | null,
  image?: string | null,
  price?: number | null,
  rating?: number | null,
  title?: string | null,
};

export type ProductDetails = {
  __typename: "ProductDetails",
  id: number,
  category?: string | null,
  count?: number | null,
  description?: string | null,
  image?: string | null,
  price?: number | null,
  rating?: number | null,
  title?: string | null,
};

export type UpdateProductDetailsInput = {
  id: number,
  category?: string | null,
  count?: number | null,
  description?: string | null,
  image?: string | null,
  price?: number | null,
  rating?: number | null,
  title?: string | null,
};

export type DeleteProductDetailsInput = {
  id: number,
};

export type TableProductDetailsFilterInput = {
  id?: TableIntFilterInput | null,
  category?: TableStringFilterInput | null,
  count?: TableIntFilterInput | null,
  description?: TableStringFilterInput | null,
  image?: TableStringFilterInput | null,
  price?: TableFloatFilterInput | null,
  rating?: TableFloatFilterInput | null,
  title?: TableStringFilterInput | null,
};

export type TableIntFilterInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  contains?: number | null,
  notContains?: number | null,
  between?: Array< number | null > | null,
};

export type TableStringFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type TableFloatFilterInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  contains?: number | null,
  notContains?: number | null,
  between?: Array< number | null > | null,
};

export type ProductDetailsConnection = {
  __typename: "ProductDetailsConnection",
  items?:  Array<ProductDetails | null > | null,
  nextToken?: string | null,
};

export type CreateProductDetailsMutationVariables = {
  input: CreateProductDetailsInput,
};

export type CreateProductDetailsMutation = {
  createProductDetails?:  {
    __typename: "ProductDetails",
    id: number,
    category?: string | null,
    count?: number | null,
    description?: string | null,
    image?: string | null,
    price?: number | null,
    rating?: number | null,
    title?: string | null,
  } | null,
};

export type UpdateProductDetailsMutationVariables = {
  input: UpdateProductDetailsInput,
};

export type UpdateProductDetailsMutation = {
  updateProductDetails?:  {
    __typename: "ProductDetails",
    id: number,
    category?: string | null,
    count?: number | null,
    description?: string | null,
    image?: string | null,
    price?: number | null,
    rating?: number | null,
    title?: string | null,
  } | null,
};

export type DeleteProductDetailsMutationVariables = {
  input: DeleteProductDetailsInput,
};

export type DeleteProductDetailsMutation = {
  deleteProductDetails?:  {
    __typename: "ProductDetails",
    id: number,
    category?: string | null,
    count?: number | null,
    description?: string | null,
    image?: string | null,
    price?: number | null,
    rating?: number | null,
    title?: string | null,
  } | null,
};

export type GetProductDetailsQueryVariables = {
  id: number,
};

export type GetProductDetailsQuery = {
  getProductDetails?:  {
    __typename: "ProductDetails",
    id: number,
    category?: string | null,
    count?: number | null,
    description?: string | null,
    image?: string | null,
    price?: number | null,
    rating?: number | null,
    title?: string | null,
  } | null,
};

export type ListProductDetailsQueryVariables = {
  filter?: TableProductDetailsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProductDetailsQuery = {
  listProductDetails?:  {
    __typename: "ProductDetailsConnection",
    items?:  Array< {
      __typename: "ProductDetails",
      id: number,
      category?: string | null,
      count?: number | null,
      description?: string | null,
      image?: string | null,
      price?: number | null,
      rating?: number | null,
      title?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreateProductDetailsSubscriptionVariables = {
  id?: number | null,
  category?: string | null,
  count?: number | null,
  description?: string | null,
  image?: string | null,
};

export type OnCreateProductDetailsSubscription = {
  onCreateProductDetails?:  {
    __typename: "ProductDetails",
    id: number,
    category?: string | null,
    count?: number | null,
    description?: string | null,
    image?: string | null,
    price?: number | null,
    rating?: number | null,
    title?: string | null,
  } | null,
};

export type OnUpdateProductDetailsSubscriptionVariables = {
  id?: number | null,
  category?: string | null,
  count?: number | null,
  description?: string | null,
  image?: string | null,
};

export type OnUpdateProductDetailsSubscription = {
  onUpdateProductDetails?:  {
    __typename: "ProductDetails",
    id: number,
    category?: string | null,
    count?: number | null,
    description?: string | null,
    image?: string | null,
    price?: number | null,
    rating?: number | null,
    title?: string | null,
  } | null,
};

export type OnDeleteProductDetailsSubscriptionVariables = {
  id?: number | null,
  category?: string | null,
  count?: number | null,
  description?: string | null,
  image?: string | null,
};

export type OnDeleteProductDetailsSubscription = {
  onDeleteProductDetails?:  {
    __typename: "ProductDetails",
    id: number,
    category?: string | null,
    count?: number | null,
    description?: string | null,
    image?: string | null,
    price?: number | null,
    rating?: number | null,
    title?: string | null,
  } | null,
};
