import { dbContext } from "../db/DbContext.js"

class DownvoteRecipesService {
    async downvoteRecipe(downvoteData) {
        const upVote = await dbContext.UpvoteRecipes.findOneAndDelete({
            recipeId: downvoteData.recipeId, userId: downvoteData.userId })
        const newDownvote = await dbContext.DownvoteRecipes.create(downvoteData)
        return newDownvote
    }

}

export const downvoteRecipesService = new DownvoteRecipesService()