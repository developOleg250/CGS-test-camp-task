import { useMutation } from 'react-query';
import { todoService, userService } from '../api/api';
import { QUERY_KEYS, ROUTER_KEYS } from '../data/data';

export function useAddTodo(navigator, queryClient) {
  const { mutateAsync } = useMutation(QUERY_KEYS.ADD_TODO,
      (data) => todoService.addTodo(data), {
        onSuccess: () => {
          navigator.navigate(ROUTER_KEYS.CREATE_TODO);
          queryClient.invalidateQueries(QUERY_KEYS.ADD_TODO);
        },
        onError: (error: any) => {
          console.log(error.message);
        },
      });

  return { mutateAsync };
};


export function useEditTodo(navigator, queryClient) {
  const { mutateAsync } = useMutation(QUERY_KEYS.EDIT_TODO,
      (data) => todoService.updateTodo(data.id, data.data), {
        onSuccess: () => {
          navigator.navigate(ROUTER_KEYS.EDIT_TODO);
          queryClient.invalidateQueries(QUERY_KEYS.EDIT_TODO);
        },
        onError: (error: any) => {
          console.log(error.message);
        },
      });

  return { mutateAsync };
};


export function useDeleteTodo(navigator, queryClient) {
  const { mutateAsync } = useMutation(QUERY_KEYS.DELETE_TODO,
      (id) => todoService.deleteTodo(id), {
        onSuccess: () => {
          navigator.navigate(ROUTER_KEYS.TODO_LIST);
          queryClient.invalidateQueries(QUERY_KEYS.EDIT_TODO);
        },
        onError: (error: any) => {
          console.log(error.message);
        },
      });

  return { mutateAsync };
};


export function useLogin(navigator, queryClient) {
  const { mutateAsync } = useMutation(QUERY_KEYS.LOGIN,
      (data) => userService.login(data), {
        onSuccess: () => {
          navigator.navigate(ROUTER_KEYS.TODO_LIST);
          queryClient.invalidateQueries(QUERY_KEYS.LOGIN);
        },
        onError: (error: any) => {
          // console.log(error.message);
        },
      });

  return { mutateAsync };
};


export function useRegister(navigator, queryClient) {
  console.log('test registr');
  const { mutateAsync } = useMutation(QUERY_KEYS.REGISTER,
      (data) => userService.register(data), {
        onSuccess: () => {
          // navigator.navigate(ROUTER_KEYS.TODO_LIST);
          queryClient.invalidateQueries(QUERY_KEYS.REGISTER);
        },
        onError: (error: any) => {
          console.log(error.message);
        },
      });

  return { mutateAsync };
};
