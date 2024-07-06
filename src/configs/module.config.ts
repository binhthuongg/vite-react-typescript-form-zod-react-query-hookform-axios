import { ModuleAuthorizeQuery } from "base/auth/auth.models";

const GET_ALL_MODULE_LIMIT = 200;
export const getAllModuleParam: ModuleAuthorizeQuery = {
  get_permission: true,
  limit: GET_ALL_MODULE_LIMIT,
  status: "ACTIVE",
};
