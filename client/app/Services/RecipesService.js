import { server } from "./AxiosService.js"
import { Recipe } from "../Models/Recipe.js"
import { appState } from "../AppState.js"
import { Account } from "../Models/Account.js"


class RecipesService {
  async createRecipe(formData) {
    // console.log(formData);
    const res = await server.post('api/recipes', formData)
    // console.log(res.data);
    appState.recipes.push(new Recipe(res.data))
    appState.emit('recipes')
  }
  async getAllRecipes() {
    const res = await server.get('api/recipes')
    appState.recipes = res.data.map(r => new Recipe(r))
    console.log('[ALL RECIPES]', appState.recipes);
    // appState.recipes = res.data.map(r => new Recipe(r))
    // console.log(appState.recipes);
  }

  setActiveRecipe(recipeId) {
    const recipe = appState.recipes.find(r => r.id == recipeId)
    appState.recipe = recipe
    console.log('[ACTIVE RECIPE]', appState.recipe);
  }

  async becomeViewer() {
    const res = await server.post('api/viewers', { recipeId: appState.recipe.id })
    // console.log('viewing');
  }

  async upvoteRecipe(recipeId) {
    const res = await server.post('api/upvoterecipes', { recipeId })
    console.log('[UPVOTED RECIPE]', res.data);
  }

  async downvoteRecipe(recipeId) {
    const res = await server.post('api/downvoterecipes', { recipeId })
    console.log('[DOWNVOTED RECIPE]', res.data);
  }

  // async deleteRecipe() {
  //     const recipe = appState.recipe
  //     const res = await server.delete('api/recipes' + recipe.id)
  // }
}
export const recipesService = new RecipesService()