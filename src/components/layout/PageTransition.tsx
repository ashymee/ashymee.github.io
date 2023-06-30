import useStores from "@/lib/custom-hooks/useStores";
import classNames from "classnames";
import { Variants, motion } from "framer-motion";
import { ReactNode } from "react";
import { useDarkMode } from "usehooks-ts";

export type PageTransitionProps = {
  variants: Variants;
  children: ReactNode;
};

export default function PageTransition({
  variants,
  children,
}: PageTransitionProps) {
  const { isDarkMode } = useDarkMode();
  const { showHeavyAssets } = useStores();

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="visible"
      transition={{ delay: 0.1 }}
      className={classNames(
        "wrapper__child_content_page_transition",
        isDarkMode ? "dark" : "light",
        showHeavyAssets ? "heavy" : "lighter"
      )}
    >
      {children}
    </motion.div>
  );
}
