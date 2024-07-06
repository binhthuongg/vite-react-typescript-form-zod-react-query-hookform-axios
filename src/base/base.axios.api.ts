/**
 * @deprecated
 * use axiosClientV2 instead
 */
import { getAxiosBase } from "./base.axios";

const BaseAxiosApi = getAxiosBase({ baseURL: `/api` });
export default BaseAxiosApi;
