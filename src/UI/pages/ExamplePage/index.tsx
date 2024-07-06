import ContentContainer from "UI/layouts/ContentContainer";
import UrlConfig from "configs/url.config";
import withAuthRoute from "shared/HOCs/withAuthRoute";
import { StyledComponent } from "./styles";

type Props = {
  title: string;
};

function ExamplePage(props: Props) {
  const { title } = props;
  return (
    <ContentContainer
      title={title}
      breadcrumb={[
        {
          name: "Tổng quan",
          path: UrlConfig.HOME,
        },
        {
          name: "Clients",
          path: `${UrlConfig.config}`,
        },
      ]}
    >
      <StyledComponent>
        <div className="pageWrapper">ExamplePage</div>
      </StyledComponent>
    </ContentContainer>
  );
}

export default withAuthRoute(ExamplePage);
