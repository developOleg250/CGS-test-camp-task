import axios from 'axios';
import { SERVER_URL, URL_TODO_API } from '../data/data';
import TodoService from '../service/todo.service';

export const todoService = new TodoService(SERVER_URL, axios, URL_TODO_API);


