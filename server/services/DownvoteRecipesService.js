import { dbContext } from "../db/DbContext.js"

class DownvoteRecipesService {
    async downvoteRecipe(downvoteData) {
        const downvote = await dbContext.DownvoteRecipes.find({ recipeId: downvoteData.recipeId, userId: downvoteData.userId })
        if (downvote) {
            await dbContext.DownvoteRecipes.findByIdAndDelete(downvote.id)
            return "Downvote bye bye"
        } else {
            const upVote = await dbContext.UpvoteRecipes.findOneAndDelete({
                recipeId: downvoteData.recipeId, userId: downvoteData.userId
            })
            const newDownvote = await dbContext.DownvoteRecipes.create(downvoteData)
            return newDownvote
        }
    }

}

export const downvoteRecipesService = new DownvoteRecipesService()