import axios from 'axios';
import { useQuery } from 'react-query';
import { SERVER_URL, URL_TODO_API } from '../data/data';
import TodoService from '../service/todo.service';

const todoService = new TodoService(SERVER_URL, axios, URL_TODO_API);

const fetchTodo = async (id:string) => {
  const { data } = await todoService.getTodosById(id);
  return data;
};

const useGetTodoById = (id:string) =>
  useQuery(['posts', id], () => fetchTodo(id));
export default useGetTodoById;
