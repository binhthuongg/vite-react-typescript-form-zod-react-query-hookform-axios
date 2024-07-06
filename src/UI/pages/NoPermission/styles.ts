import styled from "styled-components";

export const StyledComponent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 80vh;
  .container-card {
    width: 100%;
  }
  .content {
    height: 64vh;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    align-items: center;
    .img {
      margin-bottom: 20px;
    }
    .guidline {
      color: #666666;
    }
    .back-btn {
      display: inline-flex;
      margin-top: 10px;
      align-items: center;
    }
    .hotline-info {
      cursor: pointer;
      display: flex;
      align-items: center;
      font-size: 16px;
      .hotline-group {
        display: flex;
        flex-direction: column;
      }
      .phone-number {
        font-weight: bold;
        &:hover {
          cursor: pointer;
          text-decoration: underline;
        }
      }
      a {
        color: #000000;
      }
    }
  }
  .ant-card-bordered {
    border: none;
  }
  .ant-card {
    box-shadow: none;
  }
  .anticon svg {
    width: 10px;
  }
`;
