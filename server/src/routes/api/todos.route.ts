import { Router } from "express";
import { isExistInBase, bodyValidation, tryCatchMiddleware } from "../../middleware/validate";
import todoController from "../../controllers/todo.controller";
import { todoSchema } from "../../types/todos.type";
import { isValidToken } from "../../middleware/auth.middleware";

const todosRouter: Router = Router();
 

todosRouter.get("",
 isValidToken(),
 tryCatchMiddleware(todoController.getAllTodo.bind(todoController)));
todosRouter.get("/:id", isExistInBase(), isValidToken(), tryCatchMiddleware(todoController.getTodoById.bind(todoController)));
todosRouter.post("", bodyValidation(todoSchema), isValidToken(), tryCatchMiddleware(todoController.createOneTodo.bind(todoController)));
todosRouter.put("/:id",isExistInBase(), bodyValidation(todoSchema), isValidToken(), tryCatchMiddleware(todoController.updateTodoById.bind(todoController)));
todosRouter.delete("/:id",isExistInBase(),isValidToken(), tryCatchMiddleware(todoController.deleteTodoById.bind(todoController)));

export default todosRouter;