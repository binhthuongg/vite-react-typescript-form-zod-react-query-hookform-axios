import { css } from "styled-components";
import { borderColor, primaryColor, textBodyColor } from "./variables";

export const globalCssCustomSelect = css`
  .ant-select {
    font-size: 1rem;
    color: ${textBodyColor};
  }
  .ant-select:not(.ant-select-disabled):hover .ant-select-selector {
    border-color: ${primaryColor};
  }
  .ant-select:not(.ant-select-customize-input) .ant-select-selector {
    border-color: ${borderColor};
  }
`;
