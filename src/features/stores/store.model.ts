import { BaseObject } from "base/base.model";

export interface CustomAttributeType {
  key: string;
  value: string;
}

export interface AddressType {
  phone: string;
  address1?: string;
  address2?: string | null;
  country?: string;
  country_code?: string;
  localized_country_name?: string | null;
  city?: string | null;
  province: string | null;
  province_code: string | null;
  localized_province_name: string | null;
  zip?: string | null;
}

export interface StoreResponse extends BaseObject {
  id: number;
  name: string;
  rank: number;
  rank_name: string;
  square: number;
  country_id: number;
  country_name: string;
  city_id: number;
  city_name: string;
  department_id: number;
  department: string;
  departmentParentName: string;
  status: string;
  latitude?: number | string;
  longitude?: number | string;
  link_google_map?: string;
  status_name: string;
  zip_code: string;
  district_id: number;
  district_name: string;
  ward_id: number;
  ward_name: string;
  address: string;
  hotline: string;
  vm: string;
  vm_code: string;
  mail: string;
  begin_date: string;
  number_of_account: number;
  accounts: Array<any>;
  is_saleable: boolean;
  is_stocktaking: boolean;
  type: string;
  type_name: string;
  reference_id?: number;
  department_h1_id?: number;
  department_h1?: string;
  department_h2_id?: number;
  department_h2?: string;
  department_h3_id?: number;
  department_h3?: string;
  department_h4_id?: number;
  department_h4?: string;
  department_h5_id?: number;
  department_h5?: string;
  department_h6_id?: number;
  department_h6?: string;
  department_h7_id?: number;
  department_h7?: string;
  department_h8_id?: number;
  department_h8?: string;
  department_h9_id?: number;
  department_h9?: string;
  department_h10_id?: number;
  department_h10?: string;
}

export interface StoreResponseV2 extends BaseObject {
  id: number;
  code: string;
  name: string;
  type: string;
  address: AddressType;
  address_verified: boolean;
  active: boolean;
  saleable: boolean;
  deactivated_at?: string;
  custom_attributes: CustomAttributeType[];
  created_by: string;
  created_at: string;
  updated_by: string;
  updated_at: string;
}

export interface StoreQuery {
  page: number;
  size: number;
  city_id?: number;
  info?: string;
  country_id?: number;
  district_id?: number;
  zip_code?: string;
  ward_id?: string;
  vm_code?: string;
  finder_code?: string;
  from_begin_date?: any;
  from_square?: number | "";
  group_id?: string;
  hotline?: number | "";
  simple?: boolean;
  mail?: string;
  manager_code?: string;
  rank?: string;
  status?: string | null;
  to_begin_date?: any;
  to_square?: number | "";
  type: string | "";
  ids?: Array<number> | Array<string>;
  department_id?: string | null;
  department_ids?: string | null;
}

export interface BaseStoreRequest {
  code: string;
  name: string;
  type: string;
  address_verified: boolean;
  address: AddressType;
  active: boolean;
  saleable: boolean;
  custom_attributes: CustomAttributeType[];
}

export interface StoreCreateRequest extends BaseStoreRequest {}

export interface StoreUpdateRequest extends BaseStoreRequest {}

export interface StoreValidateRequest {
  name?: string;
  id?: number;
}

export interface StoreTypeRequest {
  name: string;
  value: string;
}

export interface PlaceQuery {
  key: string;
  query: string;
}

export interface PlaceDetailQuery {
  key: string;
  place_id: string;
}

export interface StoreByDepartment {
  /** Level trực thuộc */
  [key: string]: string | number;
  /** Id cửa hàng */
  id: number;
  /** Tên cửa hàng */
  name: string;
  /** ID bộ phận tương ứng */
  department_id: number;
  /** Tên bộ phận tương ứng */
  department: string;
}
