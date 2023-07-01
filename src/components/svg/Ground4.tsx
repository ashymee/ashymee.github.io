import useVariants from "@/lib/custom-hooks/useVariants";
import { SVGMotionProps, motion } from "framer-motion";
import { Ref, forwardRef } from "react";
import { useDarkMode } from "usehooks-ts";

const Ground4 = forwardRef(
  ({ ...props }: SVGMotionProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => {
    const { isDarkMode } = useDarkMode();
    const { variantsGround4 } = useVariants();

    return (
      <motion.svg
        ref={ref}
        variants={variantsGround4}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.3 }}
        viewBox="0 0 507 261"
        fill="none"
        {...props}
      >
        <path
          id="ground-4"
          d="M426.672 3.2119e-07L419.527 7.14487V22.0287L412.282 29.2725V47.531L403.647 56.1638V48.4106L398.45 43.2124V19.5657L394.27 15.384H391.142V53.6864L387.624 57.2048V83.7624H379.889L369.775 93.8748H200.481L190.94 84.3328H30.5737L13.8858 101.02H0V260.864H507V90.6209H483.309L476.45 83.7624H469.061L465.544 80.2449H456.396V43.4862L449.451 36.539V12.7072L436.743 3.2119e-07H426.672Z"
          fill={isDarkMode ? "#2E4CA2" : "#22c55e"}
          style={{
            filter: "drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4))",
          }}
        />
      </motion.svg>
    );
  }
);

Ground4.displayName = "Ground4";

export default Ground4;
