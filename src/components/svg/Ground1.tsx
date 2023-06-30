import useVariants from "@/lib/custom-hooks/useVariants";
import { SVGMotionProps, motion } from "framer-motion";
import { Ref, forwardRef } from "react";
import { useDarkMode } from "usehooks-ts";

const Ground1 = forwardRef(
  ({ ...props }: SVGMotionProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => {
    const { isDarkMode } = useDarkMode();
    const { variantsGround1 } = useVariants();

    return (
      <motion.svg
        ref={ref}
        variants={variantsGround1}
        initial="hidden"
        animate="visible"
        viewBox="0 0 8654 1197"
        fill="none"
        className="absolute h-auto left-0 right-0"
        {...props}
      >
        <path
          d="M4006 0.5L3454.22 188.848L3241.81 401.174H2449.22L2238.32 611.986H611.851L266.976 267.241H0V1197H8654V438.676H8165.48L7991.34 264.617H6424.2L6283.07 123.533H6072.92L5949.83 0.5H5799.71H4006Z"
          fill={isDarkMode ? "#151821" : "#fff"}
          style={{
            filter: "drop-shadow(3px 5px 30px rgb(0 0 0 / 0.4))",
          }}
        />
      </motion.svg>
    );
  }
);

Ground1.displayName = "Ground1";

export default Ground1;
