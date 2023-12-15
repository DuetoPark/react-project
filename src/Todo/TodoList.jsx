import React, { useEffect, useReducer, useState } from 'react';
import '../../src/assets/css/Todo/todo.css';
import FilterBtn from './Component/FilterBtn';
import Task from './Component/Task';
import todoReducer from '../Reducer/todoReducer';
import AddForm from './Component/AddForm';
import Wrapper from '../Layout/Wrapper';
import { FcDataBackup } from "react-icons/fc";


export default function TodoList() {
  const _taskType = [
    {type: 'all', text: '전체'},
    {type: 'yet', text: '해야할 일'},
    {type: 'done', text: '완료한 일'},
  ];

  const [_index, setIndex] = useState(() => _indexInit());
  const [_filter, setFilter] = useState('all');

  const [_toDoList, todoDispatch] = useReducer(todoReducer, [], () => _todoInit());

  const handleReset = () => {
    todoDispatch({type: 'reset'});
    setIndex(1);
  }

  useEffect(() => {
    localStorage.setItem('index', _index);
    localStorage.setItem('todo', JSON.stringify(_toDoList));
  }, [_toDoList, _index]);

  return (
    <Wrapper extraStyle='todo-wrapper'>
      <section className='todo'>
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
              <button className='' type='button' onClick={handleReset}><FcDataBackup /></button>
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
              .map((item, index) => (
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

const _indexInit = () => {return +localStorage.getItem('index') || 1};
const _todoInit = () => {
  console.log(123456789);
  return JSON.parse(window.localStorage.getItem('todo')) || [];
};