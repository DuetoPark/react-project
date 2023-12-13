import React, { createContext, useState } from 'react';
export const DarkModeContext = createContext();

export default function DarkModeProvider({children}) {
  const [_darkMode, setDarkMode] = useState(false);
  const toggleMode = () => setDarkMode(prev => !prev);

  return (
    <DarkModeContext.Provider value={{_darkMode, toggleMode}}>
      {children}
    </DarkModeContext.Provider>
  );
}

