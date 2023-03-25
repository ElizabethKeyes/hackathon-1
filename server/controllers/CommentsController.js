import { Auth0Provider } from "@bcwdev/auth0provider"
import { Account } from "../../client/app/Models/Account.js"
import { commentsService } from "../services/CommentsService.js"
import BaseController from "../utils/BaseController.js"
import { commentsService } from "../services/CommentsService.js"



export class CommentsController extends BaseController {
  constructor() {
    super('api/comments')
    this.router
      .get('/:commentId/downvotes', this.getUpvotesByCommentId)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get('/:commentId/upvotes', this.getUpvotesByCommentId)
  }

 
  async getUpvotesByCommentId(req, res, next) {
    try {
      const recipeId = req.params.recipeId
      const recipe = await commentsService.getUpvotesByCommentId(recipeId)
      return res.send(recipe)
    } catch (error) {
      next(error)
    }
  }

  async getDownvotesByCommentId(req, res, next) {
    try {
      const recipeId = req.params.recipeId
      const recipe = await commentsService.getDownvotesByCommentId(recipeId)
      return res.send(recipeId)
    } catch (error) {
      next(error)
    }
  }
 
}