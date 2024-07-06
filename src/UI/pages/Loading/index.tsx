import { RootReducerModel } from "base/redux/reducer/reducer.model";
import { useSelector } from "react-redux";

type Props = {};

function LoadingScreen(props: Props) {
  const loading = useSelector(
    (state: RootReducerModel) => state.loadingReducer
  );
  if (!loading.isVisible) return null;
  return <div className="loading">loading</div>;
}

export default LoadingScreen;
