import axios from 'axios';
import { ITodo } from '../type/type.todo';
import HttpService from './http';

class TodoService extends HttpService {
  constructor(
      baseUrl:string,
      fetchingService: typeof axios = axios,
      apiVersion:string,
  ) {
    super(baseUrl,
        fetchingService,
        apiVersion);
  }
  async getTodos(params:string) {
    console.log(params);
    const { data } = await this.get(params);
    return data;
  }
  async getTodosById(id:string) {
    const { data } = await this.get(id);
    return data;
  }
  async updateTodo(id:string, data:ITodo) {
    return await this.put<ITodo>(id, data);
  }
  async addTodo(data:ITodo) {
    return await this.post<ITodo>(data);
  }
  async deleteTodo(id:string) {
    return await this.delete(id);
  }
}
export default TodoService;

