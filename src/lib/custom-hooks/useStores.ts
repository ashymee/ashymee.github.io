import { create } from "zustand";

const useStores = create<Stores>((set) => ({
  pageTransitionType: "even",
  showHeavyAssets: false,
  showPDF: false,
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
    togglePDF: () =>
      set((state) => ({
        ...state.toggle,
        showPDF: state.showPDF ? false : true,
      })),
  },
}));

export type Stores = {
  pageTransitionType: "even" | "odd";
  showHeavyAssets: boolean;
  showPDF: boolean;

  toggle: {
    pageTransition: () => void;
    toggleHeavyAssets: () => void;
    togglePDF: () => void;
  };
};

export default useStores;
