import React, { useEffect, useState } from 'react';

export default function TodoList() {
  /**
   * 어떤 스테이트가 있을까?
   * 
   * 다크/라이트
   * 간편/보통
   * 할일 리스트 - 내용, 완료여부
   */

  const [_darkMode, setDarkMode] = useState(false);
  const [_index, setIndex] = useState(1);
  const [_toDoList, setToDoList] = useState([]);
  const [_filter, setFilter] = useState('all');


  const setLocalStorage = () => {
    // LocalStorage에 저장
    window.localStorage.setItem('todo', JSON.stringify(_toDoList));
    window.localStorage.setItem('index', _index);
  };

  const handleDone = (e) => {
    const $doneBtn = e.currentTarget;
    const _id = +$doneBtn.closest('.todo').id;

    // _toDoList 변경
    const _newList = [..._toDoList];
    const _idx = _toDoList.findIndex(todo => todo.idx === _id);
    _newList[_idx].isDone = $doneBtn.checked;

    setToDoList(_newList);

    setLocalStorage();
  };

  const handleDelete = (e) => {
    const $deleteBtn = e.currentTarget;
    const _id = +$deleteBtn.closest('.todo').id;

    // _toDoList 변경
    const _newList = [..._toDoList];
    const _idx = _toDoList.findIndex(todo => todo.idx === _id);
    _newList.splice(_idx, 1);

    setToDoList(_newList);

    setLocalStorage();
  };

  const handleSubmit = (e) => {
    // submit 기본동작 제거
    e.preventDefault();

    
    // _toDoList 변경
    const $todoInput = document.forms[0].querySelector('.todo-input');
    const _content = $todoInput.value;

    if (_content.trim() == '') return;

    setIndex(prev => prev + 1);
    setToDoList(prev => (
      [
        ...prev,
        {
          idx: _index,
          content: _content,
          isDone: false
        }
      ]
    ));

    // .todo-input 초기화
    $todoInput.value = '';

    setLocalStorage();
  };

  const handleChange = (e) => {
    const $todoContent = e.currentTarget;
    const _id = +$todoContent.closest('.todo').id;
  
    // _toDoList 변경
    const _newList = [..._toDoList];
    const _idx = _toDoList.findIndex(todo => todo.idx === _id);
    _newList[_idx].content = $todoContent.value;

    setToDoList(_newList);

    setLocalStorage();
  };

  const handleFilter = (e) => {
    setFilter(e.currentTarget.dataset.value);
  };

  useEffect(() => {
    setToDoList(JSON.parse(window.localStorage.getItem('todo')));
    setIndex(+window.localStorage.getItem('index'));
  }, []);

  return (
    <div className={_darkMode ? 'dark-mode' : ''}>
      <section>
        <header>
          <div>
            <h1>멋쟁이들만 쓸 수 있는 오늘의 할 일</h1>
          </div>
          
          <div>
            <ul>
              <li>
                <button type='button' data-value='all' onClick={handleFilter}>전체</button>
              </li>
              <li>
                <button type='button' data-value='yet' onClick={handleFilter}>해야할 일</button>
              </li>
              <li>
                <button type='button' data-value='done' onClick={handleFilter}>한 일</button>
              </li>
            </ul>
          </div>

          <div>
            <input type="checkbox" onChange={(e) => {setDarkMode(prev => !prev)}} />
            {_darkMode ? '라이트모드' : '다크모드'}
          </div>
          <div>
            <input type="checkbox" />
            간편모드
          </div>
        </header>

        <div>
          <ul>
            {_toDoList
            .filter(item => {
              if (_filter === 'all') return true;
              else if (_filter === 'yet' && !item.isDone) return true;
              else if (_filter === 'done' && item.isDone) return true;
            })
            .map(item => (
              <li key={item.idx}>
                <article className='todo' id={item.idx}>
                  <input type="text" className='todo-content' defaultValue={item.content} onChange={handleChange} />
                  <div>
                    <button type='button' className='todo-delete' onClick={handleDelete}>지우기</button>
                    <input
                      type='checkbox'
                      defaultChecked={item.isDone}
                      onChange={handleDone} />
                    <span>{item.isDone ? '되돌리기' : '완료'}</span>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </div>

        <footer>
          <form onSubmit={handleSubmit}>
            <input type="text" name='todo' className='todo-input' />
            <button type=''>입력</button>
          </form>
        </footer>
      </section>
    </div>
  );
}

