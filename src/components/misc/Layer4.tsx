import { lazy } from "react";

const Ground4 = lazy(() => import("@/components/svg/Ground4"));

export default function Layer4() {
  return (
    <Ground4 className="absolute h-auto bottom-0 md:-bottom-24 left-0 right-0" />
  );
}
