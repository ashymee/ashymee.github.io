import { Fragment, lazy } from "react";

const Ground6 = lazy(() => import("@/components/svg/Ground6"));

export default function Layer6() {
  return (
    <Fragment>
      <Ground6 className="absolute h-auto bottom-0 md:-bottom-32 left-0 right-0" />
    </Fragment>
  );
}
