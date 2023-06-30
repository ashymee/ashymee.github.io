import useVariants from "@/lib/custom-hooks/useVariants";
import { SVGMotionProps, motion } from "framer-motion";
import { Ref, forwardRef } from "react";
import { useDarkMode } from "usehooks-ts";

const Ground2 = forwardRef(
  ({ ...props }: SVGMotionProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => {
    const { isDarkMode } = useDarkMode();
    const { variantsGround2 } = useVariants();

    return (
      <motion.svg
        ref={ref}
        variants={variantsGround2}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.2 }}
        viewBox="0 0 8654 3253"
        fill="none"
        {...props}
        className="absolute h-auto left-0 right-0"
      >
        <path
          d="M1159.82 0.701416L903.131 257.408V1191.1L804.072 1290.16V1602.43H635.896L413.733 1824.59H0L0 3252.4H8654V1396H7694.91L7450.98 1639.96H6341.64L6093.96 1887.63H2968.62L2683.42 1602.43H2404.4V1129.7L2157.33 845.822V93.0251L2065 0.701416H1159.82Z"
          fill={isDarkMode ? "#1f2d57" : "#15803d"}
          style={{
            filter: "drop-shadow(3px 5px 30px rgb(0 0 0 / 0.4))",
          }}
        />
      </motion.svg>
    );
  }
);

Ground2.displayName = "Ground2";

export default Ground2;
