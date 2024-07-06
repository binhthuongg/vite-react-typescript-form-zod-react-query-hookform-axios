// Đặt tên resouces  có chữ [s] + action , viết thường, snake_case => products_read
// Nếu có resource con :  resouces cha [s] + resource con [s] + action => products_categories_create
// Các action chính : read, update, create, delete, print, ..

import { UNI_PREFIX } from ".";

export const CUSTOMER_PERMISSION = {
  READ: `${UNI_PREFIX}read_customers`,
  WRITE: `${UNI_PREFIX}write_customers`,
  EXPORT: `${UNI_PREFIX}export_customers`,
  RECALCULATE: `${UNI_PREFIX}recalculate_customers`,
  LOOKUP_CUSTOMERS: `${UNI_PREFIX}lookup_customers`,
  SETUP_CUSTOMERS: `${UNI_PREFIX}setup_customers`,
  REPORT_CUSTOMERS: `${UNI_PREFIX}report_customers`,
};
