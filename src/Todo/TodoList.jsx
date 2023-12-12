import React, { useEffect, useReducer, useState } from 'react';
import '../../src/assets/css/Todo/todo.css';
import FilterBtn from './Component/FilterBtn';
import Task from './Component/Task';
import todoReducer from '../Reducer/todoReducer';

export default function TodoList() {
  /**
   * 어떤 스테이트가 있을까?
   * 
   * 다크/라이트
   * 간편/보통
   * 할일 리스트 - 내용, 완료여부
   */

  const _taskType = [
    {type: 'all', text: '전체'},
    {type: 'yet', text: '해야할 일'},
    {type: 'done', text: '완료한 일'}
  ];

  const [_darkMode, setDarkMode] = useState(false);
  const [_index, setIndex] = useState(1);
  const [_filter, setFilter] = useState('all');

  const [_toDoList, todoDispatch] = useReducer(todoReducer, []);

  const handleAdd = (e) => {
    e.preventDefault();

    const $todoInput = document.forms[0].querySelector('.todo-input');
    const _content = $todoInput.value;

    if (_content.trim() === '') return;

    // _idx 변경
    setIndex(prev => prev + 1);

    // _toDoList 변경
    todoDispatch({type: 'added', _id: _index, _content, _isDone: false});

    // .todo-input 초기화
    $todoInput.value = '';
  };

  const handleReset = () => {
    todoDispatch({type: 'reset'});
    setIndex(1);
  }

  useEffect(() => {
  }, []);

  return (
    <div className={_darkMode ? ' dark-mode' : ''}>
      <section className='todo'>
        <header className='todo-header'>
          <h1 className='todo-title'>멋쟁이들만 쓸 수 있는 오늘의 할 일 🤔</h1>

          <div className='control-group'>
            <div className='left-box'>
              {_taskType.map(_item => (
                <FilterBtn filterData={_item} _selectValue={_filter}
              setFilter={setFilter} />
              ))}
            </div>
            
            <div className='right-box'>
              <label>
                <input type="checkbox" onChange={(e) => {setDarkMode(prev => !prev)}} />
                <span>{_darkMode ? '라이트모드' : '다크모드'}</span>
              </label>
              
              <button type='button' onClick={handleReset}>초기화</button>
            </div>
          </div>
        </header>

        <div className='todo-body'>
          <ul className='task-list'>
            {_toDoList.filter(item => {
                if (_filter === 'yet') return !item.isDone;
                if (_filter === 'done') return item.isDone;
                return true
              })
              .map(item => (
                <li key={item.idx} className='task-item'>
                  <Task _todoData={item} todoDispatch={todoDispatch} />
                </li>
              ))}
          </ul>
        </div>

        <footer className='todo-footer'>
          <form onSubmit={handleAdd}>
            <input type="text" name='todo' className='todo-input' />
            <button type=''>입력</button>
          </form>
        </footer>
      </section>
    </div>
  );
}

// const _indexInit = +window.localStorage.getItem('index');
// const _todoInit = JSON.parse(window.localStorage.getItem('todo'));