import { css } from "styled-components";
import { primaryColor } from "./variables";

export const globalCssCustomRadio = css`
  .ant-radio-checked {
    &:after {
      border-color: ${primaryColor};
    }
    .ant-radio-inner {
      border-color: ${primaryColor};
      &:after {
        background: ${primaryColor};
      }
    }
  }
  .ant-radio:hover .ant-radio-inner {
    border-color: ${primaryColor};
  }
  .ant-radio-inner:after {
    margin: 0;
    top: 50%;
    left: 50%;
    width: 10px;
    height: 10px;
    transform: translate(-50%, -50%) !important;
  }
`;
