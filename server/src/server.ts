import bodyParser from "body-parser";
import express, { NextFunction } from "express";

import connectDB from "../config/database";
import { graphqlHTTP } from "express-graphql";
import { buildSchema, NoUnusedVariablesRule } from "graphql";
import AppRouter from "./routes";
import axios from "axios";
import cors from "cors"

import passport from 'passport';

import passportJWT from "passport-jwt";
import { loginStrategy, signupStrategy } from "./middleware/auth.middleware";

const ExtractJwt = passportJWT.ExtractJwt;
const JwtStrategy = passportJWT.Strategy;

const app = express();
const router = new AppRouter(app);
// Connect to MongoDB
connectDB();

// Express configuration
app.set("port", process.env.PORT || 5000);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//for by CORS policy
app.use(cors());

passport.use('signup', signupStrategy);
passport.use('login', loginStrategy);

app.use(passport.initialize());

router.init();



// // TODO: Move that to model GraphQL
// const schema = buildSchema(`
//   type Query {
//     todos: String
//   }
// `);

// // TODO: Create graphQL controller
// const rootValue = {
//   todos: async () => {
//     // TODO: Create http service for that
//     const todos = await axios.get("http://localhost:5000/api/todos");
//     return todos.data;
//   },
// };


// // TODO: Move that to router init function ONLY AFTER MAIN PART OF APP
// app.use("/graphql", graphqlHTTP({
//   schema,
//   rootValue,
//   graphiql: true
// }));

const port = app.get("port");
const server = app.listen(port, () =>
 // tslint:disable-next-line:no-console
 console.log(`Server started on port ${port}`)
);

export default server;