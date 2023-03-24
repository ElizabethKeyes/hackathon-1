import { dbContext } from "../db/DbContext.js";
import { BadRequest, Forbidden } from "../utils/Errors.js"

class RecipesService {

async getRecipes(query) {
    const recipes = await dbContext.Recipes.find(query)
    return recipes
}    

async getRecipeById(recipeId) {
    const foundRecipe = await dbContext.Recipes.findById(recipeId)
    if(!foundRecipe) {
        throw new BadRequest("Recipe not found")
    }
    return foundRecipe
}

async createRecipe(recipeData) {
    const newRecipe = await dbContext.Recipes.create(recipeData)
    //await newRecipe.populate('user', 'img')
    return newRecipe
}
}

export const recipesService = new RecipesService()
