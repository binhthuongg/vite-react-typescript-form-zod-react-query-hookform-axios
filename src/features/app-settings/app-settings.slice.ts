import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface AppSettingReducerModel {
  collapse?: boolean;
}

const initialState: AppSettingReducerModel = {
  collapse: false,
};

export const appSettingsSlice = createSlice({
  name: "appSettings",
  initialState,
  reducers: {
    loadSettingAppAction: (state) => {},
    loadSettingAppResultAction: (state, action) => {},
    saveSettingAction: (
      state,
      action: PayloadAction<{
        collapse: boolean;
      }>
    ) => {
      state.collapse = action.payload.collapse;
    },
    fetchApiErrorAction: (state, action) => {},
  },
});

export const {
  loadSettingAppAction,
  loadSettingAppResultAction,
  saveSettingAction,
  fetchApiErrorAction,
} = appSettingsSlice.actions;

const appSettingsReducer = appSettingsSlice.reducer;

export default appSettingsReducer;
