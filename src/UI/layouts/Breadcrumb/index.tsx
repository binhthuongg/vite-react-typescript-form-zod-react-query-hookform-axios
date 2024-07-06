import { ReactNode } from "react";

export interface Props {
  title: string | ReactNode;
  extra?: ReactNode;
  bonusBtn?: ReactNode;
  breadcrumb?: any[];
}

function BreadcrumbContainer(props: Props) {
  const { breadcrumb } = props;
  return (
    <div className="page-header">
      <div className="page-header-heading">
        <div className="page-header-heading-left">
          {breadcrumb && <div></div>}
        </div>
      </div>
    </div>
  );
}

export default BreadcrumbContainer;
