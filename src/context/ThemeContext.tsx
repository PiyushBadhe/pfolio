import { createContext, useContext } from 'react';

export type Theme = 'dark' | 'light';

export type ThemeContextType = {
    theme: Theme;
    toggleTheme: () => void;
};

// Create the context with a default undefined value
export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Custom hook to use the theme context
export function useTheme() {
    const context = useContext(ThemeContext);

    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }

    return context;
}