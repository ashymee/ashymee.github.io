import useResolution from "@/lib/custom-hooks/useResolution";
import { Variants } from "framer-motion";
import { useDarkMode } from "usehooks-ts";

const useVariants = () => {
  const { isMobile } = useResolution();
  const { isDarkMode } = useDarkMode();

  const variantsPageTransition: Variants = {
    hidden: { marginTop: -1000 },
    visible: { marginTop: 0 },
  };

  const variantsReversePageTransition = {
    hidden: { marginBottom: -1000 },
    visible: { marginBottom: 0 },
  };

  const variantsTitle: Variants = {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    visible: {
      scale: 1,
      opacity: 1,
    },
  };

  const variantsSamuraiRight: Variants = {
    hidden: { right: -500 },
    visible: { right: isMobile ? -230 : -220 },
  };

  const variantsGround1 = {
    hidden: { bottom: -500 },
    visible: { bottom: isMobile ? 0 : -70 },
  };

  const variantsGround2 = {
    hidden: { bottom: -500 },
    visible: { bottom: isMobile ? 0 : -80 },
  };

  const variantsGround3 = {
    hidden: { bottom: -500 },
    visible: { bottom: isMobile ? 0 : -96 },
  };

  const variantsGround4 = {
    hidden: { bottom: -500 },
    visible: { bottom: isMobile ? 0 : -96 },
  };

  const variantsGround5 = {
    hidden: { bottom: -500 },
    visible: { bottom: isMobile ? 0 : -144 },
  };

  const variantsGround6 = {
    hidden: { bottom: -500 },
    visible: { bottom: isMobile ? 0 : -144 },
  };

  const variantsTree: Variants = {
    hidden: { left: -500 },
    visible: { left: isMobile ? -233.6 : -240 },
  };

  const variantsScale: Variants = {
    hidden: { scale: 0 },
    visible: { scale: 1 },
  };

  const variantsEagle: Variants = {
    hidden: { scale: 0 },
    visible: { scale: 1, opacity: isDarkMode ? 0 : 1 },
  };

  const variantsDescription: Variants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { scale: 1, opacity: 1 },
  };

  return {
    variantsPageTransition,
    variantsReversePageTransition,
    variantsTitle,
    variantsSamuraiRight,
    variantsGround1,
    variantsGround2,
    variantsGround3,
    variantsGround4,
    variantsGround5,
    variantsGround6,
    variantsTree,
    variantsScale,
    variantsEagle,
    variantsDescription,
  };
};

export default useVariants;
