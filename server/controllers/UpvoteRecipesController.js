import { Auth0Provider } from "@bcwdev/auth0provider";
import { dbContext } from "../db/DbContext.js";
import { upvoteRecipesService } from "../services/UpvoteRecipesService.js";
import BaseController from "../utils/BaseController.js";


export class UpvoteRecipesController extends BaseController {
  constructor() {
    super('api/upvoterecipes')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.upvoteRecipe)
  }

  async upvoteRecipe(req, res, next) {
    try {
      const userId = req.userInfo.id
      const upvoteData = req.body
      upvoteData.userId = userId
      const newUpvote = await upvoteRecipesService.upvoteRecipe(upvoteData)
      res.send(newUpvote)
    } catch (error) {
      next(error)
    }
  }
}