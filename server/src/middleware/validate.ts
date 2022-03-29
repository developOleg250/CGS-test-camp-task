import { Request, Response, NextFunction } from "express";
import { validation } from "../types/todos.type";
import Todo from "../models/Todo";


interface TypedRequestBody<T> extends Express.Request {
 body: T
}

//validation id!=undefined
export const isExistId = () => async (req: TypedRequestBody<{_id: string}>, res: Response, next: NextFunction) => {
 const { _id }  = req.body;
 return _id!=undefined ? next() : res.status(400).json({ message: "_id is undefined" });
 
};

//validation id in base
export const isExistInBase = () => async (req: Request, res: Response, next: NextFunction) => {

 tryCatchMiddleware(req, res, async () =>{
  const { _id }  = req.body;
  const findId = await Todo.findById({ _id: _id });
  return next(); 
  
 })
 
};

//validation body
export const bodyValidation = () => async (req: Request, res: Response, next: NextFunction) => {
	const payload = {
		title: req.body.title,
  description: req.body.description,
  year: req.body.year,
  completed: req.body.completed,
  public:req.body.public
	};

	const { error } = validation.validate(payload);
	if (error) {
  return res.status(400).json( error )
		
	} else {
		next();
	}
};

//Middleware for try/catch
export const  tryCatchMiddleware = async (req: Request, res: Response, fn:any) => {
 try{
  const todo = await fn();
  return todo;  
 }
 catch(e:any){
  e.message ="Error";
  return res.status(500).json({e: e.message })  
 }

 }
