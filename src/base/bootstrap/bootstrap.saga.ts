import { put, takeLatest } from "@redux-saga/core/effects";
import { showError } from "utils/ToastUtils";
import { getBootstrapSuccessAction } from "./bootstrap.slice";
import bootstrapFile from "configs/global-enums/bootstrap.json";

function* getBootstrapSaga() {
  try {
    yield put(getBootstrapSuccessAction(bootstrapFile));
  } catch (error) {
    showError("Lỗi đọc dữ liệu bootstrap");
  }
}

export function* bootstrapSaga() {
  yield takeLatest("bootstrap/getBootstrapAction", getBootstrapSaga);
}
