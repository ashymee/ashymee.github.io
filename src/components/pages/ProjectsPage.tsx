import Wrapper from "@/components/layout/Wrapper";
import useConstants from "@/lib/custom-hooks/useConstants";
import { motion } from "framer-motion";
import { LucideX } from "lucide-react";
import { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Island from "../misc/Island";
import Accordion, {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

type DataProps = {
  title: string;
  vendor: string;
  url: string;
  kind: string;
  tech: string[];
};

type ProjectsData = {
  year: 2019;
  data: DataProps[];
};

export default function ProjectsPage() {
  const [data, setData] = useState<ProjectsData[]>([]);
  const [showDetail, setShowDetail] = useState<DataProps | null>(null);
  const { json_projects } = useConstants();

  useEffect(() => {
    const fetcher = async () => {
      await fetch(json_projects).then(async (res) => {
        const json = await res.json();
        json && setData(json);
      });
    };

    fetcher();
  }, [json_projects]);

  return (
    <Wrapper>
      <motion.div
        className="bg-gray-200 dark:bg-slate-800 shadow-2xl rounded-lg flex flex-col items-center gap-y-2 h-full text-black dark:text-white"
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5 }}
      >
        <Island title="Projects Log" />

        <div className="p-5 w-full h-full overflow-hidden">
          <Accordion>
            {data
              .map((item, index) => (
                <AccordionItem value={(index + 1).toString()} key={index}>
                  <AccordionTrigger
                    className="hover:bg-gray-950/10 dark:hover:bg-gray-100/10 px-2"
                    onClick={() => setShowDetail(null)}
                  >
                    {item.year}
                  </AccordionTrigger>

                  <AccordionContent>
                    {!showDetail &&
                      item.data.length > 0 &&
                      item.data.map((subItem, subIndex) => (
                        <button
                          key={subIndex}
                          className="w-full hover:text-blue-500 flex items-center duration-500 group mb-2"
                          onClick={() => setShowDetail(subItem)}
                        >
                          <div className="-mr-2 opacity-0 group-hover:mr-2 group-hover:opacity-100 transition-all duration-300">
                            🟢
                          </div>
                          <b>
                            {subItem.title}{" "}
                            {subItem.vendor === "Personal" && (
                              <sup className="text-red-500">🟢</sup>
                            )}
                          </b>
                        </button>
                      ))}

                    {showDetail && (
                      <motion.div className="w-full bg-gray-300 dark:bg-[#151821] rounded-lg p-5">
                        <div className="flex gap-x-2 items-center justify-between mb-3">
                          <div className="font-bold text-xl">
                            {showDetail.title}
                          </div>
                          <button
                            onClick={() => setShowDetail(null)}
                            className="h-6 w-6 rounded-full bg-rose-500 flex items-center justify-center"
                          >
                            <LucideX className="text-xs" />
                          </button>
                        </div>

                        <div className="w-full mb-5">
                          {showDetail.vendor !== "Personal" ? (
                            <Fragment>
                              <div className="">Vendor:</div>
                              <div className="font-bold">
                                {showDetail.vendor}
                              </div>
                            </Fragment>
                          ) : (
                            "Personal Project"
                          )}
                        </div>

                        <div className="w-full mb-5">
                          <div className="">Stack:</div>
                          <div className="flex gap-x-2">
                            {showDetail.tech.map((item, index) => (
                              <div
                                key={item}
                                className="flex gap-x-2 bg-gray-400 dark:bg-slate-800 rounded-md px-1"
                              >
                                {item}
                                {index + 1 < showDetail.tech.length ? "," : ""}
                              </div>
                            ))}
                          </div>
                        </div>

                        {showDetail.url && (
                          <Link
                            to={showDetail.url}
                            target="_blank"
                            rel="noopener"
                          >
                            Link
                          </Link>
                        )}
                      </motion.div>
                    )}
                  </AccordionContent>
                </AccordionItem>
              ))
              .reverse()}
          </Accordion>
        </div>
      </motion.div>
    </Wrapper>
  );
}
