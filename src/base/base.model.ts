export interface BaseObject {
  id: number;
  code: string;
  created_name?: string;
  created_by?: string;
  created_date?: Date;
  updated_by?: string;
  updated_name?: string;
  updated_date?: Date;
  version?: number;
  request_id?: string | null;
  operator_kc_id?: string | null;
}

export interface BaseQuery {
  page?: number;
  limit?: number;
  sort_column?: string;
  sort_type?: string;
}

export interface PageAbleQuery {
  page?: number;
  size?: number;
  sort?: string;
}

export interface BaseSelectPagingQuery extends BaseQuery {
  search?: string; // => search
  login?: string[];
  size?: number;
  condition?: string;
  info?: string;
  /**
   * @deprecated
   */
  store_ids?: Array<number>; // bỏ
  codes?: Array<string> | string; //bỏ
  /**
   * @deprecated
   */
  status?: "active" | "inactive"; // bỏ
}

interface BaseResponse<T> {
  code: number;
  message: string;
  data: T;
  response_time: string;
  errors: Array<string>;
  request_id: string;
}

export default BaseResponse;

export type HttpStatus =
  | 200
  | 201
  | 202
  | 204
  | 400
  | 401
  | 403
  | 404
  | 405
  | 409
  | 422
  | 500
  | 502
  | 503
  | 504;
export interface HTTPResponse<T> {
  data: T;
  status: HttpStatus;
  statusText: string;
  headers: any;
  config: any;
  request?: any;
}

export interface BaseMetadata {
  total: number;
  limit: number;
  page: number;
  pageSize?: number;
  status?: "active" | "inactive";
}

export interface PageResponse<T> {
  metadata: BaseMetadata;
  items: Array<T>;
}

export interface PageResponseV2<T> {
  headers?: {
    ["x-total-count"]: string;
  };
  data: Array<T>;
}
