import { Router } from "express";
import { isExistInBase, bodyValidation } from "../../middleware/validate";
import { isExistId } from "../../middleware/validate";

import todoController from "../../controllers/todo.controller";

const todosRouter: Router = Router();


todosRouter.get("", todoController.getAllTodo.bind(todoController));
todosRouter.get("/id",isExistId(),isExistInBase(), todoController.getTodoById.bind(todoController));
todosRouter.post("", todoController.createOneTodo.bind(todoController));
todosRouter.put("", isExistId(),isExistInBase(),bodyValidation(), todoController.updateTodoById.bind(todoController));
todosRouter.delete("",isExistId(),isExistInBase(), todoController.deleteTodoById.bind(todoController));

export default todosRouter;
// bodyValidation(),