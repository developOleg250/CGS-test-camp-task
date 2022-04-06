import Todo from "../models/Todo"
import { ITodo,IdTodo } from "todos.type";

interface IQuery { 
  search: string,
  status: string,
  limit: string,
 }

export default class TodoService {
 async findAll(userId:string, query:IQuery) { //
   let status = query.status === 'true' ? true : false;

   if ((query.search == '' && query.status == 'false') || query.search === undefined) {
      return await Todo.find({$or : [{userId}, {public: true}]}).limit(Number(query.limit));
   }
   if (query.search != undefined &&  query.status != undefined) {
      return await Todo.find( {$and: [
        { $or: [{userId}, {public: true}] },
        {title: query.search},
        {completed: query.status},
      ]}).limit(Number(query.limit));
 }
 
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