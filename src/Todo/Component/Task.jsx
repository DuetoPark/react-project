import React, { useRef } from 'react';
import './Task.css';
import { FcCheckmark, FcFullTrash, FcLikePlaceholder } from "react-icons/fc";

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
      className={`task ${_todoData.isDone ? 'is-done' : ''}`}
      id={_todoData.idx}
    >
      <div className='input-box'>
        <input
          ref={$content}
          type="text"
          className='task-content'
          defaultValue={_todoData.content}
          onChange={handleUpdate}
          placeholder='🙉 악 일정이 비어있어요!!!'
          />
      </div>

      <div className='btn-box'>
        <button
          type='button'
          className='task-delete icon-btn'
          title='삭제하기'
          onClick={handleDelete}>
          <FcFullTrash />
        </button>

        <label className='icon-btn'>
          <input
            ref={$doneCheckbox}
            type='checkbox'
            className='visually-hidden'
            defaultChecked={_todoData.isDone}
            onChange={handleDone} />
          
          {
            _todoData.isDone
              ? <FcCheckmark title='되돌리기' />
              : <FcLikePlaceholder title='완료' />
            }
        </label>
      </div>
    </article>
  );
}

