import { css } from "styled-components";
import {
  borderColor,
  borderRadius,
  focusBorderColor,
  primaryColor,
  textBodyColor,
} from "./variables";

export const globalCssCustomInput = css`
  .ant-select-selection-placeholder {
    color: ${textBodyColor};
  }
  .ant-select-focused:not(.ant-select-disabled).ant-select:not(
      .ant-select-customize-input
    )
    .ant-select-selector {
    border-color: ${focusBorderColor} !important;
  }
  .ant-picker-focused,
  .ant-picker:hover {
    border-color: ${focusBorderColor} !important;
  }
  .ant-picker-input > input {
    &::-webkit-input-placeholder {
      /* Edge */
      color: ${textBodyColor};
      opacity: 1;
    }

    &:-ms-input-placeholder {
      /* Internet Explorer 10-11 */
      color: ${textBodyColor};
      opacity: 1;
    }

    &::placeholder {
      color: ${textBodyColor};
      opacity: 1;
    }
  }
  .ant {
    &-input {
      border-color: ${borderColor};
      color: ${textBodyColor};

      &::-webkit-input-placeholder {
        /* Edge */
        color: ${textBodyColor};
        opacity: 1;
      }

      &:-ms-input-placeholder {
        /* Internet Explorer 10-11 */
        color: ${textBodyColor};
        opacity: 1;
      }

      &::placeholder {
        color: ${textBodyColor};
        opacity: 1;
      }
      &-lg {
        font-size: 1em;
      }
      &:hover,
      &:focus {
        border-color: ${focusBorderColor};
        box-shadow: unset;
      }
      &-affix-wrapper {
        padding: 0;
        padding-right: 11px;
        border-color: ${borderColor};
        border-radius: ${borderRadius};
        &-focused {
          border-color: ${focusBorderColor};
        }
        &:hover,
        &:focus {
          border-color: ${focusBorderColor};
          box-shadow: unset;
        }
        &:not(&-disabled) {
          &:hover,
          &:focus {
            border-color: ${focusBorderColor};
            box-shadow: unset;
          }
        }
        .ant-input-prefix {
          margin-left: 10px;
          margin-right: 0;
        }
        & > input.ant-input {
          height: 36px;
          padding: 4px 14px;
        }
        & > .ant-input-prefix + input.ant-input {
          padding-left: 5px;
        }
      }
    }
    &-checkbox-checked {
      .ant-checkbox-inner {
        background-color: ${primaryColor};
        border-color: ${primaryColor};
      }
    }
  }
  .ant-input[disabled] {
    color: rgba(0, 0, 0, 0.5);
  }
`;
