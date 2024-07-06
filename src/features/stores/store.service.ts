import BaseAxios from "base/base.axios";
import BaseResponse, { PageResponse } from "base/base.model";
import { ApiConfig } from "configs/api.config";
import { StoreResponse } from "./store.model";

export const getListStore = (): Promise<BaseResponse<Array<StoreResponse>>> => {
  let link = `${ApiConfig.CORE}/stores/public?simple=true&status=active&saleable=true&limit=1000`;
  return BaseAxios.get(link);
};

export const getListStoreUnsaleable = (): Promise<
  BaseResponse<Array<StoreResponse>>
> => {
  let link = `${ApiConfig.CORE}/stores/public?simple=true&status=active&limit=1000`;
  return BaseAxios.get(link);
};

export const getStorePublicService = (): Promise<
  BaseResponse<Array<StoreResponse>>
> => {
  let link = `${ApiConfig.CORE}/stores/public?limit=1000`;
  return BaseAxios.get(link);
};

export const getStorePublicServiceForInventory = (): Promise<
  BaseResponse<Array<StoreResponse>>
> => {
  let link = `${ApiConfig.CORE}/stores/public?status=active&limit=1000`;
  return BaseAxios.get(link);
};

export const getStoreNotSaleablePublicService = (): Promise<
  BaseResponse<Array<StoreResponse>>
> => {
  let link = `${ApiConfig.CORE}/stores/public?status=active&limit=1000`;
  return BaseAxios.get(link);
};

export const getSearchListStore = (
  name: string
): Promise<BaseResponse<Array<StoreResponse>>> => {
  if (!name) name = "";
  let link = `${ApiConfig.CORE}/stores?name=${name}&simple=true&status=active&saleable=true`;
  return BaseAxios.get(link);
};

export const getStoreDetail = (
  storeId: number
): Promise<BaseResponse<StoreResponse>> => {
  let link = `${ApiConfig.CORE}/stores/${storeId}`;
  return BaseAxios.get(link);
};

export const getAllPublicSimpleStoreApi = (): Promise<
  BaseResponse<Array<StoreResponse>>
> => {
  let link = `${ApiConfig.CORE}/stores/public?simple=true&limit=1000`;
  return BaseAxios.get(link);
};

export const getListStoreSimple = (): Promise<
  BaseResponse<Array<StoreResponse>>
> => {
  let link = `${ApiConfig.CORE}/stores/public`;
  return BaseAxios.get(link);
};

export const getStoreSearchIdsApi = (
  ids: number[]
): Promise<BaseResponse<PageResponse<StoreResponse>>> => {
  let link = `${ApiConfig.CORE}/stores?ids=${ids}&limit=1000`;
  return BaseAxios.get(link);
};

export const getAllStore = (): Promise<BaseResponse<Array<StoreResponse>>> => {
  let link = `${ApiConfig.CORE}/stores/public?simple=true&status=active&limit=1000`;
  return BaseAxios.get(link);
};

export const getSuggestStoreInventory = (
  body: any
): Promise<BaseResponse<Array<any>>> => {
  let link = `${ApiConfig.INVENTORY}/inventories/suggestion`;
  return BaseAxios.post(link, body);
};
