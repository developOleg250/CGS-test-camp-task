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
  async getTodos() {
    return await this.get('');
  }
  async getTodosById(id:string) {
    return await this.get(id);
  }
  async updateTodo(id:string, data:ITodo) {
    return await this.put(id, data);
  }
  async addTodo(data:ITodo) {
    return await this.post(data);
  }
  async deleteTodo(id:string) {
    return await this.delete(id);
  }
}
export default TodoService;

