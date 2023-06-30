import Spinner from "@/components/loaders/Spinner";
import { Suspense, lazy } from "react";

const Ground3 = lazy(() => import("@/components/svg/Ground3"));

export default function Layer3() {
  return (
    <Suspense fallback={<Spinner />}>
      <Ground3 />
    </Suspense>
  );
}
