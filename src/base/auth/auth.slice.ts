import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AccountBaseModel } from "features/accounts/account.model";

export type AuthReducerModel = {
  isLogin: boolean;
  isLoad: boolean;
  account: AccountBaseModel | null;
  isError: boolean;
};

const initialState: AuthReducerModel = {
  isLogin: false,
  isLoad: false,
  account: null,
  isError: false,
};
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loadCurrentUserAction: (state) => {},
    loadCurrentUserSuccessAction: (
      state,
      action: PayloadAction<AccountBaseModel>
    ) => {
      console.log("action", action);
      console.log("action", action);
      state.account = action.payload;
      state.isLogin = true;
    },
    clearOidcAction: (state) => {
      state = initialState;
    },
    loginSuccessAction: (state) => {},
    logoutSuccessAction: (state) => {},
    unauthorizedAction: (state) => {},
    unauthorizedSuccessAction: (state) => {},
  },
});

export const {
  loadCurrentUserAction,
  loadCurrentUserSuccessAction,
  clearOidcAction,
  loginSuccessAction,
  logoutSuccessAction,
  unauthorizedAction,
  unauthorizedSuccessAction,
} = authSlice.actions;

const authReducer = authSlice.reducer;

export default authReducer;
