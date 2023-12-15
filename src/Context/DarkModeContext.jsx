import React, { createContext, useContext, useState } from 'react';
const DarkModeContext = createContext();

export default function DarkModeProvider({children}) {
  const [_darkMode, setDarkMode] = useState(false);
  const toggleMode = () => setDarkMode(prev => !prev);

  return (
    <DarkModeContext.Provider value={{_darkMode, toggleMode}}>
      {children}
    </DarkModeContext.Provider>
  );
}

export const useDarkModeContext = () => useContext(DarkModeContext);