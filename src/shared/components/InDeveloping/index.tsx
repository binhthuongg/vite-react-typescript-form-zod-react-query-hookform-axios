import inDevelopingIcon from "./images/inDevelopingIcon.svg";
import { StyledComponent } from "./styles";

type Props = {};

function InDeveloping(props: Props) {
  return (
    <StyledComponent>
      <div className="wrapper">
        <div className="icon">
          <img src={inDevelopingIcon} alt="inDevelopingIcon" />
        </div>
        <div>Tính năng đang phát triển</div>
      </div>
    </StyledComponent>
  );
}

export default InDeveloping;
