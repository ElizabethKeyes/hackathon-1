import { dbContext } from "../db/DbContext.js"


class UpvoteRecipesService {
  async upvoteRecipe(upvoteData) {

    const newUpvote = await dbContext.UpvoteRecipes.create(upvoteData)
    return newUpvote
  }

}

export const upvoteRecipesService = new UpvoteRecipesService()