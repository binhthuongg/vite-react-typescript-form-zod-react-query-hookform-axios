import { createSlice } from "@reduxjs/toolkit";

export interface LoadingReducerModel {
  isVisible: boolean;
}

const initialState: LoadingReducerModel = {
  isVisible: false,
};

export const loadingSlice = createSlice({
  name: "loading",
  initialState,
  reducers: {
    showLoading: (state) => {
      state.isVisible = true;
    },
    hideLoading: (state) => {
      state.isVisible = false;
    },
  },
});

export const { showLoading, hideLoading } = loadingSlice.actions;

const loadingReducer = loadingSlice.reducer;

export default loadingReducer;
