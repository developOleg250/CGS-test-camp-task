import { useMutation } from 'react-query';
import { todoService } from '../api/api';
import { QUERY_KEYS, ROUTER_KEYS } from '../data/data';

export function useAddTodo(navigate, queryClient) {
  const { mutateAsync } = useMutation(QUERY_KEYS.ADD_TODO,
      (data) => todoService.addTodo(data), {
        onSuccess: () => {
          navigate(ROUTER_KEYS.TODO_LIST);
          queryClient.invalidateQueries(QUERY_KEYS.ADD_TODO);
        },
        onError: (error: any) => {
          console.log(error.message);
        },
      });

  return { mutateAsync };
};


export function useEditTodo(navigate, queryClient) {
  const { mutateAsync } = useMutation(QUERY_KEYS.EDIT_TODO,
      (data) => todoService.updateTodo(data.id, data.data), {
        onSuccess: () => {
          navigate(ROUTER_KEYS.TODO_LIST);
          queryClient.invalidateQueries(QUERY_KEYS.EDIT_TODO);
        },
        onError: (error: any) => {
          console.log(error.message);
        },
      });

  return { mutateAsync };
};


export function useDeleteTodo(navigate, queryClient) {
  const { mutateAsync } = useMutation(QUERY_KEYS.DELETE_TODO,
      (id) => todoService.deleteTodo(id), {
        onSuccess: () => {
          navigate(ROUTER_KEYS.TODO_LIST);
          queryClient.invalidateQueries(QUERY_KEYS.EDIT_TODO);
        },
        onError: (error: any) => {
          console.log(error.message);
        },
      });

  return { mutateAsync };
};
