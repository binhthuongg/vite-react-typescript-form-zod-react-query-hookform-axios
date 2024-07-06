import { AuthenLogoutRequest, AuthenRequest } from "base/auth/roles.model";
import BaseAxios, {
  axiosClientFullResponseV2,
  axiosClientV2GetOnlyData,
} from "base/base.axios";
import BaseResponse, { HTTPResponse, PageResponse } from "base/base.model";
import { ApiConfig } from "configs/api.config";
import { getListStore } from "features/stores/store.service";
import { generateQuery } from "utils/AppUtils";
import {
  AccountBaseModel,
  AccountPublicSearchQueryModel,
  AccountRequest,
  AccountResponse,
  AccountSearchQuery,
  LoginResponse,
  MeRequest,
  PublicAccountResponseModel,
} from "./account.model";
export const getAccountDetail = (): Promise<BaseResponse<AccountResponse>> => {
  return BaseAxios.get(`${ApiConfig.ACCOUNTS}/me`);
};

export const loginApi = (
  request: AuthenRequest
): Promise<BaseResponse<LoginResponse>> => {
  return BaseAxios.post(`${ApiConfig.ACCOUNTS}/login`, request);
};

export const logoutApi = (
  request: AuthenLogoutRequest
): Promise<BaseResponse<any>> => {
  return BaseAxios.post(`${ApiConfig.ACCOUNTS}/logout`, request);
};

export const searchAccountApi = (
  query: AccountSearchQuery
): Promise<BaseResponse<PageResponse<AccountResponse>>> => {
  let params = generateQuery(query);
  return BaseAxios.get(`${ApiConfig.ACCOUNTS}/accounts?${params}`);
};

export const searchAccountPublicApi = (
  query?: AccountPublicSearchQueryModel
): Promise<any> => {
  let params = generateQuery(query);
  return axiosClientFullResponseV2.get(`/admin/users.json?${params}`);
};

export const searchAccountAllPublicApi = (): Promise<
  BaseResponse<PageResponse<AccountResponse>>
> => {
  return BaseAxios.get(`${ApiConfig.ACCOUNTS}/accounts/public/list`);
};

export const AccountCreateService = (
  request: AccountRequest
): Promise<BaseResponse<AccountResponse>> => {
  return BaseAxios.post(`${ApiConfig.ACCOUNTS}/accounts`, request);
};

export const AccountUpdateService = (
  id: number,
  request: AccountRequest
): Promise<BaseResponse<AccountResponse>> => {
  return BaseAxios.put(`${ApiConfig.ACCOUNTS}/accounts/${id}`, request);
};

export const updateMeService = (
  request: MeRequest
): Promise<BaseResponse<AccountResponse>> => {
  return BaseAxios.put(`${ApiConfig.ACCOUNTS}/user/profile`, request);
};

export const AccountGetByIdService = (
  code: string
): Promise<BaseResponse<AccountResponse>> => {
  return BaseAxios.get(`${ApiConfig.ACCOUNTS}/accounts/code/${code}`);
};

export const AccountDeleteService = (
  id: number
): Promise<BaseResponse<AccountResponse>> => {
  return BaseAxios.delete(`${ApiConfig.ACCOUNTS}/accounts/${id}`);
};
export const AccountManyDeleteService = (
  ids: number[]
): Promise<BaseResponse<AccountResponse>> => {
  return BaseAxios.delete(`${ApiConfig.ACCOUNTS}/accounts/${ids}`);
};

export const searchShipperApi = (): Promise<
  BaseResponse<PageResponse<AccountResponse>>
> => {
  return BaseAxios.get(`${ApiConfig.ACCOUNTS}/accounts?is_shipper=1`);
};

export const externalShipperApi = (): Promise<
  BaseResponse<PageResponse<any>>
> => {
  return BaseAxios.get(`${ApiConfig.ORDER}/delivery-partners`);
};

export const accountUpdatePassScreenService = (
  request: AccountRequest
): Promise<BaseResponse<AccountResponse>> => {
  return BaseAxios.put(`${ApiConfig.ACCOUNTS}/user/update-password`, request);
};

export const resetPasswordApi = (
  accountIds: number[]
): Promise<BaseResponse<AccountResponse>> => {
  return BaseAxios.put(`${ApiConfig.ACCOUNTS}/accounts/reset-passwords`, {
    ids: accountIds,
  });
};

const isAccount = (account: any): account is AccountBaseModel => {
  return account.login;
};

console.log("process.env account 13", process.env);
export const getCurrentUserService = async (): Promise<AccountBaseModel> => {
  const response = await axiosClientFullResponseV2.get(`/admin/account.json`);
  console.log("response", response);
  console.log("response.headers", response.headers);
  console.log("response.headers", response.headers["set-cookie"]);
  const account = response.data;
  if (!isAccount(account)) {
    throw new Error("Invalid account");
  }

  account.full_name = account.last_name + " " + account.first_name;
  account.code = account.login;

  const stores = account.account_stores;
  if (stores && Array.isArray(stores) && stores.length > 0) {
    const storeIds: number[] = [];
    stores.forEach((store) => {
      if (store.store_id) {
        storeIds.push(store.store_id);
      }
    });

    const storeRes = await getListStore();
    const accountStores = storeRes.data;
    if (Array.isArray(accountStores) && accountStores.length > 0) {
      account.account_stores = storeIds.map((storeId) => {
        const storeName = accountStores.find(
          (store) => store.id === storeId
        )?.name;
        return {
          store_id: storeId,
          store_name: storeName,
        };
      });
    }
  }

  return account;
};

export const logoutService = (): Promise<
  HTTPResponse<{ logout_url: string }>
> => {
  return axiosClientFullResponseV2.post(`/admin/logout.json`);
};

export const searchPublicAccountService = (
  query?: AccountPublicSearchQueryModel
): Promise<PublicAccountResponseModel[]> => {
  let params = generateQuery(query);
  return axiosClientV2GetOnlyData.get(`/admin/users.json?${params}`);
};

export const getAccountByCodeService = (code: string): Promise<any> => {
  return axiosClientFullResponseV2.get(`/admin/core/users/${code}.json`);
};
