export const QUERY_KEYS = {
  TODO: ['todos'],
  POST_ID: (id: string) => ['posts', id],
};
export const ROUTER_KEYS = {
  HOME: 'home',
  CREATE_TODO: 'createTodo',
  EDIT_TODO: 'editTodo',
  LOGIN: 'login',
  REGISTER: 'register',
  TODO_LIST: 'todoList',
};

export const SERVER_URL = 'http://192.168.88.250:5000';
export const URL_TODO_API = 'api/todos';
export const URL_USER_API = 'api/user';
