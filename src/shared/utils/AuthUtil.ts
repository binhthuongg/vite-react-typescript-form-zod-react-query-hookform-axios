import { PageResponse } from "base/base.model";
import { AdminPermission } from "configs/permissions/admin.permission";
import UrlConfig from "configs/url.config";

//returns true : can | false : can not
export const checkUserPermission = (
  partialAcceptPermissions: Array<string> = [],
  currentPermissions: Array<string> = [],
  acceptStoreIds: Array<number> = [],
  currentStoreIds: number[] = [],
  combineAcceptPermissions?: Array<string>
): boolean => {
  // gộp quyền, user phải có đầy đủ các quyền cụ thể mới đc truy cập
  if (
    combineAcceptPermissions &&
    Array.isArray(combineAcceptPermissions) &&
    !combineAcceptPermissions.every((per) => currentPermissions.includes(per))
  ) {
    return false;
  }
  // không truyền vào quyền nào => được phép truy cập
  if (
    !partialAcceptPermissions ||
    (Array.isArray(partialAcceptPermissions) &&
      partialAcceptPermissions.length === 0)
  ) {
    return true;
  }

  // kiểm tra quyền truy cập của use nếu chưa có hoặc không chưa quyền nào => không cho truy cập
  if (!Array.isArray(currentPermissions) || currentPermissions?.length === 0) {
    return false;
  }

  // admin_all => full quyền => được phép truy cập
  if (
    Array.isArray(currentPermissions) &&
    currentPermissions?.includes(AdminPermission.all)
  ) {
    return true;
  }

  // nếu trong profile có 1 quyền nào đó so với quyền cần có => được phép truy cập
  const hasPermission = partialAcceptPermissions.some((element) => {
    return currentPermissions.includes(element);
  });

  // nếu trong profile có 1 store nào đó so với store cần có => được phép truy cập
  let hasStoreId = false;
  if (Array.isArray(acceptStoreIds) && acceptStoreIds?.length > 0) {
    hasStoreId = acceptStoreIds?.some((element) => {
      return (
        currentStoreIds && currentStoreIds.some((store) => store === element)
      );
    });
  } else {
    hasStoreId = true;
  }

  return hasPermission && hasStoreId;
};

export const SSO_POPUP_BROADCAST_CHANNEL_KEY = "SSO_broadcast_channel";
export const SSO_IS_POPUP_OPENED = "is_popup_opened";
let windowObjectReference: Window;

export function openLoginPopupSSO() {
  if (windowObjectReference && !windowObjectReference.closed) {
    windowObjectReference.focus();
    return;
  }

  window.addEventListener("beforeunload", () => {
    removeIsOpenedPopupStorage();
    closeLoginPopupSSO();
  });

  setIsOpenedPopupStore();
  windowObjectReference = window.open(
    UrlConfig.LOGIN,
    "_blank",
    "popup, width=400, height=800"
  ) as Window;
}

export const closeLoginPopupSSO = () => {
  windowObjectReference && windowObjectReference.close();
};

export const setIsOpenedPopupStore = () => {
  localStorage.setItem(SSO_IS_POPUP_OPENED, "true");
};

export const removeIsOpenedPopupStorage = () => {
  localStorage.removeItem(SSO_IS_POPUP_OPENED);
};
