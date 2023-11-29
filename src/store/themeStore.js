import {create} from "zustand"

export const themeStore = create((set)=>({
    theme: 'dark' || 'light',
    setTheme: (theme)=>set({theme})
})) 