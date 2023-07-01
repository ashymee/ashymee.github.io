import { create } from "zustand";

const useStores = create<Stores>((set) => ({
  pageTransitionType: "even",
  showHeavyAssets: false,
  toggle: {
    pageTransition: () =>
      set((state) => ({
        ...state.toggle,
        pageTransitionType:
          state.pageTransitionType === "even" ? "odd" : "even",
      })),
    toggleHeavyAssets: () =>
      set((state) => ({
        ...state.toggle,
        showHeavyAssets: state.showHeavyAssets ? false : true,
      })),
  },
}));

export type Stores = {
  pageTransitionType: "even" | "odd";
  showHeavyAssets: boolean;

  toggle: {
    pageTransition: () => void;
    toggleHeavyAssets: () => void;
  };
};

export default useStores;
