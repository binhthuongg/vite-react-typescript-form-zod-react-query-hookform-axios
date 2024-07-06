import UrlConfig from "configs/url.config";
import customerRoutes from "./customer.route";
import PaymentMethodsIcon from "./images/PaymentMethodsIcon.svg";
import UserIcon from "./images/UserIcon.svg";
import { RouteMenu } from "./route.model";

const mainMenu: Array<RouteMenu> = [
  {
    path: UrlConfig.HOME,
    exact: true,
    title: "Tổng quan",
    icon: PaymentMethodsIcon,
    lazy: async () => {
      const Page = await import("UI/pages/QueryPage");
      return { Component: Page.default };
    },
    key: UrlConfig.HOME,
    isShow: true,
    header: null,
    subMenu: [],
  },
  {
    path: UrlConfig.customer,
    exact: true,
    title: "Khách hàng",
    icon: UserIcon,
    lazy: async () => {
      const Page = await import("UI/pages/ExamplePage");
      return { Component: Page.default };
    },
    key: UrlConfig.customer,
    isShow: true,
    header: null,
    subMenu: customerRoutes,
  },
  {
    path: UrlConfig.form,
    exact: true,
    title: "Form",
    icon: UserIcon,
    lazy: async () => {
      const Page = await import("UI/pages/FormPage");
      return { Component: Page.default };
    },
    key: UrlConfig.customer,
    isShow: true,
    header: null,
    subMenu: customerRoutes,
  },
  {
    path: UrlConfig.reactQuery,
    exact: true,
    title: "reactQuery",
    icon: UserIcon,
    lazy: async () => {
      const Page = await import("UI/pages/QueryPage");
      return { Component: Page.default };
    },
    key: UrlConfig.reactQuery,
    isShow: true,
    header: null,
    subMenu: customerRoutes,
  },
];

export default mainMenu;
