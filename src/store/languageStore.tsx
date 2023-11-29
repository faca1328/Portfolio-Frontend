import {create} from "zustand"

type LanguageStore = {
    language: string;
    setLanguage: (language: string) => void;
  };
  
  export const languageStore = create<LanguageStore>((set) => ({
    language: 'en' || 'es',
    setLanguage: (language: string) => set({ language }),
  }));
  