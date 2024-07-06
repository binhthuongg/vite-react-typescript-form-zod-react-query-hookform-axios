import { FunctionComponent } from "react";
import AuthRoute from "shared/components/authorization/AuthRoute";

type ComponentPropTypes = {
  title: string;
};

function withAuthRoute(Component: FunctionComponent<ComponentPropTypes>) {
  return function (): JSX.Element {
    return <AuthRoute component={Component} />;
  };
}

export default withAuthRoute;
