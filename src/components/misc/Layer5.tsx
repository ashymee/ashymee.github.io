import { lazy } from "react";

const Ground5 = lazy(() => import("@/components/svg/Ground5"));

export default function Layer5() {
  return <Ground5 />;
}
