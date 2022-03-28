import { Response, Request } from "express";
import TodoService from "../services/todo.service";

export class TodoController {
 constructor(private todoService: TodoService) {}
 async getAllTodo(_: Request, res: Response) {
  // TODO: Write your implementation here
  const getTodos = await this.todoService.findAll();
  res.send(getTodos);
 }
 async createOneTodo(req: Request, res: Response) {
  try{
   //add validate
   const createTodo = await this.todoService.create(req.body)
   return res.json(createTodo)
  }
  catch(e){
   return res.status(500).json(e)
  }
 }
 async updateTodoById(req: Request, res: Response) {
  try{
   const todo = req.body;
   if (!todo._id){
    res.status(400).json({message: 'ID is undefined'})
   }
   const updateTodo = await this.todoService.update(todo)
   return res.json(updateTodo)
  }
  catch(e){
   return res.status(500).json(e)
  }
 }
 async deleteTodoById(req: Request, res: Response) {
  try{
   const todo = req.body;
   if (!todo._id){
    res.status(400).json({message: 'ID is undefined'})
   }
   const deleteTodo = await this.todoService.delete(todo)
   return res.json("deleteTodo")
  }
  catch(e){
   return res.status(500).json(e)
  }
 }
}

const todoController = new TodoController(new TodoService());
export default todoController;