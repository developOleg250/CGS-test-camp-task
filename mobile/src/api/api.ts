import axios from 'axios';
import { SERVER_URL, URL_TODO_API } from '../data/data';
import TodoService from '../service/todo.service';

const deleteTodoApi = async (id:any):Promise<void> => {
  try {
    const todoService = new TodoService(SERVER_URL, axios, URL_TODO_API);
    await todoService.deleteTodo(id);
    // console.log('Deleted '+id);
  } catch (e) {
    // console.log(e);
  }
};
// add for bind this
export const handlerDeleteTodoApi = (id:any) => deleteTodoApi(id);

