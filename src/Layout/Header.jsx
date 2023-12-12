import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../assets/css/Layout/header.module.css';
import Wrapper from './Wrapper';

export default function Header() {
  const _pages = [
    {address: '', text: '홈'},
    {address: 'todo', text: '투두 리스트'},
  ];

  const [_curPage, setCurPage] = useState('');

  return (
    <header className={styles.header}>
      <Wrapper>
        <div className={styles.wrapper}>
          <ul className={styles.list}>
            {_pages.map(({address, text}) => (
              <li key={text} className={styles.menu}>
                <Link 
                  className={`${styles.link} ${_curPage === address && styles['is-active']}`}
                  to={`/${address}`}
                  onClick={() => {setCurPage(address)}}
                >{text}</Link>
              </li>
              )
            )}
          </ul>
        </div>
      </Wrapper>
    </header>
  );
}

