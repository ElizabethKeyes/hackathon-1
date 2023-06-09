import { commentsService } from "../services/CommentsService.js"
import { recipesService } from "../services/RecipesService.js"
import BaseController from "../utils/BaseController.js"


export class UsersController extends BaseController {
  constructor() {
    super('api/users')
    this.router
      .get('/:userId/recipes', this.getRecipesByCreator)
      .get('/:userId/comments', this.getCommentsByCreator)
  }
  async getRecipesByCreator(req, res, next) {
    try {
      const creatorId = req.params.userId
      const recipes = await recipesService.getRecipesByCreator(creatorId)
      res.send(recipes)
    } catch (error) {
      next(error)
    }
  }

  async getCommentsByCreator(req, res, next) {
    try {
      const userId = req.params.userId
      const comments = await commentsService.getCommentsByCreator(userId)
      res.send(comments)
    } catch (error) {
      next(error)
    }
  }

}