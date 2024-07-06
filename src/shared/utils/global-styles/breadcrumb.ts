import { css } from "styled-components";
import { primaryColor, textBodyColor } from "./variables";

export const globalCssCustomBreadcrumb = css`
  .ant-breadcrumb a {
    color: ${textBodyColor};
    &:hover {
      color: ${primaryColor};
    }
  }
`;
