import Todo from "../models/Todo"
import { ITodo,IdTodo } from "todos.type";


export default class TodoService {
 async findAll() {
  const findTodo = await Todo.find()
   return findTodo
 }
 async create(todo:ITodo) {
   const createTodo = await Todo.create(todo)
  return createTodo
 }
 async findTodoById(todo:IdTodo) {
  const updateTodo = await Todo.findById({_id: todo._id})
 return updateTodo
 }
 async update(todo:ITodo) {
  const updateTodo = await Todo.findByIdAndUpdate(todo._id, todo, {new: true})
 return updateTodo
 }
 async delete(todo:IdTodo) {
  const updateTodo = await Todo.findByIdAndDelete(todo._id)
 return updateTodo
 }

 
}