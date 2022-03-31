import { Document, Model, model, Schema } from "mongoose";
import {ITodo} from '../types/todos.type'

const todoSchema: Schema = new Schema({
 title: {
  type: String,
  required: true,
 },
 description: {
  type: String,
  required: true
 },
 year: {
  type: Number,
  required: true,
 },
 completed: {
  type: Boolean,
  default: false,
 },
 public: {
  type: Boolean,
  default: false,
 }
});

const Todo: Model<ITodo> = model("Todo", todoSchema);

export default Todo;