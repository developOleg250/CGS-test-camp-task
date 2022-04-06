import Todo from "../models/Todo"
import { ITodo,IdTodo } from "todos.type";

interface IQuery { 
  search: string,
  status: string
 }

export default class TodoService {
 async findAll(userId:string, query) {
  //  console.log('userId='+userId);
    if(query==null) {
    //  console.log('0000');
     const findTodo = await Todo.find( {$or : [{userId}, {public: true}]});
      return findTodo
   } else {
    // console.log('11111');
    const findTodo = await Todo.find( {
          $and: [
              { $or: [{userId}, {public: true}] },
              {title: query.search}, // completed: query.status
              { $and: [{completed: query.status}, {}] }
          ]
      });
     return findTodo
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