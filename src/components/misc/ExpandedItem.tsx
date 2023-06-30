import type { ExpandedItemProps } from "@/index";
import classNames from "classnames";
import { motion } from "framer-motion";
import { LucideChevronRight } from "lucide-react";

export default function ExpandedItem({
  title,
  setExpanded,
  isExpanded,
  children,
}: ExpandedItemProps) {
  return (
    <div className="w-full flex flex-col">
      <div
        className="cursor-pointer mb-3 flex items-center gap-x-2"
        onClick={setExpanded}
      >
        <div className="">
          <LucideChevronRight
            className={classNames(
              isExpanded ? "rotate-90" : "",
              "transition-all"
            )}
          />
        </div>
        <div className={isExpanded ? "text-orange-500" : ""}>{title}</div>
      </div>

      <motion.div
        animate={{ display: isExpanded ? "flex" : "none" }}
        className="pl-5 flex-col gap-y-3"
      >
        {children}
      </motion.div>
    </div>
  );
}
