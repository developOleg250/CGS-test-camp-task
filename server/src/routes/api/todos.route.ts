import { Router } from "express";

import todoController from "../../controllers/todo.controller";

const todosRouter: Router = Router();

todosRouter.get("", todoController.getAllTodo.bind(todoController));
todosRouter.post("", todoController.createOneTodo.bind(todoController));
todosRouter.put("", todoController.updateTodoById.bind(todoController));
todosRouter.delete("", todoController.deleteTodoById.bind(todoController));

export default todosRouter;
