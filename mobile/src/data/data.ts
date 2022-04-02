export const QUERY_KEYS = {
  TODO: ['todos'] as const,
};
export const ROUTER_KEYS = {
  HOME: '/' as const,
  CREATE_TODO: '/createTodo' as const,
  EDIT_TODO: '/editTodo/:id' as const,
};

export const SERVER_URL = 'http://localhost:5000';
export const URL_TODO_API = 'api/todos';
