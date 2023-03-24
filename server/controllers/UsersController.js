import { recipesService } from "../services/RecipesService.js"
import BaseController from "../utils/BaseController.js"


export class UsersController extends BaseController {
  constructor() {
    super('api/users')
    this.router
      .get('/:userId/recipes', this.getRecipesByUser)
    // .get('/:userId/comments', this.getCommentsByCreator)
  }
  async getRecipesByUser(req, res, next) {
    try {
      const userId = req.params.userId
      const recipes = await recipesService.getRecipesByUser(userId)

      res.send()
    } catch (error) {
      next(error)
    }
  }

}