import { Auth0Provider } from "@bcwdev/auth0provider"
import { downvoteRecipesService } from "../services/DownvoteRecipesService.js"
import BaseController from "../utils/BaseController.js"

export class DownvoteRecipesController extends BaseController {
  constructor() {
    super('/api/downvoterecipes')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.downvoteRecipe)

  }

  async downvoteRecipe(req, res, next) {
    try {
      const userId = req.userInfo.id
      const downvoteData = req.body
      downvoteData.userId = userId
      const newDownvote = await downvoteRecipesService.downvoteRecipe(downvoteData)
      res.send(newDownvote)
    } catch (error) {
      next(error)
    }
  }
}