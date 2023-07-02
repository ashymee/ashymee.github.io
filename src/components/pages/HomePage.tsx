import Spinner from "@/components/loaders/Spinner";
import useStores from "@/lib/custom-hooks/useStores";
import { PDFViewer } from "@react-pdf/renderer";
import { motion } from "framer-motion";
import { Fragment, Suspense, lazy } from "react";
import HomePdf from "../misc/HomePdf";
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
  const { showHeavyAssets, showPDF, toggle } = useStores();

  if (showPDF) {
    return (
      <Suspense fallback={<Spinner />}>
        <PDFViewer>
          <HomePdf />
        </PDFViewer>

        <button
          className="fixed bottom-5 right-5 bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded-md"
          onClick={() => toggle.togglePDF()}
        >
          Back
        </button>
      </Suspense>
    );
  }

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
              <Layer6 />
              <Layer5 />
              <Layer4 />
              <Layer3 />
              <Layer2 />
              <Layer1 />
            </Suspense>
          </Fragment>
        ) : null}
      </motion.div>
    </Wrapper>
  );
}
