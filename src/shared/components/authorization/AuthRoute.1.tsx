import Container from "UI/layouts/PageContainer";
import ErrorFallback from "UI/pages/ErrorFallback";
import SplashScreen from "UI/pages/Splash";
import { Suspense, useCallback, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Route } from "react-router";
import AuthWrapper from "./AuthWrapper";
import { Props } from "./AuthRoute";

export function AuthRoute(props: Props) {
  const {
    path,
    lazy,
    permissions,
    exact,
    withLayout,
    combineAcceptPermissions,
  } = props;
  const [title, setTitle] = useState(props.title);
  const content = useCallback(async () => {
    const result = await lazy();
    return (
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Suspense fallback={<SplashScreen />}>
          <AuthWrapper
            acceptPermissions={permissions}
            combineAcceptPermissions={combineAcceptPermissions}
            passThrough
          >
            <result.Component />
          </AuthWrapper>
        </Suspense>
      </ErrorBoundary>
    );
  }, [permissions, combineAcceptPermissions]);

  return (
    <Route path={path}>
      {withLayout ? (
        <div className="component-without-layour-wrapper">{content()}</div>
      ) : (
        <Container title={title}>
          <>{content()}</>
        </Container>
      )}
    </Route>
  );
}
