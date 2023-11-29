import {create} from "zustand"

export const languageStore = create((set)=>({
    language: 'en' || 'es',
    setLanguage: (language)=>set({language})
})) 