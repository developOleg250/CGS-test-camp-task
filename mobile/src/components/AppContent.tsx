import React from 'react';
import { View } from 'react-native';
import { Route, Routes } from 'react-router-dom';
import { ROUTER_KEYS } from '../data/data';
import Login from './auth/Login';
import Register from './auth/Register';
import StartPage from './auth/StartPage';
import CreateTodo from './CreateTodo';
import EditTodo from './EditTodo';
// import TodoList from './TodoList';

const AppContent = () => {
  return (
    <Routes>
      <Route path={ROUTER_KEYS.HOME} element={<StartPage/>} />
      <Route path={ROUTER_KEYS.EDIT_TODO} element={< EditTodo />} />
      <Route path={ROUTER_KEYS.CREATE_TODO} element={<CreateTodo />} />
      <Route path={ROUTER_KEYS.LOGIN} element={<Login/>} />
      <Route path={ROUTER_KEYS.REGISTER} element={<Register />} />
    </Routes>
  );
};

export default AppContent;
