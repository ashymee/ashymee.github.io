import useResolution from "@/lib/custom-hooks/useResolution";
import classNames from "classnames";
import { SVGMotionProps, Variants, motion } from "framer-motion";
import { Ref, forwardRef, useState } from "react";
import { useDarkMode } from "usehooks-ts";

export type SunProps = {
  fillColor1?: string;
  fillColor2?: string;
  fillColor3?: string;
  fillColor4?: string;
};

const Sun = forwardRef(
  (
    { ...props }: SunProps & SVGMotionProps<SVGSVGElement>,
    ref: Ref<SVGSVGElement>
  ) => {
    const [isHovered, setIsHovered] = useState(false);
    const { isMobile } = useResolution();
    const { toggle, isDarkMode } = useDarkMode();

    const variantsSun = {
      hidden: { scale: 0, top: -300 },
      visible: { scale: 0.5, top: isMobile ? -190 : -150 },
    };

    const variantsChild: Variants = {
      hidden: { opacity: 0 },
      visible: { opacity: isHovered ? 0 : 1 },
    };

    return (
      <motion.svg
        ref={ref}
        variants={variantsSun}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.7 }}
        viewBox="0 0 2988 2988"
        fill="none"
        className="absolute left-0 h-96 w-full flex items-center justify-center z-[999]"
        {...props}
      >
        <g id="sun">
          <motion.path
            id="4"
            variants={variantsChild}
            initial="hidden"
            animate="visible"
            transition={{ delay: isHovered ? 0.3 : 0.73 }}
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M1493.59 0C2318.47 0 2987.18 668.711 2987.18 1493.59C2987.18 2318.49 2318.47 2987.18 1493.59 2987.18C668.697 2987.18 0 2318.49 0 1493.59C0 668.711 668.697 0 1493.59 0Z"
            fill={isDarkMode ? "#5C80D0" : "rgb(253 186 116 / 0.3)"}
          />
          <motion.path
            id="3"
            variants={variantsChild}
            initial="hidden"
            animate="visible"
            transition={{ delay: isHovered ? 0.25 : 0.72 }}
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M1493.87 309C2148.25 309 2678.72 839.479 2678.72 1493.87C2678.72 2148.25 2148.25 2678.73 1493.87 2678.73C839.492 2678.73 309 2148.25 309 1493.87C309 839.479 839.492 309 1493.87 309Z"
            fill={isDarkMode ? "#7795D8" : "rgb(253 186 116 / 0.4)"}
          />
          <motion.path
            id="2"
            variants={variantsChild}
            initial="hidden"
            animate="visible"
            transition={{ delay: isHovered ? 0.2 : 0.71 }}
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M1494.13 618C1978 618 2370.26 1010.25 2370.26 1494.13C2370.26 1978 1978 2370.26 1494.13 2370.26C1010.26 2370.26 618 1978 618 1494.13C618 1010.25 1010.26 618 1494.13 618Z"
            fill={isDarkMode ? "#A1B9ED" : "rgb(253 186 116 / 0.5)"}
          />
          <motion.path
            id="1"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M1494.4 2061.81C1806.91 2061.81 2061.81 1806.91 2061.81 1494.4C2061.81 1181.88 1806.91 927 1494.4 927C1181.88 927 927 1181.88 927 1494.4C927 1806.91 1181.88 2061.81 1494.4 2061.81Z"
            className={classNames(
              "duration-300 transition-colors z-[999] cursor-pointer active:scale-[0.98]",
              isHovered ? "fill-orange-400" : isDarkMode ? "white" : "#fb923c"
            )}
            fill={isDarkMode ? "white" : "#fb923c"}
            onClick={toggle}
            onPointerEnter={() => {
              setIsHovered(true);
            }}
            onPointerLeave={() => {
              setIsHovered(false);
            }}
            style={{
              filter: "drop-shadow(0 15px 50px rgb(0 0 0 / 0.3))",
            }}
          />
        </g>
      </motion.svg>
    );
  }
);

Sun.displayName = "Sun";

export default Sun;
