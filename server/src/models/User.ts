import { Model, model, Schema } from "mongoose";
import { IUser } from "../types/user.type";
import { NextFunction } from "express";
import { hashPassword, UPDATE } from "../middleware/hash";

const userSchema: Schema = new Schema({
 email: {
  type: String,
  required: true,
  unique: true
 },
 password: {
  type: String,
  required: true
 },
 avatar: {
  type: String,
  default: 'avatar'
 },
 date: {
  type: Date,
  default: Date.now
 }
});

userSchema.pre(
  'save',
  async function(next: NextFunction) {
  const user = this;
  const hash = hashPassword(this.password, UPDATE)
  this.password = hash;
  next();
  }
  );

const User: Model<IUser> = model('User', userSchema);

export default User;
