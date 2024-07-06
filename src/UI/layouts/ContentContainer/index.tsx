import React from "react";
import BreadcrumbContainer from "../Breadcrumb";
import { StyledComponent } from "./styles";
import HeaderContainer from "../HeaderContainer";

type Props = {
  children: React.ReactNode;
  title: string | React.ReactNode;
  extra?: React.ReactNode;
  bonusBtn?: React.ReactNode;
  breadcrumb?: any[];
  isError?: boolean;
  isLoading?: boolean;
};

function ContentContainer(props: Props) {
  const { title, breadcrumb } = props;
  return (
    <StyledComponent>
      <div className="layoutContentWrapper">
        <React.Fragment>
          <HeaderContainer title={title} breadcrumb={breadcrumb} />
          <div className="pageContent">{props.children}</div>
        </React.Fragment>
      </div>
    </StyledComponent>
  );
}

export default ContentContainer;
