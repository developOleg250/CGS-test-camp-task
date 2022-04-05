import axios from 'axios';
import { SERVER_URL, URL_TODO_API, URL_USER_API } from '../data/data';
import TodoService from '../service/todo.service';
import UserService from '../service/user.service';

export const todoService = new TodoService(SERVER_URL, axios, URL_TODO_API);
export const userService = new UserService(SERVER_URL, axios, URL_USER_API);

