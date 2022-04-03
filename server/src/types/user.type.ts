import { Document } from "mongoose";
import joi from 'joi'

/**
 * Interface to model the User Schema for TypeScript.
 * @param email:string
 * @param password:string
 * @param avatar:string
 */
 export interface IUser extends Document {
  email: string;
  password: string;
  avatar: string;
 }

export const userSchema= joi.object({
  email: joi.string().min(3).max(25).trim(true).required(),
  password: joi.string().min(3).max(25).trim(true).required(),
  avatar: joi.string().min(3).max(25).trim(true),
});