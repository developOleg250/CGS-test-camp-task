import Todo from "../models/Todo"
export default class TodoService {
 async findAll() {
  const findTodo = await Todo.find()
   return findTodo
 }
 async create(todo:any) {
   const createTodo = await Todo.create(todo)
  return createTodo
 }
 async findTodoById(todo:any) {
  const updateTodo = await Todo.findById({_id: todo._id})
 return updateTodo
 }
 async update(todo:any) {
  const updateTodo = await Todo.findByIdAndUpdate(todo._id, todo, {new: true})
 return updateTodo
 }
 async delete(todo:any) {
  const updateTodo = await Todo.findByIdAndDelete(todo._id)
 return updateTodo
 }

 
}