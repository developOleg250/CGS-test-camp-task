import axios from 'axios';
import { SERVER_URL, URL_TODO_API } from '../data/data';
import TodoService from '../service/todo.service';
import { ITodo } from '../type/type.todo';

const todoService = new TodoService(SERVER_URL, axios, URL_TODO_API);

const fetchTodo = async (id:string, data:ITodo) => {
  await todoService.updateTodo(id, data);
};

const useUpdateTodoById = (id:string, data:ITodo) => fetchTodo(id, data);
export default useUpdateTodoById;
