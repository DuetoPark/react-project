import React, { createContext, useContext, useEffect, useState } from 'react';
const DarkModeContext = createContext();

export default function DarkModeProvider({children}) {
  const [_darkMode, setDarkMode] = useState(false);
  const toggleMode = () => {
    // NOTE: state 수정
    setDarkMode(!_darkMode);

    // NOTE: 스타일 수정
    updateDarkMode(!_darkMode);
  };

  useEffect(() => {
    // console.log(('theme' in localStorage));
    const isDark = localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
    setDarkMode(isDark);
    updateDarkMode(isDark);
  }, []);

  return (
    <DarkModeContext.Provider value={{_darkMode, toggleMode}}>
      {children}
    </DarkModeContext.Provider>
  );
}

const updateDarkMode = (_darkMode) => {
  if (_darkMode) {
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  } else {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', '');
  }

};

export const useDarkModeContext = () => useContext(DarkModeContext);