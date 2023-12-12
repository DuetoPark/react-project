import React from 'react';
import styles from '../assets/css/Layout/wrapper.module.css';

export default function Wrapper({children}) {
  return (
    <div className={styles.wrapper}>
      {children}
    </div>
  );
}

