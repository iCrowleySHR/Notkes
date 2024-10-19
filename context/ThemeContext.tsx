import React from 'react';
import { darkTheme } from "@/constants/darkTheme";
import { lightTheme } from "@/constants/lightTheme";
import { createContext, ReactNode, useEffect, useState } from "react";
import { ThemeProvider as ThemeProviderStyled } from "styled-components/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const ThemeContext = createContext({
    theme: 'light',
    toggleTheme: () => { },
});

const themes = {
    dark: darkTheme,
    light: lightTheme,
}

interface ThemeProviderProps {
    children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    type ThemeType = 'light' | 'dark';

    const [theme, setTheme] = useState<ThemeType>('light');

    useEffect(() => {
        loadTheme()
    }, []
    )

    async function loadTheme() {
        const savedTheme = await AsyncStorage.getItem('@theme');

        if (savedTheme) {
            setTheme(savedTheme as ThemeType);
        }
    }

    function toggleTheme() {
        const selectTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(selectTheme as ThemeType);
        AsyncStorage.setItem('@theme', selectTheme);
        return selectTheme;
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <ThemeProviderStyled theme={themes[theme] || themes.light}>
                {children}
            </ThemeProviderStyled>
        </ThemeContext.Provider>
    );

};