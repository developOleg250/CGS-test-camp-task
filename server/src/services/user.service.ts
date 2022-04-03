import { IUser } from "user.type"
import User from "../models/User"

export default class UserService {
 async login(user:IUser) {
  const loginUser = await User.update(user)
  return loginUser
 }
 async signup(user:IUser) {
   const signupUser = await User.create(user)
   return signupUser
 }
 async logout(user:IUser) {
  const logoutUser = await User.update(user)
  return logoutUser 
  }
}