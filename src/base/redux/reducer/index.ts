import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "base/auth/auth.slice";
import bootstrapReducer from "base/bootstrap/bootstrap.slice";
import appSettingsReducer from "features/app-settings/app-settings.slice";
import loadingReducer from "features/loading/loading.slice";

const rootReducer = combineReducers({
  authReducer,
  bootstrapReducer,
  loadingReducer,
  appSettingsReducer,
});

export default rootReducer;
