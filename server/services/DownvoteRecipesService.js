import { dbContext } from "../db/DbContext.js"

class DownvoteRecipesService {
    async downvoteRecipe(downvoteData) {
        const newDownvote = await dbContext.DownvoteRecipes.create(downvoteData)
        return newDownvote
    }

}

export const downvoteRecipesService = new DownvoteRecipesService()