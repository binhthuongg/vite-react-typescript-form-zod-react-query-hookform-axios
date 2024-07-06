import { createSlice } from "@reduxjs/toolkit";
import { BootstrapReducerModel } from "./bootstrap.model";

const initialState: BootstrapReducerModel = {
  isLoad: false,
  data: null,
};
export const bootstrapSlice = createSlice({
  name: "bootstrap",
  initialState,
  reducers: {
    getBootstrapAction: (state) => {},
    getBootstrapSuccessAction: (state, action) => {
      state.data = action.payload.data;
      state.isLoad = true;
    },
  },
});

export const { getBootstrapAction, getBootstrapSuccessAction } =
  bootstrapSlice.actions;

const bootstrapReducer = bootstrapSlice.reducer;

export default bootstrapReducer;
