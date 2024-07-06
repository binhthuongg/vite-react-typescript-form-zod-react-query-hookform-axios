import { RootReducerModel } from "base/redux/reducer/reducer.model";
import { useState } from "react";
import { useSelector } from "react-redux";

export interface UseAuthorizationProps {
  not?: boolean;
}

function useAuthorization(props: UseAuthorizationProps) {
  const { not } = props;

  const [allowed, setAllowed] = useState<boolean>(false);
  const [isLoadingUserPermission, setIsLoadingUserPermission] =
    useState<boolean>(false);

  const currentAuthorities: string[] = useSelector(
    (state: RootReducerModel) => state.authReducer.account?.authorities || []
  );

  const currentStores = useSelector(
    (state: RootReducerModel) =>
      state.authReducer.account?.granted_location.location_ids
  );

  // useEffect(() => {
  //   if (!currentAuthorities) {
  //     setIsLoadingUserPermission(true);
  //     setAllowed(false);
  //   } else {
  //     setAllowed(
  //       checkUserPermission(
  //         acceptPermissions,
  //         currentAuthorities,
  //         acceptStoreIds,
  //         currentStores,
  //         combineAcceptPermissions
  //       )
  //     );
  //     setIsLoadingUserPermission(false);
  //   }
  // }, [
  //   acceptPermissions,
  //   currentAuthorities,
  //   acceptStoreIds,
  //   currentStores,
  //   combineAcceptPermissions,
  // ]);

  return [(allowed && !not) || true, isLoadingUserPermission];
  // return [true, false];
}

export default useAuthorization;
