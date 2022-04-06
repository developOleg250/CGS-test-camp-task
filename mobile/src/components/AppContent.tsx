import React from 'react';
import { View } from 'react-native';
import { Route, Routes } from 'react-router-dom';
import { ROUTER_KEYS } from '../data/data';
import CreateTodo from './CreateTodo';
import EditTodo from './EditTodo';
import TodoList from './TodoList';

const AppContent = () => {
  return (
    <View>
      <Routes>
        <Route path={ROUTER_KEYS.HOME} element={<TodoList/>} />
        <Route path={ROUTER_KEYS.EDIT_TODO} element={< EditTodo />} />
        <Route path={ROUTER_KEYS.CREATE_TODO} element={<CreateTodo />} />
      </Routes>
    </View>
  );
};

export default AppContent;
