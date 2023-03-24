import { dbContext } from "../db/DbContext.js"
import { BadRequest, Forbidden } from "../utils/Errors.js"

class RecipesService {

  async getRecipes(query) {
    const recipes = await dbContext.Recipes.find(query)
    return recipes
  }

  async getRecipeById(recipeId) {
    const foundRecipe = await dbContext.Recipes.findById(recipeId)
    if (!foundRecipe) {
      throw new BadRequest("Recipe not found")
    }
    return foundRecipe
  }

  async getRecipesByUser(userId) {
    const recipes = await dbContext.Recipes.find({ userId: userId })
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

  async deleteRecipe(recipeId) {
    await dbContext.Recipes.findByIdAndDelete(recipeId)
  }

}

export const recipesService = new RecipesService()
