import { Request, Response, NextFunction } from "express";
import Todo from "../models/Todo";

interface TypedRequestBody<T> extends Express.Request {
 body: T
}

export const isExistId = () => async (req: TypedRequestBody<{_id: string}>, res: Response, next: NextFunction) => {
 const { _id }  = req.body;
 return _id!=undefined ? next() : res.status(400).json({ message: "_id is undefined" });
 
};

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