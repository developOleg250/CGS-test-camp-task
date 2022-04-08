import { Request, Response, NextFunction } from "express";
import Joi from "joi";
import Todo from "../models/Todo";

//validation id in base
export const isExistInBase = () => 
  async (req: Request, res: Response, next: NextFunction) => {
    console.log('isExistInBase');
  try{
  const { id }  = req.params;
  console.log(id);
  const findId = await Todo.findById({ _id: id });
  console.log(findId);
  if (findId === null) throw Error('error');
  return next();
  }
  catch(e:any) {
    e.message ="Error";
    return res.status(500).json({e: e.message })  
  }
 
};

//validation body
export const bodyValidation = (schema:any ) => 
  async (req: Request, res: Response, next: NextFunction) => {
    console.log(req.headers);
    
    
	const { error } = schema.validate(req.body);
	if (error) {
    return res.status(400).json( error )
	} else {
		next();
	}
};

//Middleware for try/catch
export const  tryCatchMiddleware = (fn:Function) =>
 async (req: Request, res: Response) => {
 try{
  const todo = await fn(req,res);
  return res.json(todo)
 }
 catch(e:any){
  e.message ="Error";
  return res.status(500).json({e: e.message })  
 }

 }