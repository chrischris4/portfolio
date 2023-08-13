import React, { createContext, useContext, useState } from 'react';

const NightModeContext = createContext();

export const useNightMode = () => {
    return useContext(NightModeContext);
};

export const NightModeProvider = ({ children }) => {
    const [nightMode, setNightMode] = useState(
        localStorage.getItem('nightMode') === 'true'
    );

    const toggleNightMode = () => {
        const newNightMode = !nightMode;
        setNightMode(newNightMode);
        localStorage.setItem('nightMode', newNightMode.toString());
    };

    return (
        <NightModeContext.Provider
            value={{ nightMode, toggleNightMode }}
        ></NightModeContext.Provider>
    );
};
