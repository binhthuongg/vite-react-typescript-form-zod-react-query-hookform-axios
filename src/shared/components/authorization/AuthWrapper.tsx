import { Fragment, ReactNode } from "react";
import useAuthorization, {
  UseAuthorizationProps,
} from "shared/hooks/useAuthorization";

interface Props extends UseAuthorizationProps {
  children: ReactNode;
  passThrough?: boolean; // send boolean value to children
}

function AuthWrapper(props: Props) {
  const { not, children, passThrough } = props;

  const [isPassed, isLoadingUserPermission] = useAuthorization({
    not,
  });

  if (passThrough && typeof children === "function") {
    const _children = children as Function;
    /**@description : chuyển giá trị vào children function (kể cả có quyền hay không)
     *
     * @param isPassed: boolean : true nếu có quyền truy cập
     * @param isLoadingUserPermission: boolean : true nếu đang tải quyền truy cập
     * @returns function
     */
    return _children(isPassed, isLoadingUserPermission);
  } else if (isPassed) {
    /**
     * @description : return component con khi có quyền truy cập
     */
    return children;
  } else {
    /**
     * @description : return component trống khi không có quyền truy cập
     */
    return <Fragment />;
  }
}

export default AuthWrapper;
