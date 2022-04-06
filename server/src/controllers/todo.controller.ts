import { Response, Request } from "express";
import { IdTodo, ITodo } from "todos.type";
import TodoService from "../services/todo.service";

export class TodoController {
 constructor(private todoService: TodoService) {}

 async getAllTodo(req: Request, res: Response){
  return  await this.todoService.findAll(req.user.id,req.query );
  }

 async createOneTodo(req: Request, res: Response) {
    const todo: ITodo = req.body; 
    return await this.todoService.create(todo, req.user.id)
  }

 async getTodoById(req: Request, res: Response) {
    const { id } = req.params;
    return await this.todoService.findTodoById(id)
  }

 async updateTodoById(req: Request, res: Response) {
    const todo: ITodo = req.body;
    const { id } = req.params;
    return await this.todoService.update(todo, id)
  }

 async deleteTodoById(req: Request, res: Response) {
    const { id } = req.params;
    return await this.todoService.delete(id)
  }
}

const todoController = new TodoController(new TodoService());
export default todoController;
