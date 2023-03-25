import { dbContext } from "../db/DbContext.js"

class DownvoteRecipesService {
    async downvoteRecipe(downvoteData) {
        const downvote = await dbContext.DownvoteRecipes.findById({ recipeId: downvoteData.recipeId, userId: downvoteData.userId })
        if (downvote) {
            const newDownvote = await dbContext.DownvoteRecipes.findOneAndDelete(downvote._id)
        } else {
            const upVote = await dbContext.UpvoteRecipes.findOneAndDelete({
                recipeId: downvoteData.recipeId, userId: downvoteData.userId
            })
            const newDownvote = await dbContext.DownvoteRecipes.create(downvoteData)
        }
        return newDownvote
    }

}

export const downvoteRecipesService = new DownvoteRecipesService()