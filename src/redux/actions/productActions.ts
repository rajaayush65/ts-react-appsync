import { AppThunk } from "../../helpers/redux-helpers";

import { ProductActionTypes } from "../constants/product-action-types";
import { GET_PRODUCTS } from "../../api/Products";
import { useLazyQuery } from "@apollo/client";

export const getProducts = (): AppThunk => async (dispatch) => {
  try {
    dispatch({ type: ProductActionTypes.PRODUCT_LIST_REQUEST });
    const [loadOptions,{ loading, error, data }] = useLazyQuery(GET_PRODUCTS);
    console.log(loadOptions)
    while (loading) {
      if (data) {
        dispatch({
          type: ProductActionTypes.PRODUCT_LIST_SUCCESS,
          payload: data.listProductDetails.items,
        });
      } else if (error) {
        throw error;
      }
    }
  } catch (error) {
    dispatch({
      type: ProductActionTypes.PRODUCT_LIST_FAIL,
      payload: error,
    });
  }
};
