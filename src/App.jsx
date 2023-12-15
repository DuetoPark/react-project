import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TodoList from './Todo/TodoList';
import Welcome from './Layout/Welcome';
import Header from './Layout/Header';
import DarkModeProvider from './Context/DarkModeContext';

export default function App() {
  
  return (
    <div className='app' style={{height: '100vh'}}>
      <BrowserRouter>

        <DarkModeProvider>
          <Header />
        </DarkModeProvider>

        <Routes>
          <Route path='/' element={<Welcome />}></Route>
          <Route path='/todo' element={<TodoList/>}></Route>
        </Routes>
      </BrowserRouter> 
    </div>
  );
}

