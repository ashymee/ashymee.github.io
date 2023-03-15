export type SkillProps = "all" | "pemula" | "menengah" | "mahir";

export type UseStoreProps = {
  lang: string;
  setLang: (lang: string) => void;

  filteredSkill: SkillProps;
  setFilteredSkill: (filteredSkill: SkillProps) => void;
};
