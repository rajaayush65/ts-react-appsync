import { ProductActionTypes } from "../constants/product-action-types";
import { PayloadAction } from "@reduxjs/toolkit";

interface Product {
  id: number;
  category: string;
  count: number;
  description: string;
  image: string;
  price: number;
  rating: number;
  title: string;
  __typename: string;
}

interface ProductState {
  products: Product[];
  loading: boolean;
  error: string | null;
}

const initialState = {
  products: [],
  loading: true,
  error: null,
} as ProductState;

export const getProductsReducer = (
  state = initialState,
  action: PayloadAction<Product[]>
) => {
  switch (action.type) {
    case ProductActionTypes.PRODUCT_LIST_REQUEST:
      return { ...state, loading: true };
    case ProductActionTypes.PRODUCT_LIST_SUCCESS:
      return { ...state, products: action.payload, loading: false };
    case ProductActionTypes.PRODUCT_LIST_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
