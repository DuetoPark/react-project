import React from 'react';
import { FcLandscape, FcNightLandscape } from "react-icons/fc";
import { useDarkModeContext } from '../../Context/DarkModeContext';
import './ThemeBtn.css';

export default function ThemeBtn() {
  const {_darkMode, toggleMode} = useDarkModeContext();

  return (
    <label className='btn-wrapper'>
      <input
        className='visually-hidden input-mode'
        id={_darkMode ? 'dark-mode': ''}
        type="checkbox"
        onChange={toggleMode}
      />
      <div className='btn-icon'>
        {
          _darkMode
            ? <FcLandscape title='라이트 모드' />
            : <FcNightLandscape title='다크 모드'/>
        }
      </div>
    </label>
  );
}

