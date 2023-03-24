import { recipesService } from "../Services/RecipesService.js"
import { appState } from "../AppState.js"
import { setHTML } from "../Utils/Writer.js"

function _drawRecipes() {
    let recipes = appState.recipes
    let template = ''
    recipes.forEach(r => template += r.ListTemplate)
    setHTML('recipeList', template)
}

export class RecipesController {
    constructor() {
        this.getAllRecipes()
    }
    async getAllRecipes() {
        try {
            await recipesService.getAllRecipes()

        }
        catch (error) {
            console.log(error)
        }

    }
}