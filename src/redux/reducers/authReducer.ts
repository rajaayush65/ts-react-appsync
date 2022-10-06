import { PayloadAction } from "@reduxjs/toolkit";
import { AuthActionTypes } from "../constants/auth-action-types";

interface AuthState {
  isAuthenticated: boolean;
}

const initialState = {
  isAuthenticated: false,
} as AuthState;

export const authReducer = (
  state = initialState,
  action: PayloadAction<number>
) => {
  switch (action.type) {
    case AuthActionTypes.LOGIN:
      return { ...state, isAuthenticated: true };
    case AuthActionTypes.LOGOUT:
      return { ...state, isAuthenticated: false };
    default:
      return state;
  }
};
