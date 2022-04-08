export const QUERY_KEYS = {
  TODO: ['todos'],
  ADD_TODO: ['add_todo'],
  POST_ID: (id: string) => ['posts', id],
  EDIT_TODO: ['edit_todo'],
  DELETE_TODO: ['del_posts'],
  TODO_GET_BY_ID: ['todo_get_by_id'],
  LOGIN: ['login'],
  REGISTER: ['register'],
};
export const ROUTER_KEYS = {
  HOME: '/',
  CREATE_TODO: '/createTodo',
  EDIT_TODO: '/editTodo', // '/editTodo/:id'
  LOGIN: '/login',
  REGISTER: '/register',
  TODO_LIST: '/todoList',
};

export const SERVER_URL = 'http://192.168.88.250:5000';
export const URL_TODO_API = 'api/todos';
export const URL_USER_API = 'api/user';
