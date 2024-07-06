import { AuthReducerModel } from "base/auth/auth.slice";
import { BootstrapReducerModel } from "base/bootstrap/bootstrap.model";
import { AppSettingReducerModel } from "features/app-settings/app-settings.slice";
import { LoadingReducerModel } from "features/loading/loading.slice";

export interface RootReducerModel {
  authReducer: AuthReducerModel;
  loadingReducer: LoadingReducerModel;
  bootstrapReducer: BootstrapReducerModel;
  appSettingsReducer: AppSettingReducerModel;
  profile: any;
}
