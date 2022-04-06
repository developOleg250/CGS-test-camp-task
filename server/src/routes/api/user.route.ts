import { Router } from "express";
import { bodyValidation } from "../../middleware/validate";
import { userSchema } from "../../types/user.type";
import { passportLoginAuthenticate, passportSignUpAuthenticate } from "../../middleware/auth.middleware";

const userRouter: Router = Router();

// @route   POST api/user
// @desc    Register user given their email and password, returns the token upon successful registration
// @access  Public
userRouter.post('/signup', bodyValidation(userSchema), passportSignUpAuthenticate );
userRouter.post('/login', bodyValidation(userSchema), passportLoginAuthenticate );

export default userRouter;
