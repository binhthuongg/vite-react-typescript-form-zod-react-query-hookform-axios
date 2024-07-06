const ACCESS_TOKEN = "access_token";
const SETTING_APP = "setting_app";

export const ACCOUNT_CODE_LOCAL_STORAGE = "accountCode";

export const setToken = (token: any) => {
  localStorage.setItem(ACCESS_TOKEN, token);
};

export const getToken = (): String | null => {
  return localStorage.getItem(ACCESS_TOKEN);
};

export const removeToken = () => {
  localStorage.removeItem(ACCESS_TOKEN);
};

export const removeTourGuide = () => {
  localStorage.removeItem("isShowSummaryTour");
  localStorage.removeItem("isShowAuditTour");
  localStorage.removeItem("isShowForwardTourVar");
  localStorage.removeItem("isShowBinLocationListTour");
  localStorage.removeItem("isShowCreateBinLocationTour");
};

export const removeBinLocation = () => {
  localStorage.removeItem("storeBinLocation");
};

export const clearLocalStorage = () => {
  localStorage.clear();
};

export const setAppSetting = (appSeting: any) => {
  let data: string = JSON.stringify(appSeting);
  localStorage.setItem(SETTING_APP, data);
};

export const getSettingApp = (): String | null => {
  return localStorage.getItem(SETTING_APP);
};

export function setWithExpiry(
  key: string,
  value: string | boolean,
  ttl: number
) {
  const item = {
    value: value,
    expiry: new Date().getTime() + ttl,
  };
  localStorage.setItem(key, JSON.stringify(item));
}

export function getWithExpiry(key: string) {
  const itemString = window.localStorage.getItem(key);
  if (!itemString) return null;

  const item = JSON.parse(itemString);
  const isExpired = new Date().getTime() > item.expiry;

  if (isExpired) {
    localStorage.removeItem(key);
    return null;
  }

  return item.value;
}
