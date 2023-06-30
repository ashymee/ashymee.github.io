import meta from "@/assets/meta.png";
import type { ContactObject } from "@/index";
import useConstants from "@/lib/custom-hooks/useConstants";
import useStores from "@/lib/custom-hooks/useStores";
import useVariants from "@/lib/custom-hooks/useVariants";
import classNames from "classnames";
import { motion } from "framer-motion";
import {
  LucideEgg,
  LucideEggOff,
  LucideShieldClose,
  ShieldQuestion,
} from "lucide-react";
import { useEffect, useState } from "react";
import Tooltip from "../ui/tooltip";
import HomeIcons from "./HomeIcons";

export default function HomeTitle() {
  const { variantsTitle, variantsDescription } = useVariants();
  const { toggle, showHeavyAssets } = useStores();
  const [showDesc, setShowDesc] = useState(false);
  const [data, setData] = useState<ContactObject[]>([]);
  const { json_contact } = useConstants();

  useEffect(() => {
    const fetchData = async () => {
      await fetch(json_contact).then(async (res) => {
        const json = await res.json();
        json && setData(json);
      });
    };

    fetchData();
  }, [json_contact]);

  return (
    <motion.div
      variants={variantsTitle}
      initial="hidden"
      animate="visible"
      transition={{ delay: 0.2, duration: 0.3 }}
      className={classNames(
        "h-full flex flex-col items-center justify-center z-[99999]"
      )}
    >
      <div
        className={classNames(
          "w-60 flex items-center justify-center relative overflow-hidden transition-all duration-200",
          !showHeavyAssets
            ? !showDesc
              ? "scale-125 md:scale-[2]"
              : "scale-110 md:scale-150"
            : "scale-100"
        )}
      >
        <img alt="Ashymee Avatar" src={meta} className="h-40 w-40 z-10" />
        <div
          className={classNames(
            "h-60 w-60 rounded-full absolute translate-y-0.5 top-12 z-0",
            showHeavyAssets ? "bg-black" : "bg-gray-300 dark:bg-[#151821]"
          )}
        />
      </div>

      <div
        className={classNames(
          "pb-2 h-auto text-center text-black dark:text-slate-100 font-wb transition-all duration-200",
          !showHeavyAssets
            ? !showDesc
              ? "pt-10 md:pt-24 text-5xl md:text-[5rem]"
              : "pt-8 md:pt-16 text-3xl md:text-5xl"
            : "pt-5 text-5xl"
        )}
      >
        Aswin Himawan
      </div>

      <div className="text-3xl h-auto text-center text-black dark:text-slate-100">
        <span className="font-agdasima">Full Stack Developer</span>
        <Tooltip
          content={showDesc ? "Hide Description" : "Show Description"}
          position="right"
        >
          <sup>
            <button
              aria-label="toggle description"
              className={classNames("h-5 w-5", showDesc ? "text-red-500" : "")}
              onClick={() => setShowDesc(!showDesc)}
            >
              {showDesc ? <LucideShieldClose /> : <ShieldQuestion />}
            </button>
          </sup>
        </Tooltip>
      </div>

      {showDesc && (
        <motion.div
          variants={variantsDescription}
          initial="hidden"
          animate="visible"
          className="md:w-96 p-3 bg-gray-300 dark:bg-[#151821] rounded-lg mt-2"
        >
          Hi.. I'm self taught full-stack developer from Karawang, Indonesia. I
          build web, mobile & desktop app. Freelancer. JAMSTACK, FOSS & cat
          lovers. Feel free to contact me 👇🏽.
        </motion.div>
      )}

      <div className="flex items-center py-2 text-black dark:text-white">
        {data.map((item, index) => (
          <Tooltip key={index} content={item.title} position="bottom">
            {!item.url ? (
              <button
                aria-label={item.title}
                className={classNames(
                  "h-10 w-10 flex items-center justify-center transition-all relative hover:text-white",
                  "before:content-[''] before:block before:absolute before:top-0 before:left-0 before:h-10 before:w-10 before:rounded-full before:bg-black before:scale-0 hover:before:scale-100 before:opacity-0 hover:before:opacity-100 before:-z-[999] before:duration-200"
                )}
              >
                <HomeIcons icon={item.icon} />
              </button>
            ) : (
              <a
                aria-label={item.title}
                href={item.url}
                rel="noopener"
                target="_blank"
                className={classNames(
                  "h-10 w-10 flex items-center justify-center transition-all relative hover:text-white",
                  "before:content-[''] before:block before:absolute before:top-0 before:left-0 before:h-10 before:w-10 before:rounded-full before:bg-black before:scale-0 hover:before:scale-100 before:opacity-0 hover:before:opacity-100 before:-z-[999] before:duration-200"
                )}
              >
                <HomeIcons icon={item.icon} />
              </a>
            )}
          </Tooltip>
        ))}

        <Tooltip
          content={showHeavyAssets ? "hide background" : "show background"}
          position="bottom"
        >
          <button
            aria-label="toggle background"
            onClick={toggle.toggleHeavyAssets}
            className={classNames(
              "h-10 w-10 flex items-center justify-center transition-all relative hover:text-white",
              "before:content-[''] before:block before:absolute before:top-0 before:left-0 before:h-10 before:w-10 before:rounded-full before:bg-black before:scale-0 hover:before:scale-100 before:opacity-0 hover:before:opacity-100 before:-z-[999] before:duration-200"
            )}
          >
            {showHeavyAssets ? <LucideEgg /> : <LucideEggOff />}
          </button>
        </Tooltip>
      </div>
    </motion.div>
  );
}
