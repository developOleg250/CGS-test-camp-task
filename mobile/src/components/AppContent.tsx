import React from 'react';
import { Button, Text, View } from 'react-native';
import { Route, Routes } from 'react-router-dom';
import { ROUTER_KEYS } from '../data/data';
import CreateTodo from './CreateTodo';
import EditTodo from './EditTodo';
import TodoList from './TodoList';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StartPage from './auth/StartPage';
import Login from './auth/Login';
import Register from './auth/Register';


const Stack = createNativeStackNavigator();

const AppContent = () => {
  return (
    <Stack.Navigator initialRouteName={ROUTER_KEYS.HOME}>
      <Stack.Screen name={ROUTER_KEYS.HOME} component={StartPage} />
      <Stack.Screen name={ROUTER_KEYS.LOGIN} component={Login} />
      <Stack.Screen name={ROUTER_KEYS.REGISTER} component={Register} />
      <Stack.Screen name={ROUTER_KEYS.TODO_LIST} component={TodoList} />
      <Stack.Screen name={ROUTER_KEYS.CREATE_TODO} component={CreateTodo} />
      <Stack.Screen name={ROUTER_KEYS.EDIT_TODO} component={EditTodo} />
    </Stack.Navigator>

  );
};

export default AppContent;


