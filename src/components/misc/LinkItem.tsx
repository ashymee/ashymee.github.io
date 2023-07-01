import Separator from "@/components/misc/Separator";
import Tooltip from "@/components/ui/tooltip";
import useStores from "@/lib/custom-hooks/useStores";
import { lists } from "@/lib/data/lists";
import classNames from "classnames";
import { motion } from "framer-motion";
import {
  LucideBookMarked,
  LucideCode2,
  LucideHome,
  LucideMoon,
  LucidePersonStanding,
  LucideSunDim,
} from "lucide-react";
import { Fragment } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDarkMode } from "usehooks-ts";

export default function LinkItem() {
  const { pathname } = useLocation();
  const { pageTransition } = useStores((state) => state.toggle);
  const { isDarkMode, toggle } = useDarkMode();

  const icon = (name: string) => {
    switch (name) {
      case "activities":
        return <LucidePersonStanding />;
      case "education":
        return <LucideBookMarked />;
      case "projects":
        return <LucideCode2 />;
      default:
        return null;
    }
  };

  return (
    <div className="flex-none w-10 flex flex-col items-end z-50">
      <Tooltip content="Home Page" position="right">
        <Link
          to="/"
          className="w-full"
          aria-label="Home Page"
          onClick={pageTransition}
        >
          <div className="w-full h-14 flex relative">
            <div className="w-1/4 h-full bg-slate-900/50 rounded-tl-md" />
            <div
              className={classNames(
                "w-1/2 h-full bg-slate-800/50 flex items-center justify-center",
                pathname === "/" ? "text-orange-500 font-bold" : "text-gray-500"
              )}
            >
              <LucideHome />
            </div>
            <div className="w-1/4 h-full bg-slate-700/50 rounded-tr-md" />
          </div>
          <Separator />
        </Link>
      </Tooltip>

      {lists.map((list, index) => (
        <Tooltip key={index} content={list.title} position="right">
          <Link
            aria-label={`browse ${list.title.toLowerCase()}`}
            to={list.url}
            className="w-full h-10 flex justify-end group"
            onClick={pageTransition}
          >
            <motion.div
              transition={{ type: "spring", duration: 0.3 }}
              className={classNames(
                "flex items-center w-full justify-center h-10 z-50 bg-gradient-to-r",
                index === 0 ? "rounded-t-sm" : "",
                index + 1 === lists.length ? "rounded-b-sm" : ""
              )}
            >
              {pathname === list.url ? (
                <Fragment>
                  <div className="w-1/4 h-10 bg-orange-900" />
                  <div className="w-1/2 h-10 bg-orange-800 flex items-center justify-center text-white font-bold group-active:scale-95">
                    {icon(list.icon)}
                  </div>
                  <div className="w-1/4 h-10 bg-orange-700" />
                </Fragment>
              ) : (
                <Fragment>
                  <div className="w-1/4 h-10 bg-gray-900" />
                  <div className="w-1/2 h-10 bg-gray-800 flex items-center justify-center text-gray-500 group-active:scale-95">
                    {icon(list.icon)}
                  </div>
                  <div className="w-1/4 h-10 bg-gray-700" />
                </Fragment>
              )}
            </motion.div>
          </Link>
        </Tooltip>
      ))}
      <Separator />

      <Tooltip
        content={isDarkMode ? "reverse to light" : "reverse to dark"}
        position="right"
      >
        <div className="flex items-center w-full justify-center h-10">
          <div className="w-1/4 h-10 bg-gray-900" />
          <button
            aria-label="toggle dark mode"
            className="w-1/2 h-10 flex items-center justify-center text-white font-bold group-active:scale-95 bg-gray-800"
            onClick={toggle}
          >
            {isDarkMode ? <LucideSunDim /> : <LucideMoon />}
          </button>
          <div className="w-1/4 h-10 bg-gray-700" />
        </div>
      </Tooltip>
      <Separator />
    </div>
  );
}
