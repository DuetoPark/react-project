import React from 'react';
import '../assets/css/Layout/wrapper.css';

export default function Wrapper({children, extraStyle}) {
  return (
    <div className={`wrapper ${extraStyle || ''}`}>
      {children}
    </div>
  );
}

