import axios from 'axios';
import { useQuery } from 'react-query';
import { QUERY_KEYS, SERVER_URL, URL_TODO_API } from '../data/data';
import TodoService from '../service/todo.service';

const todoService = new TodoService(SERVER_URL, axios, URL_TODO_API);

const fetchTodo = async (id:string) => {
  const { data } = await todoService.getTodos();
  return data;
};

const useTodos = (id:string) => useQuery(QUERY_KEYS.TODO, () => fetchTodo(id));
export default useTodos;
