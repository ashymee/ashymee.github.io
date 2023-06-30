import Spinner from "@/components/loaders/Spinner";
import useStores from "@/lib/custom-hooks/useStores";
import { motion } from "framer-motion";
import { Fragment, Suspense, lazy } from "react";
const Wrapper = lazy(() => import("@/components/layout/Wrapper"));
const HomeTitle = lazy(() => import("@/components/misc/HomeTitle"));
const Layer1 = lazy(() => import("@/components/misc/Layer1"));
const Layer2 = lazy(() => import("@/components/misc/Layer2"));
const Layer3 = lazy(() => import("@/components/misc/Layer3"));
const Layer4 = lazy(() => import("@/components/misc/Layer4"));
const Layer5 = lazy(() => import("@/components/misc/Layer5"));
const Layer6 = lazy(() => import("@/components/misc/Layer6"));
const Sun = lazy(() => import("@/components/misc/Sun"));

export default function HomePage() {
  const { showHeavyAssets } = useStores();

  return (
    <Wrapper>
      <motion.div
        initial="hidden"
        animate="visible"
        className="p-5 flex flex-col h-full relative"
      >
        <Suspense fallback={<Spinner />}>
          <HomeTitle />
        </Suspense>

        {showHeavyAssets ? (
          <Fragment>
            <Suspense fallback={<Spinner />}>
              <Sun />
            </Suspense>
            <Suspense fallback={<Spinner />}>
              <Layer6 />
            </Suspense>
            <Suspense fallback={<Spinner />}>
              <Layer5 />
            </Suspense>
            <Suspense fallback={<Spinner />}>
              <Layer4 />
            </Suspense>
            <Suspense fallback={<Spinner />}>
              <Layer3 />
            </Suspense>
            <Suspense fallback={<Spinner />}>
              <Layer2 />
            </Suspense>
            <Suspense fallback={<Spinner />}>
              <Layer1 />
            </Suspense>
          </Fragment>
        ) : null}
      </motion.div>
    </Wrapper>
  );
}
