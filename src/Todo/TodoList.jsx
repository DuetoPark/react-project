import React, { useEffect, useReducer, useState } from 'react';
import '../../src/assets/css/Todo/todo.css';
import FilterBtn from './Component/FilterBtn';
import Task from './Component/Task';
import todoReducer from '../Reducer/todoReducer';
import AddForm from './Component/AddForm';
import Wrapper from '../Layout/Wrapper';
import { FcDataBackup, FcLandscape, FcNightLandscape } from "react-icons/fc";


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

  const handleReset = () => {
    todoDispatch({type: 'reset'});
    setIndex(1);
  }

  useEffect(() => {
  }, []);

  return (
    <Wrapper>
      <section className={`todo`}>
        <header className='todo-header'>
          <h1 className='todo-title'>멋쟁이들만 쓸 수 있는 오늘의 할 일</h1>

          <div className='control-group'>
            <div className='left-box'>
              {_taskType.map(_item => (
                <FilterBtn
                  filterData={_item}
                  _selectValue={_filter}
                  setFilter={setFilter}
                />
              ))}
            </div>
            
            <div className='right-box'>
              <label className='icon-btn btn-mode'>
                <input
                  className='visually-hidden'
                  type="checkbox"
                  onChange={(e) => {setDarkMode(prev => !prev)}}
                />
                {_darkMode ? <FcLandscape title='라이트 모드' /> : <FcNightLandscape title='다크 모드'/>}
              </label>

              <button className='icon-btn' type='button' onClick={handleReset}><FcDataBackup /></button>
            </div>
          </div>
        </header>

        <div className='todo-body'>
          <ul className='task-list'>
            {
              _toDoList.filter(item => {
                if (_filter === 'yet') return !item.isDone;
                if (_filter === 'done') return item.isDone;
                return true
              })
              .map(item => (
                <li key={item.idx} className='task-item'>
                  <Task _todoData={item} todoDispatch={todoDispatch} />
                </li>
              ))
            }
          </ul>
        </div>

        <footer className='todo-footer'>
          <AddForm 
            _index={_index}
            setIndex={setIndex}
            todoDispatch={todoDispatch}
          />
        </footer>
      </section>
    </Wrapper>
  );
}

// const _indexInit = +window.localStorage.getItem('index');
// const _todoInit = JSON.parse(window.localStorage.getItem('todo'));