import { server } from "./AxiosService.js"
import { Recipe } from "../Models/Recipe.js"
import { appState } from "../AppState.js"


class RecipesService {
    async getAllRecipes() {
        const res = await server.get('api/recipes')
        // console.log('getting recipes', res.data);
        appState.recipes = res.data.map(r => new Recipe(r))
        console.log(appState.recipes);
    }

}
export const recipesService = new RecipesService()