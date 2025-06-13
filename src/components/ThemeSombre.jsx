import React, { createContext, useState, useContext } from 'react';

export const ThemeContext = createContext();

export function ThemeSombre({ children }) {
    const [isDarkTheme, setIsDarkTheme] = useState(
        localStorage.getItem('theme') === 'dark' || false
    );

    const toggleTheme = () => {
        setIsDarkTheme((prevTheme) => {
            const newTheme = !prevTheme;
            localStorage.setItem('theme', newTheme ? 'dark' : 'light');
            return newTheme;
        });
    };

    return (
        <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    return useContext(ThemeContext);
}

export default ThemeSombre;
