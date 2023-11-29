import create from 'zustand';

type ThemeStore = {
    theme: string; 
    setTheme: (theme: string) => void; 
};

export const themeStore = create<ThemeStore>((set) => ({
    theme: 'dark' || 'light',
    setTheme: (theme: string) => set({ theme }),
}));