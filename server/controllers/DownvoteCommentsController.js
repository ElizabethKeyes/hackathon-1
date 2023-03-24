import { Auth0Provider } from "@bcwdev/auth0provider"
import { downvoteCommentsService } from "../services/DownvoteCommentsService.js"
import BaseController from "../utils/BaseController.js"

export class DownvoteCommentsController extends BaseController {
  constructor() {
    super('/api/downvotecomments')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.downvoteComment)
  }
  async downvoteComment(req, res, next) {
    const userId = req.userInfo.id
    const downvoteData = req.body
    downvoteData.userId = userId
    try {
      const newDownvote = await downvoteCommentsService.downvoteComment(downvoteData)
      res.send(newDownvote)
    }
    catch (error) {
      next(error)
    }
  }
}