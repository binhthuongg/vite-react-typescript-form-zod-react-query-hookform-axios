import { ModuleAuthorize } from "base/auth/auth.models";
import { BaseObject, BaseQuery, PageResponse } from "base/base.model";
import { EnumGrantedLocationSelection } from "configs/enum.config";

/**
 * @ok
 */
export interface AccountJobResponse {
  position_id: number;
  department_id: number;
  department?: string;
  position?: string;
}
/**
 * @ok
 */
export interface AccountStoreResponse {
  store_id?: number;
  store_name?: string;
  store?: string;
}

export interface AccountBaseModel {
  department_id: number;
  department_name: string;
  display_name: string;
  activated: boolean;
  login: string;
  first_name: string;
  last_name: string;
  gender: string;
  phone: string;
  birthday?: string;
  email?: string;
  address: string;
  city?: number;
  district?: number;
  country?: number;
  account_jobs: Array<AccountJobResponse>;
  account_stores: Array<AccountStoreResponse>;
  granted_location: GrantedLocationModel;
  authorities: string[];
  position_id?: number;
  /**
   * @deprecated
   */
  user_id?: string;
  /**
   * @deprecated
   * use first_name + " " + last_name instead
   */
  full_name: string;
  /**
   * @deprecated
   */
  supplier?: any;
  /**
   * @deprecated
   */
  supplier_ids?: number[];
  /**
   * @deprecated
   */
  is_supplier?: boolean | undefined;
  /**
   * @deprecated
   */
  supplier_status?: string;
  /**
   * @deprecated
   */
  status: string;
  /**
   * @deprecated
   */
  is_shipper?: boolean;
  /**
   * @deprecated
   * use login instead
   */
  code: string;
  /**
   * @deprecated
   */
  role_id: number;
  /**
   * @deprecated
   */
  store_ids: Array<number>;
}

export interface MerchandiserSelectResponse
  extends PageResponse<Pick<AccountResponse, "code" | "full_name">> {}
export interface AccountResponse extends AccountBaseModel, BaseObject {
  /**
   * @deprecated
   */
  permissions: {
    modules: Array<ModuleAuthorize>;
  };
  /**
   * @deprecated
   */
  account_suppliers: any;
  /**
   * @deprecated
   */
  role_name: string;
  /**
   * @deprecated
   */
  temporary_password: boolean;
}

export interface DeliverPartnerResponse {
  address: string;
  code: string;
  id: number;
  name: string;
  phone: string;
  status: string;
  tax_code: string | null;
}
/**
 * @deprecated
 */
export interface AccountSearchQuery extends BaseQuery {
  code?: string;
  department_ids?: Array<number> | Array<null>;
  from_date?: Date;
  to_date?: Date;
  condition?: string;
  info?: string;
  mobile?: string;
  position_ids?: number;
  role_id?: Array<number>;
  store_ids?: Array<number>;
  status?: string;
  codes?: Array<string> | string;
  is_shipper?: number;
}

export interface AccountPublicSearchQueryModel extends BaseQuery {
  search?: string; // => search
  login?: string[];
  size?: number;
  /**
   * @deprecated
   */
  store_ids?: Array<number>; // bỏ
  codes?: Array<string> | string; //bỏ
  /**
   * @deprecated
   */
  status?: "active" | "inactive"; // bỏ
  activated?: boolean;
}

export interface AccountRolesResponse {
  id?: number;
  role_id?: number;
  role_name?: string;
}

export interface LoginResponse {
  access_token: string;
  refresh_token: string;
}

//Request

export interface AccountJobReQuest {
  position_id: number;
  department_id: number;
  department_name: string;
  position_name: string;
  key: number;
  id?: number;
}

// for create and update screen
export interface AccountRequest extends AccountBaseModel {
  account_jobs: Array<AccountJobResponse>;
}

export interface MeRequest {
  country_id?: 0;
  city_id?: 0;
  district_id: 0;
  country?: string;
  city?: string;
  district?: string;
  address: string;
  phone?: string;
}

export interface PublicAccountResponseModel {
  code: string;
  full_name?: string | null;
  id: string;
}

export interface GrantedLocationModel {
  location_ids: number[];
  location_selection: EnumGrantedLocationSelection;
}
