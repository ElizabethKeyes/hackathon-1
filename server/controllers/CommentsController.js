import { Auth0Provider } from "@bcwdev/auth0provider"
import { Account } from "../../client/app/Models/Account.js"
import { commentsService } from "../services/CommentsService.js"
import BaseController from "../utils/BaseController.js"


export class CommentsController extends BaseController {
  constructor() {
    super('api/comments')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('/:recipeId', this.leaveComment)

  }
  async leaveComment(req, res, next) {
    try {
      const commentContent = req.body
      commentContent.creatorId = req.userInfo.id
      commentContent.recipeId = req.params.recipeId
      const newComment = await commentsService.leaveComment(commentContent)
      res.send(newComment)
    } catch (error) {
      next(error)
    } // const recipeId = req.params.recipeId

  }
}