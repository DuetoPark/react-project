import React, { useRef } from 'react';
import styles from './Task.module.css';

export default function Task({_todoData, todoDispatch}) {
  const $task = useRef(null);
  const $content = useRef(null);
  const $doneCheckbox = useRef(null);

  const handleUpdate = (e) => {
    const _id = +$task.current.id;
    const _value = $content.current.value;

    todoDispatch({type: 'updated', _id, _value});
  };

  const handleDone = (e) => {
    const _id = +$task.current.id;
    const _isChecked = $doneCheckbox.current.checked;

    todoDispatch({type: 'done', _id, _isChecked})
  };

  const handleDelete = (e) => {
    const _id = +$task.current.id;

    todoDispatch({type: 'deleted', _id});
  };

  return (
    <article
      ref={$task}
      className={`task ${styles.task}`}
      id={_todoData.idx}
    >
      <input
        ref={$content}
        type="text"
        className={`task-content ${styles.content}`}
        defaultValue={_todoData.content}
        onChange={handleUpdate} />
      
      <div>
        <button
          type='button'
          className='task-delete'
          onClick={handleDelete}>
          지우기
        </button>
        
        <label>
          <input
            ref={$doneCheckbox}
            type='checkbox'
            defaultChecked={_todoData.isDone}
            onChange={handleDone} />
          <span>{_todoData.isDone ? '취소' : '완료'}</span>
        </label>
      </div>
    </article>
  );
}

