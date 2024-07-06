import { CUSTOMER_PERMISSION } from "configs/permissions/customer.permission";
import React from "react";
import { RouteMenu } from "./route.model";

const ExamplePage = React.lazy(() => import("UI/pages/ExamplePage"));

const configureRoutes: Array<RouteMenu> = [
  {
    path: "/config/example",
    exact: true,
    title: "Thiết bị",
    icon: "icon-dot",
    lazy: ExamplePage,
    key: "customers-create33333",
    isShow: true,
    header: null,
    permissions: [CUSTOMER_PERMISSION.WRITE],
    subMenu: [],
  },
];

export default configureRoutes;
