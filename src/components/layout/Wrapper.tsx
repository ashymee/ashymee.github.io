import PageTransition from "@/components/layout/PageTransition";
import Pencil from "@/components/misc/Pencil";
import useStores from "@/lib/custom-hooks/useStores";
import useVariants from "@/lib/custom-hooks/useVariants";
import { AnimatePresence } from "framer-motion";
import { ReactNode, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useDarkMode } from "usehooks-ts";

type WrapperProps = {
  children: ReactNode;
};

export default function Wrapper({ children }: WrapperProps) {
  const { pathname } = useLocation();
  const [title, setTitle] = useState("");
  const { isDarkMode } = useDarkMode();
  const { pageTransitionType } = useStores();
  const { variantsPageTransition, variantsReversePageTransition } =
    useVariants();

  useEffect(() => {
    let updated = true;

    if (updated) {
      if (isDarkMode) {
        document.body.classList.remove("light");
        document.body.classList.add("dark");
      } else {
        document.body.classList.remove("dark");
        document.body.classList.add("light");
      }
    }

    return () => {
      updated = false;
    };
  }, [isDarkMode]);

  useEffect(() => {
    const split = pathname.split("/");
    const name = split[1];

    setTitle(name);
  }, [pathname]);

  return (
    <AnimatePresence>
      <div className="wrapper">
        <div className="wrapper__child">
          <Pencil title={title} />

          <div className="wrapper__child_content">
            <PageTransition
              variants={
                pageTransitionType === "even"
                  ? variantsPageTransition
                  : variantsReversePageTransition
              }
            >
              {children}
            </PageTransition>
          </div>
        </div>
      </div>
    </AnimatePresence>
  );
}
