import { call, put, takeLatest } from "@redux-saga/core/effects";
import { unauthorizedAction } from "base/auth/auth.slice";
import { YodyAction } from "base/base.action";
import { HttpStatus } from "configs/http-status.config";
import { isUndefinedOrNull } from "utils/AppUtils";
import { getSettingApp } from "utils/LocalStorageUtils";
import { showError } from "utils/ToastUtils";
import {
  AppSettingReducerModel,
  loadSettingAppResultAction,
} from "./app-settings.slice";

function* loadSettingAppSaga() {
  let appSetting: string = yield call(getSettingApp);
  let appSettingObj: AppSettingReducerModel = JSON.parse(appSetting);
  if (!isUndefinedOrNull(appSettingObj)) {
    yield put(loadSettingAppResultAction(appSettingObj));
  }
}

function* fetchApiErrorSaga(action: YodyAction) {
  let { textApiInformation, response } = action.payload;
  switch (response.code) {
    case HttpStatus.UNAUTHORIZED:
      yield put(unauthorizedAction());
      break;
    default:
      if (response?.message) {
        showError(`${textApiInformation}: ${response?.message}`);
      }
      if (response?.errors && response?.errors.length > 0) {
        response?.errors?.forEach((e: any) => showError(e));
      }
      break;
  }
}

export function* appSaga() {
  // yield takeLatest(AppType.LOAD_USER_FROM_STORAGE, loadUserFromStorageSaga);
  // yield takeLatest(AppType.LOAD_SETTING_APP, loadSettingAppSaga);
  // yield takeLatest(OtherType.FETCH_API_ERROR, fetchApiErrorSaga);
  yield takeLatest("appSettings/loadSettingAppAction", loadSettingAppSaga);
  yield takeLatest("appSettings/fetchApiErrorAction", fetchApiErrorSaga);
}
