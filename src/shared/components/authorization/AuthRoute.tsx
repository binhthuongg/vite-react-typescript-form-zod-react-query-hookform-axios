import Container from "UI/layouts/PageContainer";
import React, { useCallback } from "react";
import { useLoaderData } from "react-router-dom";
import { RouteMenu } from "routes/menu/route.model";
import AuthWrapper from "./AuthWrapper";

export type Props = {
  component: any;
};

function AuthRoute(props: Props) {
  const { component: Component } = props;

  const withAuthRouterProps = useLoaderData() as RouteMenu;

  const { permissions, withLayout, combineAcceptPermissions, title } =
    withAuthRouterProps;
  console.log("withLayout", withLayout);
  console.log("title", title);

  console.log("withAuthRouterProps", withAuthRouterProps);
  // const [title, setTitle] = useState(props.title);
  const content = useCallback(() => {
    // return null
    return (
      <AuthWrapper>
        {/* {(allowed: boolean, isLoadingUserPermission: boolean) =>
              isLoadingUserPermission ? (
                <SplashScreen />
              ) : allowed ? (
                <Component setTitle={setTitle} />
              ) : (
                <NoPermission />
              )
            } */}
        <Component title={title} />
        {/* {Component} */}
      </AuthWrapper>
    );
  }, [Component, permissions, combineAcceptPermissions]);

  return (
    <React.Fragment>
      {withLayout ? (
        <div className="component-without-layour-wrapper">{content()}</div>
      ) : (
        <Container title={title}>
          <>{content()}</>
        </Container>
      )}
    </React.Fragment>
  );
}

export default AuthRoute;
