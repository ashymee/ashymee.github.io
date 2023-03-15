import { useTranslation } from "react-i18next";
import { SkillProps } from "../../../utils/types";
import useStore from "../../../utils/useStore";

const skills = [
  {
    name: "NodeJS",
    level: 100,
    status: "Mahir",
  },
  {
    name: "ReactJS",
    level: 100,
    status: "Mahir",
  },
  {
    name: "ReactNative",
    level: 100,
    status: "Mahir",
  },
  {
    name: "NextJS",
    level: 100,
    status: "Mahir",
  },
  {
    name: "Redux",
    level: 100,
    status: "Mahir",
  },
  {
    name: "Typescript",
    level: 100,
    status: "Mahir",
  },
  {
    name: "PWA",
    level: 100,
    status: "Mahir",
  },
  {
    name: "Google Lighthouse",
    level: 100,
    status: "Mahir",
  },
  {
    name: "Firebase",
    level: 100,
    status: "Mahir",
  },
  {
    name: "PostgreSQL",
    level: 100,
    status: "Mahir",
  },
  {
    name: "MySQL",
    level: 100,
    status: "Mahir",
  },
  {
    name: "Redis",
    level: 100,
    status: "Mahir",
  },
  {
    name: "TaiwindCSS",
    level: 100,
    status: "Mahir",
  },
  {
    name: "Bootstrap",
    level: 100,
    status: "Mahir",
  },
  {
    name: "Git",
    level: 100,
    status: "Mahir",
  },
  {
    name: "CI/CD",
    level: 100,
    status: "Mahir",
  },
  {
    name: "Laravel (PHP 8)",
    level: 100,
    status: "Mahir",
  },
  {
    name: "dotNet",
    level: (2 / 3) * 100,
    status: "Menengah",
  },
  {
    name: "Docker",
    level: (2 / 3) * 100,
    status: "Menengah",
  },
  {
    name: "Microservices",
    level: (2 / 3) * 100,
    status: "Menengah",
  },
  {
    name: "MongoDB",
    level: (2 / 3) * 100,
    status: "Menengah",
  },
  {
    name: "Linux OS",
    level: (2 / 3) * 100,
    status: "Menengah",
  },
];

const skillOpts: SkillProps[] = ["all", "pemula", "menengah", "mahir"];

const Skills = () => {
  const { t } = useTranslation();
  const { filteredSkill, setFilteredSkill } = useStore();

  return (
    <div className="w-full">
      <div className="divider">{t("keahlian")}</div>

      <div className="mb-3 flex w-full">
        {skillOpts.map((item, index) => {
          let buttonStyle = "";
          let growthButton = "fx-none";
          let isDisabled = false;

          if (index === 0) {
            buttonStyle = "rounded-l-md";
          } else if (index === skillOpts.length - 1) {
            growthButton = "fx-1";
            buttonStyle = "rounded-r-md w-full";
          } else if (index === 1) {
            isDisabled = true;
            buttonStyle =
              "border-l-0 hover:bg-gray-600 bg-gray-600 text-gray-500 cursor-not-allowed";
          } else {
            buttonStyle = "border-l-0";
          }

          const filteredIsActive = filteredSkill === item ? "bg-gray-500" : "";

          return (
            <button
              key={index}
              className={`${growthButton} ${filteredIsActive} px-2 py-1 border border-gray-600 hover:bg-gray-500 ${buttonStyle}`}
              onClick={() => setFilteredSkill(item)}
              disabled={isDisabled}
            >
              {t(item)}
            </button>
          );
        })}
      </div>

      <div className="flex flex-col justify-center space-y-2">
        {skills
          .filter((item) =>
            filteredSkill === "all"
              ? true
              : item.status.toLocaleLowerCase() === filteredSkill
          )
          .map((language, index) => (
            <div className="text-2xl flex flex-col" key={index}>
              <div className="">
                {language.name}{" "}
                <span className="text-gray-400 text-xl">
                  ({language.status === "Mahir" ? t("mahir") : t("menengah")})
                </span>
              </div>

              {/* <div className="flex items-center justify-center space-x-2">
              <progress
                className="progress progress-primary flex-1"
                value={language.level}
                max="100"
              />
              <div className="flex-none">{language.level.toFixed()}</div>
            </div> */}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Skills;
