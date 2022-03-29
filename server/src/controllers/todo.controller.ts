import { Response, Request } from "express";
import {  tryCatchMiddleware } from "../middleware/validate";
import { IdTodo, ITodo } from "todos.type";
import TodoService from "../services/todo.service";

export class TodoController {
 constructor(private todoService: TodoService) {}

 async getAllTodo(req: Request, res: Response) {
  
  tryCatchMiddleware(req, res, async () =>{
   const getTodos = await this.todoService.findAll();
   return res.json(getTodos);
   
  })
 }

 

 async createOneTodo(req: Request, res: Response) {

  tryCatchMiddleware(req, res, async () =>{
   const todo: ITodo = req.body; 
   const createTodo = await this.todoService.create(todo)
   return res.json(createTodo);
   
  } )

 }

 async getTodoById(req: Request, res: Response) {
  tryCatchMiddleware(req, res, async () =>{
   const todo: IdTodo = req.body;
   const getTodo = await this.todoService.findTodoById(todo)
   return res.json(getTodo);
   
  } )
 }

 async updateTodoById(req: Request, res: Response) {
  tryCatchMiddleware(req, res, async () =>{
   const todo: ITodo = req.body;
   const updateTodo  = await this.todoService.update(todo)
   return res.json(updateTodo)
   
  } )
  
 }

 async deleteTodoById(req: Request, res: Response) {
  tryCatchMiddleware(req, res, async () =>{
   const todo: IdTodo = req.body;
   const deleteTodo = await this.todoService.delete(todo)
   return res.json("Todo was deleted")
   
  } )
  
 }
}

const todoController = new TodoController(new TodoService());
export default todoController;