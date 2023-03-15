import create from "zustand";
import { UseStoreProps } from "./types";

const useStore = create<UseStoreProps>((set) => ({
  lang: "en",
  setLang: (lang) => set((state) => ({ ...state, lang })),

  filteredSkill: "all",
  setFilteredSkill: (filteredSkill) =>
    set((state) => ({ ...state, filteredSkill })),
}));

export default useStore;
