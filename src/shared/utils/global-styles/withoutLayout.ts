import { css } from "styled-components";

export const withoutLayout = css`
  .component-without-layour-wrapper {
    .page-header {
      display: none;
    }

    .ant-table-sticky-holder {
      top: 0 !important;
    }

    .order-list-wrapper {
      .page-filter-heading {
        .page-filter-right {
          .ant-form.ant-form-inline {
            .buttonGroup {
              justify-content: flex-end !important;
              gap: 15px !important;
            }
          }
        }
      }
    }

    .order-detail-screen {
      padding-bottom: 70px;

      .bottomBar {
        left: 0;
        margin-left: 0;
        margin-top: 0;
      }

      .mainSection {
        margin-left: 0px !important;
        margin-right: 0px !important;
        margin-bottom: 0px !important;
      }

      .orders-update-shipment {
        margin-bottom: 0;
      }
    }
  }

  @media (max-width: 1200px) {
    .component-without-layour-wrapper {
      .order-list-wrapper {
        .custom-table-pagination__main {
          .ant-pagination-first,
          .ant-pagination-last {
            display: none;
          }
        }
      }

      .order-detail-screen {
        #customer_info {
          flex-wrap: wrap;
          row-gap: 10px !important;
          column-gap: 10px !important;

          .ant-space {
            width: calc((100% - 10px) / 2);
          }
        }

        #order_fulfillment_detail {
          > .ant-row {
            > .ant-col {
              width: 100%;
              max-width: 100%;
              flex: unset;
            }
          }
        }
      }
    }
  }

  @media (max-width: 1024px) {
    .component-without-layour-wrapper {
      .order-list-wrapper {
        > .ant-card-body {
          padding: 15px;
        }

        .page-filter-heading {
          flex-direction: column;
          gap: 15px;

          .page-filter-right {
            width: 100% !important;

            .ant-form.ant-form-inline {
              padding-right: 0 !important;

              .buttonGroup {
                justify-content: flex-start !important;
                position: relative !important;
                margin-top: 15px;
              }
            }
          }
        }

        .tableFooter {
          > .ant-row {
            > .ant-col {
              width: 100% !important;

              .ant-col-10 {
                width: 60% !important;
                max-width: 60% !important;
                flex: unset;
              }

              .ant-col-14 {
                width: 40% !important;
                max-width: 40% !important;
                flex: unset;
              }
            }
          }
        }
      }
    }
  }

  @media (max-width: 992px) {
    .component-without-layour-wrapper {
      .custom-table-pagination__sizeChange {
        display: flex;
        align-items: center;
        justify-content: flex-end;
      }

      .custom-table-pagination__main {
        justify-content: flex-start;
        margin-top: 15px;
      }

      .order-list-wrapper {
        .page-filter-heading {
          .page-filter-right {
            .ant-form.ant-form-inline {
              display: flex !important;
              justify-content: space-between !important;
              gap: 15px;

              .form-filter-wrapper {
                flex: 1;
              }

              .form-filter-wrapper,
              .buttonGroup {
                width: auto !important;
                margin-top: 0;
              }
            }
          }
        }
      }

      .btn-more-filter {
        display: none !important;
      }
    }
  }

  @media (max-width: 800px) {
    .component-without-layour-wrapper {
      .hide-on-mobile {
        display: none !important;
      }
      .order-list-wrapper {
        .page-filter-heading {
          .page-filter-right {
            .ant-form.ant-form-inline {
              display: flex !important;
              flex-direction: column;

              .buttonGroup {
                margin-top: 15px;
              }
            }
          }
        }

        .form-filter-wrapper {
          > .ant-row {
            gap: 15px;
            row-gap: 15px !important;

            > .ant-col {
              flex: unset;
              max-width: 100%;
              width: 100%;
            }
          }
        }
      }
    }
  }
`;
