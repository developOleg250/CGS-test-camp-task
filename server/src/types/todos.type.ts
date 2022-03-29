import { Document, Model, model, Schema } from "mongoose";
import joi from 'joi'

// TODO: Use it as an example
/**
 * Interface to model the User Schema for TypeScript.
 * @param title:string
 * @param description:string
 * @param year:string
 * @param completed:boolean
 * @param public:boolean
 */
export interface ITodo extends Document {
 title: string;
 description: string;
 year: number;
 completed: boolean;
 public: boolean;
}

export interface IdTodo extends Document {
 _id: string;
}


export const validation = joi.object({
 title: joi.string().min(3).max(25).trim(true).required(),
 description: joi.string().min(3).max(250).trim(true).required(),
 year: joi.number().integer().min(1920).max(3000).required(),
 completed: joi.boolean().default(false),
 public: joi.boolean().default(false),
 
});