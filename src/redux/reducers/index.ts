import { combineReducers } from "@reduxjs/toolkit";
import { authReducer } from "./authReducer";
import { getProductsReducer } from "./productReducer";

const reducers = combineReducers({
  auth: authReducer,
  products: getProductsReducer,
});

export default reducers;
