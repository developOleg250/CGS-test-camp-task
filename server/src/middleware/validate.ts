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
export const isExistInBase = () => async (req: TypedRequestBody<{_id: string}>, res: Response, next: NextFunction) => {
 const { _id }  = req.body;
 try{
  const findId = await Todo.findById({ _id: _id });
  return next(); 
 }
 catch{
  return res.status(400).json({ message: "Todo with this ID not exist" });
 }
 
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




//try/catch/fix 
export const errorMessage = (message:string | undefined) => async ( req: Request, res: Response, next: NextFunction) => {
 
 
 return res.status(500).json(message)
}