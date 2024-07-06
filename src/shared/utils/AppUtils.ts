import BaseResponse from "base/base.model";
import { AppConfig } from "configs/app.config";
import { HttpStatus } from "configs/http-status.config";

export const getCurrentPath = (): string => {
  const currentPath = encodeURIComponent(
    `${window.location.pathname.slice(6, window.location.pathname.length)}${
      window.location.search
    }`
  );
  return currentPath;
};

export const getPath = (object: any, search: string): any => {
  if (object?.path === search) return [object.key];
  else if (object.subMenu || Array.isArray(object)) {
    let subMenu = Array.isArray(object) ? object : object.subMenu;
    for (let child of subMenu) {
      let result = getPath(child, search);
      if (result) {
        if (object.path) result.unshift(object.key);
        return result;
      }
    }
  }
};

export const isUndefinedOrNull = (variable: any) => {
  if (variable && variable !== null) {
    return false;
  }
  return true;
};

export const isFetchApiSuccessful = (response: BaseResponse<any>) => {
  switch (response?.code) {
    case HttpStatus.SUCCESS:
      return true;
    default:
      return false;
  }
};

export const getArrayFromObject = <Type>(obj: {
  [name: string]: Type;
}): Array<Type> => {
  return Object.entries(obj).map((single) => {
    const [, value] = single;
    return value;
  });
};

export const getXsrfTokenFromCookies = (cookies: string) => {
  const xsrfTokenText = "XSRF-TOKEN=";
  // Split the cookie string into an array of key-value pairs
  const cookieList = cookies.split(";");

  // Find the XSRF-TOKEN cookie and extract its value
  let xsrfToken = "";
  for (let i = 0; i < cookieList.length; i++) {
    const cookie = cookieList[i].trim();
    if (cookie.startsWith(xsrfTokenText)) {
      xsrfToken = cookie.split("=")[1];
      break;
    }
  }
  return xsrfToken;
};

export const checkEnvironment = {
  isDev: () => {
    return AppConfig.ENV === "DEV";
  },
  isUat: () => {
    return AppConfig.ENV === "UAT";
  },
  isProduction: () => {
    return AppConfig.ENV === "PROD";
  },
};

export const handleTryCatchError = (error: any) => {
  console.log("error", error);
};

export function handleFetchApiError(
  response: BaseResponse<any>,
  textApiInformation: string,
  dispatch: any
) {
  console.log("response", response);
  console.log("textApiInformation", textApiInformation);
  console.log("dispatch", dispatch);
}
