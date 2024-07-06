import { css } from "styled-components";
import { primaryColor, textBodyColor } from "./variables";

export const globalCssLayoutOutsideComponent = css`
  .searchDropdown__productTitle {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    max-height: 42px;
    line-height: 21px;
  }
  .ant-select-selection-item {
    .hideInSelect {
      display: none;
    }
  }
  .ant-select-item-option {
    .hideInDropdown {
      display: none;
    }
    .itemParent {
      font-weight: 500;
    }
  }
  .ant-picker-dropdown {
    .datePickerFooter {
      white-space: nowrap;
    }
    .datePickerSelectRange {
      text-align: center;
      cursor: pointer;
      color: ${primaryColor};
      &.active,
      &:hover {
        font-weight: 500;
      }
    }
  }

  .yody-modal-price-product .ant-modal-header {
    padding: 16px 20px 0px 20px;
  }

  .yody-modal-price-product .ant-modal-body {
    padding: 5px 20px;
  }
  .yody-table-product-search .ant-image-mask-info {
    font-size: 10px;
  }
  .yody-text-ellipsis {
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .fullDrawer {
    /* transition-duration: 1s !important; */
  }
  .modal-confirm {
    &-container {
      display: flex;
      flex-direction: row;
    }
    &-icon {
      width: 70px;
      height: 70px;
      font-size: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      margin-right: 25px;
    }
    &-right {
      justify-content: center;
      display: flex;
      flex-direction: column;
    }
    &-title {
      font-size: 16px;
      font-weight: bold;
      font-style: normal;
    }
    &-sub-title {
      font-weight: normal;
      font-size: 14px;
      color: rgba(32, 32, 32, 0.9);
      opacity: 0.6;
      margin-top: 10px;
    }
  }
  .ant-menu-item {
    a {
      color: ${textBodyColor};
      &:hover {
        color: ${primaryColor};
      }
    }
  }
`;
