import Wrapper from "@/components/layout/Wrapper";
import type { CertificationObject, EducationObject, IExpanded } from "@/index";
import useConstants from "@/lib/custom-hooks/useConstants";
import { motion } from "framer-motion";
import { LucideX } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import ExpandedContent from "../misc/ExpandedContent";
import ExpandedItem from "../misc/ExpandedItem";
import Island from "../misc/Island";

export default function EduPage() {
  const [eduData, setEduData] = useState<EducationObject[]>([]);
  const [certsData, setCertsData] = useState<CertificationObject[]>([]);
  const [expanded, setExpanded] = useState<IExpanded>("formal");
  const [dialogModal, setDialogModal] = useState<CertificationObject | null>(
    null
  );
  const dialogRef = useRef<HTMLDialogElement>(null);
  const { json_education, json_certification } = useConstants();

  useEffect(() => {
    const fetchEdu = async () => {
      await fetch(json_education).then(async (res) => {
        const json = await res.json();
        json && setEduData(json);
      });
    };
    fetchEdu();

    const fetchCerts = async () => {
      await fetch(json_certification).then(async (res) => {
        const json = await res.json();
        json && setCertsData(json);
      });
    };
    fetchCerts();
  }, [json_certification, json_education]);

  return (
    <Wrapper>
      <motion.div
        className="page__container"
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5 }}
      >
        <Island title="Education Log" />

        <div className="expanded__container">
          <ExpandedItem
            title="Formal Education"
            setExpanded={() =>
              setExpanded((prev) => (prev === "formal" ? null : "formal"))
            }
            isExpanded={expanded === "formal"}
          >
            {eduData.map((item, index) => (
              <ExpandedContent
                key={index}
                title={item.year}
                subTitle={item.level}
                caption={`${item.instance}, ${item.location}`}
                logo={item.logo}
              />
            ))}
          </ExpandedItem>

          <ExpandedItem
            title="Informal Education"
            setExpanded={() =>
              setExpanded((prev) => (prev === "informal" ? null : "informal"))
            }
            isExpanded={expanded === "informal"}
          >
            <dialog
              ref={dialogRef}
              className="rounded-lg backdrop:backdrop-blur-sm w-96 bg-black/10 backdrop-blur-sm"
            >
              <div className="flex justify-end mb-5">
                <button
                  className="text-red-500"
                  onClick={() => {
                    setDialogModal(null);
                    dialogRef.current?.close();
                  }}
                >
                  <LucideX />
                </button>
              </div>
              <div className="">
                <img
                  src={dialogModal?.image}
                  alt={`certification ${dialogModal?.name}`}
                />
              </div>
            </dialog>

            {certsData
              .sort((a, b) => a.year.localeCompare(b.year))
              .reverse()
              .map((item, index) => (
                <ExpandedContent
                  key={index}
                  title={item.year}
                  subTitle={item.name}
                  caption={item.heldBy}
                  subCaption={item.in}
                  logo={item.image}
                  dialogRef={dialogRef}
                  callback={() => setDialogModal(item)}
                />
              ))}
          </ExpandedItem>
        </div>
      </motion.div>
    </Wrapper>
  );
}
