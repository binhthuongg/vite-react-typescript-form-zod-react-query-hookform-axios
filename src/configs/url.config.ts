const UrlConfig = {
  HOME: `/`,
  // LOGIN: `/oauth2/authorization/oidc`,
  LOGIN: `${process.env.REACT_APP_BASE_API}/oauth2/authorization/oidc` || "",
  LOGIN_POPUP: `/popup-login`,
  LOGIN_SUCCESS: `/login/oauth2/code/oidc`,
  /**
   * new
   */
  customer: "/customer",
  config: "/config",
  paymentMethods: "/payment-methods",
  form: "/form",
  reactQuery: "/reactQuery",
};

export default UrlConfig;
