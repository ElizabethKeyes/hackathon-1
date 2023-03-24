import { Auth0Provider } from "@bcwdev/auth0provider"
import { dbContext } from "../db/DbContext.js"
import { upvoteCommentsService } from "../services/UpvoteCommentsService.js"
import BaseController from "../utils/BaseController.js"

export class UpvoteCommentsController extends BaseController {
  constructor() {
    super('/api/upvotecomments')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.upvoteComment)

  }
  async upvoteComment(req, res, next) {
    const userId = req.userInfo.id
    const upvoteData = req.body
    upvoteData.userId = userId
    try {
      const newUpvote = await upvoteCommentsService.upvoteComment(upvoteData)
      res.send(newUpvote)
    } catch (error) {
      next(error)
    }
  }
}