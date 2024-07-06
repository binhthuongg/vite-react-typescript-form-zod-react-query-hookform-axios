import { ReactNode } from "react";
import { StyledComponent } from "./styles";
import { NavLink } from "react-router-dom";
import UrlConfig from "configs/url.config";

type Props = {
  title: string | ReactNode;
  breadcrumb?: any[];
};

function HeaderContainer(props: Props) {
  const { title, breadcrumb } = props;

  return (
    <StyledComponent>
      <div>HeaderContainer</div>
      <div>
        <div>
          <NavLink
            to={UrlConfig.HOME}
            title="Trang chủ"
            className={(state) => {
              return state.isActive ? "active" : "";
            }}
          >
            HOME
          </NavLink>
        </div>
        <div>
          <NavLink
            to={UrlConfig.customer}
            title="customer"
            className={(state) => {
              return state.isActive ? "active" : "";
            }}
          >
            customer
          </NavLink>
        </div>
        <div>
          <NavLink
            to={UrlConfig.form}
            title="Form"
            className={(state) => {
              return state.isActive ? "active" : "";
            }}
          >
            Form
          </NavLink>
        </div>
        <div>
          <NavLink
            to={UrlConfig.reactQuery}
            title="reactQuery"
            className={(state) => {
              return state.isActive ? "active" : "";
            }}
          >
            reactQuery
          </NavLink>
        </div>
      </div>
      <h1 className="pageTitle">{title}</h1>
      {breadcrumb && <div className="breadcrumb">breadcrumb ở đây</div>}
    </StyledComponent>
  );
}

export default HeaderContainer;
