import { css } from "styled-components";
import { borderColor, grayF5Color, textBodyColor } from "./variables";

export const globalCssCustomTable = css`
  .ant {
    &-table {
      font-size: 1rem;
      &-selection-column {
        padding-right: 20px !important;
        padding-left: 20px !important;
      }
      &-thead {
        & > tr > th {
          color: ${textBodyColor};
          font-weight: 600;
          background: ${grayF5Color};
          border-bottom: 2px solid ${borderColor};
          padding: 10px 16px;
          /* &::before {
          content: unset !important;
        } */
        }
      }
      &-tbody {
        // & > tr:nth-child(2n) > td {
        //   background-color: rgba($background-color-secondary, 0.5);
        // }
        & > tr.ant-table-row-selected > td {
          // background-color: inherit;
        }
        > tr > td {
          border-bottom: 1px solid ${borderColor};
        }
      }

      .ant-table-cell-with-append {
        display: flex;
        flex-direction: row-reverse;
        justify-content: flex-end;
        align-items: center;
      }
    }
  }

  .custom-table {
    &-pagination {
      color: #000;
      margin: 8px 0 16px 0;
      .ant-row {
        align-items: center;
        display: flex;
      }
      // .ant-select {
      //   color: #222;
      //   &:hover,
      //   &.ant-select-open {
      //     .ant-select-selector {
      //       background: #2a2a86 !important;
      //       color: #fff;
      //     }
      //     .ant-select-selection-item {
      //       color: inherit;
      //     }
      //     .ant-select-arrow {
      //       color: #fff;
      //     }
      //   }
      //   .ant-select-selector {
      //     background: $border-color;
      //     border: none;
      //     border-radius: 23.5px;
      //     padding: 0 20px;
      //     transition: 0.3s ease;
      //   }
      //   .ant-select-selection-item {
      //     font-weight: bold;
      //     transition: none;
      //   }
      // }
      &__main {
        align-items: center;
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-end;
        .ant-pagination-item {
          background: #f5f5f5;
          border-radius: 2px;
          color: #222;
          height: 35px;
          line-height: 35px;
          min-width: 35px;
          &:not(.ant-pagination-disabled) {
            &:hover,
            &.ant-pagination-item-active {
              background: #2a2a86;
              color: #fff;
              a {
                color: #fff !important;
              }
            }
          }
          &.ant-pagination-disabled {
            background: #f5f5f5;
            color: #9e9e9e;
          }
        }
        .ant-pagination-jump-next,
        .ant-pagination-jump-prev,
        .ant-pagination-next,
        .ant-pagination-prev {
          height: 35px;
          line-height: 35px;
          min-width: 35px;
          .ant-pagination-item-link {
            border-radius: 2px;
          }
          &:not(.ant-pagination-disabled) {
            &:hover {
              .ant-pagination-item-link {
                background: #2a2a86;
                color: #fff;
              }
            }
          }
        }

        .ant-pagination-first,
        .ant-pagination-last {
          .ant-pagination-item-link {
            padding: 0 10px;
          }
          span[role="img"] {
            position: relative;
            top: 1px;
          }
        }
      }
      &__sizeChange {
        > label {
          color: inherit;
        }
      }
      &__showTotal {
        color: #000;
      }
      .ant-pagination-next,
      .ant-pagination-prev {
        display: none;
      }
      .ant-pagination-last {
        margin-left: 1px;
      }
    }
  }
`;
