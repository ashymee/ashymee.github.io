import Wrapper from "@/components/layout/Wrapper";
import type { ThemeObject, TimelineData } from "@/index";
import useConstants from "@/lib/custom-hooks/useConstants";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useDarkMode } from "usehooks-ts";
import Island from "../misc/Island";
import { Timeline } from "../misc/Timeline";

export default function ExpPage() {
  const { json_experiences } = useConstants();
  const [data, setData] = useState<TimelineData[]>([]);
  const { isDarkMode } = useDarkMode();


  useEffect(() => {
    const fetchData = async () => {
      await fetch(json_experiences).then(async (res) => {
        const json = await res.json();
        json && setData(json);
      });
    };

    fetchData();
  }, [json_experiences]);

  // const timelineData: TimelineData[] = [
  //   {
  //     startPeriod: "2010-05",
  //     endPeriod: "2018-10",
  //     title: "Title of event/period 1",
  //     subtitle: "Subtitle 1", // optional
  //     group: 1,
  //   },
  //   {
  //     startPeriod: "2015-01",
  //     endPeriod: "2018-12",
  //     title: "Title of event/period 2",
  //     subtitle: "Subtitle 2",
  //     group: 2,
  //   },
  //   {
  //     startPeriod: "2019-01",
  //     endPeriod: "",
  //     title: "Title of event/period 3",
  //     subtitle: "Subtitle 3",
  //     group: 3,
  //   },
  // ];

  const language = "en-US"; // date language format
  const order = "asc"; // in which order timeline goes ('asc' | 'desc')
  const stickyMarginTopDesktop = 50; // e.g. if sticky navbar is present; default: 60 -> results in 60px
  const stickyMarginTopMobile = 10; // default: 15 -> results in 15px

  const theme: ThemeObject = {
    colorAccentPrimary: isDarkMode ? "#d3a418" : "#ff4f04",
    colorAccentSecondary: "#ff4f04", // optional: nice if more than 1 group
    colorText: "#e1e1e1",
    colorBackground: isDarkMode ? "#242528" : "#ccc",
    colorBarHex: isDarkMode ? "#f7cc4b" : "#ff4f04",
    colorGradation: 4, // optional: default is 4
  };

  return (
    <Wrapper>
      <motion.div
        className="page__container"
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5 }}
      >
        <Island title="Experience Log" />

        <div className="flex-1 w-full overflow-y-scroll scrollbar-hide">
          <Timeline
            timelineData={data.map((item) => ({
              ...item,
            }))}
            language={language}
            order={order}
            theme={theme}
            stickyMarginTopDesktop={stickyMarginTopDesktop}
            stickyMarginTopMobile={stickyMarginTopMobile}
          />
        </div>
      </motion.div>
    </Wrapper>
  );
}
