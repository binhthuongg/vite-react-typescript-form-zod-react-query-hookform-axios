import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { AppConfig } from "../configs/app.config";
import { HttpStatus } from "../configs/http-status.config";

const errorHandler = (error: any) => {
  switch (error.response?.status) {
    case 401:
      handleUnauthorized(error);
      break;
    case 403:
      handleUnauthorized(error);
      break;
    default:
      // handleErrorDefault(error);
      break;
  }
};

const handleOldError = (response: AxiosResponse) => {
  // response cũ mọi thứ đều trả về 200
};

const handleUnauthorized = (error: any) => {
  if (error.response.status === 403) {
  }
};

//========AXIOS ========
export function getAxiosBase(
  config: AxiosRequestConfig,
  isGetAllResponseAxios: boolean = false // tổng kết ca cần,
) {
  const axiosInstance = axios.create({
    timeout: AppConfig.timeOut,
    ...config,
  });

  // axiosInstance.defaults.withCredentials = true;
  // axiosInstance.defaults.paramsSerializer = (params) => {
  //   return qs.stringify(params, { arrayFormat: "comma" });
  // };

  axiosInstance.interceptors.request.use(
    function (request) {
      if (request.headers) {
        // thêm version git commit để check xem user có update code mới nhất ko
        request.headers["X-Client-Git-Version"] = `${
          process.env.REACT_APP_GIT_COMMIT_HASH
            ? process.env.REACT_APP_GIT_COMMIT_HASH
            : "no-git-commit-hash"
        }`;
      }
      return request;
    },
    function (error) {
      AppConfig.runMode === "development" && console.error(error);
    }
  );

  axiosInstance.interceptors.response.use(
    function (response: AxiosResponse) {
      handleOldError(response);

      if (isGetAllResponseAxios) {
        return response;
      }
      return response.data;
    },
    function (error) {
      errorHandler(error);
      return Promise.reject(error);
    }
  );
  return axiosInstance;
}

const BaseAxios = getAxiosBase({ baseURL: "/unicorn" });
export default BaseAxios;

/**
 * vd: https://unicorn-dev.yody.io/admin/account.json
 *
 * https://unicorn-dev.yody.io/admin/account.json
 */
const baseURL =
  process.env.NODE_ENV === "production"
    ? `${process.env.REACT_APP_BASE_API}`
    : `${process.env.REACT_APP_BASE_API}`;
//https://dev.api.yody.io/admin/account.json

console.log("baseURL", baseURL);
console.log("process.env.NODE_ENV", process.env.NODE_ENV);
console.log("process.env", process.env);

// https://unicorn-dev.yody.io/admin/account.json - chuẩn
// https://dev.api.yody.io/admin/account.json -deploy
export const nativeAxiosClient = getAxiosBase({ baseURL: "/" }, true);
export const axiosClientFullResponseV2 = getAxiosBase(
  {
    baseURL: baseURL,
  },
  true
);

export const axiosClientV2 = getAxiosBase({
  baseURL: `${baseURL}/unicorn/`,
});

export const paymentGatewayBaseAxios = getAxiosBase({
  baseURL: baseURL,
});

export const axiosClientV2GetOnlyData = getAxiosBase({});
