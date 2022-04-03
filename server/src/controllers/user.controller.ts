import { Response, Request } from "express";
import { IUser } from "user.type";
import UserService from "../services/user.service";

export class UserController {
 constructor(private userService: UserService) {}

 async login(req: Request, res: Response) {
    const user: IUser = req.body; 
    return await this.userService.login(user)
  }
  async signup(req: Request, res: Response) {
    const user: IUser = req.body; 
    return await this.userService.signup(user)
  }
  async logout(req: Request, res: Response) {
    const user: IUser = req.body; 
    return await this.userService.logout(user)
  }
}

const userController = new UserController(new UserService());
export default userController;