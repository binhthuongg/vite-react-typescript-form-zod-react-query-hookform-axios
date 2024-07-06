import { CUSTOMER_PERMISSION } from "configs/permissions/customer.permission";
import { RouteMenu } from "./route.model";

const customerRoutes: Array<RouteMenu> = [
  {
    path: "/customer/clients",
    exact: true,
    title: "Clients 344",
    icon: "icon-dot",
    lazy: async () => {
      const Page = await import("UI/pages/ExamplePage");
      return { Component: Page.default };
    },
    key: "/customer/clients",
    isShow: true,
    header: null,
    // permissions: [CUSTOMER_PERMISSION.WRITE],
    subMenu: [],
  },
  {
    path: "/customers/example2",
    exact: true,
    title: "Cổng thanh toán",
    icon: "icon-dot",
    lazy: async () => {
      const Page = await import("UI/pages/ExamplePage");
      return { Component: Page.default };
    },
    key: "customers/example2313",
    isShow: true,
    header: null,
    permissions: [CUSTOMER_PERMISSION.WRITE],
    subMenu: [],
  },
];

export default customerRoutes;
