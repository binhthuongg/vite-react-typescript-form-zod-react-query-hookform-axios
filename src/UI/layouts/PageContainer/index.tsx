import { getBootstrapAction } from "base/bootstrap/bootstrap.slice";
import { RootReducerModel } from "base/redux/reducer/reducer.model";
import { AppConfig } from "configs/app.config";
import { saveSettingAction } from "features/app-settings/app-settings.slice";
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SidebarContainer from "../SidebarContainer";
import { StyledComponent } from "./styles";

type Props = {
  title: string;
  header?: React.ReactNode;
  children: React.ReactNode;
};

function PageContainer(props: Props) {
  const { children, title } = props;
  const dispatch = useDispatch();

  const prefixTitle = () => {
    if (AppConfig.ENV === "DEV") {
      return "DEV - ";
    } else if (AppConfig.ENV === "UAT") {
      return "UAT - ";
    } else {
      return "";
    }
  };

  const isLogin = useSelector(
    (state: RootReducerModel) => state.authReducer.isLogin
  );

  const isLoadBootstrap = useSelector(
    (state: RootReducerModel) => state.bootstrapReducer.isLoad
  );
  const collapsed = useSelector((state: RootReducerModel) =>
    Boolean(state.appSettingsReducer.collapse)
  );

  const [isShowHeader, setIsShowHeader] = useState<boolean>(true);

  const onCollapsed = useCallback(() => {
    dispatch(saveSettingAction({ collapse: !collapsed }));
  }, [collapsed, dispatch]);

  console.log("isLoadBootstrap", isLoadBootstrap);
  console.log("isLogin", isLogin);

  useEffect(() => {
    if (!isLoadBootstrap && isLogin) {
      console.log("getBootstrapAction");
      dispatch(getBootstrapAction());
    }
  }, [dispatch, isLoadBootstrap, isLogin]);

  return (
    <StyledComponent>
      <SidebarContainer />
      {children}
    </StyledComponent>
  );
}

export default PageContainer;
