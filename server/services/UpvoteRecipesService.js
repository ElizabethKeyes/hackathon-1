import { dbContext } from "../db/DbContext.js"


class UpvoteRecipesService {
  async upvoteRecipe(upvoteData) {
    const downVote = await dbContext.DownvoteRecipes.findOneAndDelete({ recipeId: upvoteData.recipeId, userId: upvoteData.userId })
    const newUpvote = await dbContext.UpvoteRecipes.create(upvoteData)
    return newUpvote
  }

}

export const upvoteRecipesService = new UpvoteRecipesService()