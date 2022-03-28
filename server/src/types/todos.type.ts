import { Document, Model, model, Schema } from "mongoose";
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
 year: string;
 completed: boolean;
 public: boolean;
}