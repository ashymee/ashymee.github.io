import useVariants from "@/lib/custom-hooks/useVariants";
import { motion } from "framer-motion";
import HomeInitial from "./HomeInitial";

export default function HomeTitle() {
  const { variantsTitle } = useVariants();

  return (
    <motion.div
      variants={variantsTitle}
      initial="hidden"
      animate="visible"
      transition={{ delay: 0.2, duration: 0.3 }}
      className="h-full flex flex-col items-center justify-center z-[99999]"
    >
      <HomeInitial />
    </motion.div>
  );
}
