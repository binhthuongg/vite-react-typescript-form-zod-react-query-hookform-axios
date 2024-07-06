import withAuthRoute from "shared/HOCs/withAuthRoute";
import { StyledComponent } from "./styles";

type Props = {};

function NoPermission(props: Props) {
  // console.log("team", team);
  console.log("props", props);
  return (
    <StyledComponent>
      <div className="content">
        <h1>Bạn không có quyền truy cập!</h1>
        <span className="guidline">
          Bạn không có quyền truy cập tính năng này.
          <br />
          <a
            href="tel:0888464258"
            title="HOTLINE PHÒNG IT: 0888464258"
            style={{ color: "#666666" }}
          >
            Vui lòng liên hệ bộ phận hỗ trợ!
          </a>
        </span>
      </div>
    </StyledComponent>
  );
}

export default withAuthRoute(NoPermission);
