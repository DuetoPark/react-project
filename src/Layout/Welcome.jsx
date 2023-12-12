import React from 'react';
import styles from '../assets/css/Layout/welcome.module.css';
import Wrapper from './Wrapper';


export default function Welcome() {
  return (
    <section className={styles.welcome}>
      <Wrapper>
        <div className={styles.box}>
          <p>
            안녕하세요~!<br />
            꼼짝마! 주머니 속의 돈을 저에게 주세요
          </p>

          <div className={styles['image-group']}>
            <img src="/images/img-money.jpeg" alt="give me money" />
            <p>많이 주세요</p>
          </div>
        </div>
      </Wrapper>
    </section>
  );
}

