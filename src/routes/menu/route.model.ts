import { BaseObject } from "base/base.model";
import React, { ReactNode } from "react";
import { LazyRouteFunction, NonIndexRouteObject } from "react-router-dom";

export interface RouteMenu {
  fullUrl?: string;
  path: string;
  exact: boolean;
  title: string;
  subTitle?: string;
  isShow: boolean;
  subMenu: Array<RouteMenu>;
  header: React.ReactNode | null;
  icon: string;
  key: string;
  pathIgnore?: Array<string>;
  lazy: LazyRouteFunction<NonIndexRouteObject>;
  showMenuThird?: boolean;
  permissions?: Array<string>;
  activeLink?: Array<string>;
  withLayout?: boolean;
  combineAcceptPermissions?: Array<string>;
}
export interface FilterConfigRequest extends BaseObject {
  json_content: string;
  type: string;
  name: string;
  save_filter_type: string;
}

export interface FilterConfig extends FilterConfigRequest {
  status: string;
}
