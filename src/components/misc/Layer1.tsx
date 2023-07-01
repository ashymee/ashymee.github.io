import Spinner from "@/components/loaders/Spinner";
import { Fragment, Suspense, lazy } from "react";
const Ground1 = lazy(() => import("@/components/svg/Ground1"));
const SamuraiSVG = lazy(() => import("@/components/svg/SamuraiSVG"));
const Tree = lazy(() => import("@/components/svg/Tree"));

export default function Layer1() {
  return (
    <Fragment>
      <Suspense fallback={<Spinner />}>
        <Tree />
      </Suspense>
      <Suspense fallback={<Spinner />}>
        <SamuraiSVG />
      </Suspense>
      <Suspense fallback={<Spinner />}>
        <Ground1 />
      </Suspense>
    </Fragment>
  );
}
