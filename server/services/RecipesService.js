import { dbContext } from "../db/DbContext.js"
import { BadRequest, Forbidden } from "../utils/Errors.js"

class RecipesService {

  async getRecipes(query) {
    const recipes = await dbContext.Recipes.find(query).populate({
      path: 'comments',
      populate: {
        path: 'user',
        select: 'name picture'
      }
    }).populate('comment-count').populate('recipe-upvotes').populate('recipe-downvotes').populate('user', 'picture name')
    return recipes
  }

  async getRecipeById(recipeId) {
    const foundRecipe = await dbContext.Recipes.findById(recipeId).populate('comments').populate('comment-count').populate('recipe-upvotes').populate('recipe-downvotes')
    if (!foundRecipe) {
      throw new BadRequest("Recipe not found")
    }
    return foundRecipe
  }

  async getRecipesByCreator(creatorId) {
    const recipes = await dbContext.Recipes.find({ creatorId }).populate('comments').populate('comment-count').populate('recipe-upvotes').populate('recipe-downvotes')
    return recipes
  }

  async createRecipe(recipeData) {
    const newRecipe = await dbContext.Recipes.create(recipeData)
    //await newRecipe.populate('user', 'img')
    return newRecipe
  }

  async editRecipe(recipeEdits, recipeId) {
    const editedRecipe = await dbContext.Recipes.findByIdAndUpdate(recipeId, recipeEdits, { returnDocument: "after" })
    return editedRecipe
  }

  async deleteRecipe(recipeId, userId) {
    const recipe = await dbContext.Recipes.findById(recipeId)
    if (recipe.creatorId == userId) {
      await dbContext.Recipes.findByIdAndDelete(recipeId)
    } else {
      throw new Forbidden('you are not authorized to delete this function')
    }
  }

}

export const recipesService = new RecipesService()
