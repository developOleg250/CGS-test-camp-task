import { Response, Request } from "express";
import { IdTodo, ITodo } from "todos.type";
import TodoService from "../services/todo.service";

export class TodoController {
 constructor(private todoService: TodoService) {}

 async getAllTodo(req: Request, res: Response){
    const getTodos = await this.todoService.findAll();
    return res.json(getTodos);
  }

 async createOneTodo(req: Request, res: Response) {
    const todo: ITodo = req.body; 
    const createTodo = await this.todoService.create(todo)
    return res.json(createTodo);
  }

 async getTodoById(req: Request, res: Response) {
    const { id } = req.params;
    
    const getTodo = await this.todoService.findTodoById(id)
    return res.json(getTodo);
  }

 async updateTodoById(req: Request, res: Response) {
    const todo: ITodo = req.body;
    const { id } = req.params;
    const updateTodo  = await this.todoService.update(todo, id)
    return res.json(updateTodo) 
  }

 async deleteTodoById(req: Request, res: Response) {
    const { id } = req.params;
    const deleteTodo = await this.todoService.delete(id)
    return res.json("Todo was deleted")
  }
}

const todoController = new TodoController(new TodoService());
export default todoController;