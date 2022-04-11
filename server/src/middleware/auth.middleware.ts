import jwt from 'jsonwebtoken';
import { SECRET } from './hash';
import passportJWT from "passport-jwt";
import LocalStrategy from 'passport-local';
import passport from "passport";
import User from "../models/User";
import { hashPassword, UPDATE } from "./hash";
import { Request, Response, NextFunction } from "express";

export const generateAccessToken = (id:string) =>{
  return jwt.sign({ id }, SECRET, {expiresIn: '24h'})
}

const JwtStrategy = passportJWT.Strategy;

export const loginStrategy = new LocalStrategy.Strategy(
  { usernameField: 'email',
    passwordField: 'password',
  },
  async (email, password, done) => {
    try {
      const user = await User.findOne({ email });
      const hashPasswordText= hashPassword(password, UPDATE );
      if (user) {
        if (email === user.email && hashPasswordText === user.password  )  {
          return done(null, user); //redirect to login user
        }
        else{
          return done(null, false);
        } 
        
    }
      //if user not exist in base return false
      if (user==null) {
        return done(null, false);
      }
    }
      catch (error) {
        return done(error);
      }
})

export const passportLoginAuthenticate = (req, res, next) => {
  passport.authenticate('login', async (error, user ) => {
    if (error) {
      return next(error);
    }

    if (!user) {
      return res.send( { message: 'User not found or bad password' })
    }

    //if user exist and email password are good => token
    if (user) {
      const token = generateAccessToken(user._id);
      return res.send({token, user});
    }
  })(req, res, next);
} 

export const signupStrategy = new LocalStrategy.Strategy(
  { usernameField: 'email',
    passwordField: 'password',
  },
  async (email, password, done) => {
    try {
      //find user exist in base
      const user = await User.findOne({ email });
      if (!user) {
        return done(null, true); //redirect to create user
      }

      //if user exist in base return false
      if (user) {
        return done(null, false);
      }
    }
      catch (error) {
        return done(error);
      }
})

export const passportSignUpAuthenticate =(req, res, next) => {
  passport.authenticate('signup', async (error, user ) => {
    if (error) {
      return next(error);
    }

    if (!user) {
      return res.send( { message: 'User was exist' })
    }

    //if true create user
    if (user) {
      try {
        const userCreate = await User.create(req.body);
        const token = generateAccessToken(userCreate._id)
        return res.send({token, user: userCreate });
      } catch (error) {
        return res.send( { message: 'errror base' })
      }
    } 
    
  })(req, res, next);
} 


export const isValidToken = () => 
  async (req: Request, res: Response, next: NextFunction) => {
  try{
  const token  = req.headers?.authorization?.split(' ')[1];
  if (!token) {
    return res.status(403).json({message: 'token not  found'})
  }
  const decodedData = jwt.verify(token, SECRET);
  req.user = decodedData;
  return next();
  }
  catch(e:any) {
    e.message ="token not  found or not verify";
    return res.status(500).json({e: e.message })  
  }
 
};