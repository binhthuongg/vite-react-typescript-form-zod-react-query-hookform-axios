import { axiosClientFullResponseV2 } from "base/base.axios";

export const getAccountByCodeService = (code: string): Promise<any> => {
  return axiosClientFullResponseV2.get(`/admin/core/users/${code}.json`);
};
