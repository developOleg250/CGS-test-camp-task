export const QUERY_KEYS = {
  TODO: ['todos'],
  POST_ID: (id: string) => ['posts', id],
};
export const ROUTER_KEYS = {
  HOME: '/',
  CREATE_TODO: '/createTodo',
  EDIT_TODO: '/editTodo/:id',
  LOGIN: '/login',
  REGISTER: '/register',
  TODO_LIST: '/todoList',
};

export const SERVER_URL = 'http://localhost:5000';
export const URL_TODO_API = 'api/todos';
export const URL_USER_API = 'api/user';
