import withAuthRoute from "shared/HOCs/withAuthRoute";
import { StyledComponent } from "./styles";

type Props = {
  title: string;
};

function NotFoundScreen(props: Props) {
  const { title } = props;
  console.log("title", title);
  return (
    <StyledComponent className="notfound">
      <h1>404</h1>
      <h3>Page Not Found</h3>
    </StyledComponent>
  );
}
export default withAuthRoute(NotFoundScreen);
