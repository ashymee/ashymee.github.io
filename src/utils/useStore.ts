import create from 'zustand';
import { UseStoreProps } from './types';

const useStore = create<UseStoreProps>((set) => ({
  lang: 'en',
  setLang: (lang: string) => set((state) => ({ ...state, lang })),
}));

export default useStore;
