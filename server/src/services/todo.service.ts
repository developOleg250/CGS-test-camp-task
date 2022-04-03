import Todo from "../models/Todo"
import { ITodo,IdTodo } from "todos.type";


export default class TodoService {
 async findAll(userId:string) {
   console.log('userId='+userId);
  const findTodo = await Todo.find( {$or : [{userId}, {public: true}]})
   return findTodo
 }
 async create(todo:ITodo, userId:string) {
  console.log(userId);
   const createTodo = await Todo.create({...todo,userId } )
  return createTodo
 }
 async findTodoById(id:string) {
  const updateTodo = await Todo.findById({_id: id})
 return updateTodo
 }
 async update(todo:ITodo, id:string) {
  const updateTodo = await Todo.findByIdAndUpdate({_id: id}, todo, {new: true})
 return updateTodo
 }
 async delete(id:string) {
  const updateTodo = await Todo.findByIdAndDelete({_id: id})
 return updateTodo
 }

 
}