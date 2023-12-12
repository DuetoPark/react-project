import React, { useRef } from 'react';
import styles from './AddForm.module.css';

export default function AddForm({_index, setIndex, todoDispatch}) {
  const $input = useRef(null);

  const handleAdd = (e) => {
    e.preventDefault();

    const _content = $input.current.value;
    if (_content.trim() === '') return;

    // _idx 변경
    setIndex(prev => prev + 1);

    // _toDoList 변경
    todoDispatch({type: 'added', _id: _index, _content, _isDone: false});

    // .todo-input 초기화
    $input.current.value = '';
  };

  return (
    <form className={styles.form} onSubmit={handleAdd}>
      <input
        ref={$input}
        type="text"
        name='todo'
        className={styles.input}
      />

      <button type='submit' className={styles['submit-btn']}>입력</button>
    </form>
  );
}

