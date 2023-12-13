import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../assets/css/Layout/header.module.css';
import Wrapper from './Wrapper';
import { FcHome, FcTodoList } from "react-icons/fc";

export default function Header() {
  const _pages = [
    {address: '', text: '홈', icon: <FcHome />},
    {address: 'todo', text: '투두 리스트', icon: <FcTodoList />},
  ];

  const [_curPage, setCurPage] = useState('');


  return (
    <header className={styles.header}>
      <Wrapper extraStyle={styles.wrapper}>
        <div className='left-box'>
          <ul className={styles.list}>
            {_pages.map(({address, text, icon}) => (
              <li key={text} className={styles.menu}>
                <Link 
                  className={`${styles.link} ${_curPage === address && styles['is-active']}`}
                  to={`/${address}`}
                  onClick={() => {setCurPage(address)}}
                  >{icon} {text}</Link>
              </li>
              )
              )}
          </ul>
        </div>
      </Wrapper>
    </header>
  );
}

