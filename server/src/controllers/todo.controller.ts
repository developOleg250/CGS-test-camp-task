import { Response, Request } from "express";
import { ITodo } from "todos.type";
import TodoService from "../services/todo.service";

export class TodoController {
 constructor(private todoService: TodoService) {}

 async getAllTodo(_: Request, res: Response) {
  const getTodos = await this.todoService.findAll();
  res.send(getTodos);
 }

 async createOneTodo(req: Request, res: Response) {
  try{
   
   const todo: ITodo = req.body;
   const createTodo = await this.todoService.create(todo)
   return res.json(createTodo)
  }
  catch(e){
   return res.status(500).json(e)
  }
 }

 async getTodoById(req: Request, res: Response) {
  try{
   const todo: ITodo = req.body;
   const getTodo = await this.todoService.findTodoById(todo)
   return res.json(getTodo)
  }
  catch(e){
   return res.status(500).json(e)
  }
 }

 async updateTodoById(req: Request, res: Response) {
  try{
   const todo: ITodo = req.body;
   const updateTodo  = await this.todoService.update(todo)
   return res.json(updateTodo)
  }
  catch(e){
   return res.status(500).json(e)
  }
 }

 async deleteTodoById(req: Request, res: Response) {
  try{
   const todo: ITodo = req.body;
   const deleteTodo = await this.todoService.delete(todo)
   return res.json("Todo was deleted")
  }
  catch(e){
   return res.status(500).json(e)
  }
 }
}

const todoController = new TodoController(new TodoService());
export default todoController;