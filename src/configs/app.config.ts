export const AppConfig = {
  ENV: process.env.REACT_APP_ENVIRONMENT, // DEV,UAT,PROD
  runMode: process.env.NODE_ENV, // development (npm start), production (npm run build), test (npm run test)

  security: {
    Keycloak: {
      AuthUrl: process.env.REACT_APP_KEYCLOAK_URL
        ? process.env.REACT_APP_KEYCLOAK_URL
        : "https://id.yody.vn",
      ClientId: process.env.REACT_APP_CLIENT_ID
        ? process.env.REACT_APP_CLIENT_ID
        : "payment-system",
      Realm: process.env.REACT_APP_REALM_NAME
        ? process.env.REACT_APP_REALM_NAME
        : "payment-dev",
      RedirectUri:
        window.location.hostname === "localhost"
          ? "http://localhost:3000/"
          : process.env.REACT_APP_REDIRECT_URL || "http://localhost:3000/",
      Scope: "openid email profile offline_access",
      ClientSecret: process.env.REACT_APP_CLIENT_SECRET
        ? process.env.REACT_APP_CLIENT_SECRET
        : "0nYSMgQ8OOYHwjkFOLGuNMBjia44AycB",
    },
    Token: {
      IdToken: "KEYCLOAK_IDENTITY",
      AccessToken: "KEYCLOAK_ACCESS_TOKEN",
      RefreshToken: "KEYCLOAK_REFRESH_TOKEN",
    },
    BaseUrl: process.env.REACT_APP_BASE_URL
      ? process.env.REACT_APP_BASE_URL
      : "https://id.yody.vn/admin/realms/payment-dev",
  },

  timeOut: process.env.REACT_APP_TIME_OUT
    ? parseInt(process.env.REACT_APP_TIME_OUT)
    : 20000,
  /**
   * @description: thời gian time out khi sử dụng typing request
   * sau khi dừng gõ 500ms thì mới gửi request  => hạn chế request tới server liên tục
   */
  TYPING_TIME_REQUEST: 500,
  // làm tròn
  mathRoundPrecision: {
    percentage: 2, // làm tròn tiền
    amount: 0, // làm tròn phần trăm
  },
};
export const hotlineCNTTNumber = "0888 464 258";
export const hotlineCompanyNumber = "18001580";
