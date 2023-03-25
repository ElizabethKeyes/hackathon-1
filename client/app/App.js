import { AuthController } from './Controllers/AuthController.js';
import { ValuesController } from './Controllers/ValuesController.js';
import { RecipesController } from './Controllers/RecipesController.js';
import { CommentsController } from "./Controllers/CommentsController.js";

class App {
  authController = new AuthController();
  // valuesController = new ValuesController();
  recipesController = new RecipesController();

  commentsController = new CommentsController()

}

// @ts-ignore
window.app = new App()
