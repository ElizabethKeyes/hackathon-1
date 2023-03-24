import { recipesService } from "../Services/RecipesService.js"
import { appState } from "../AppState.js"
import { Recipe } from "../Models/Recipe.js"
import { Pop } from "../Utils/Pop.js"
import { getFormData } from "../Utils/FormHandler.js"
import { setHTML } from "../Utils/Writer.js"

function _drawRecipes() {
    let recipes = appState.recipes
    let template = ''
    recipes.forEach(r => template += r.ListTemplate)
    setHTML('recipeList', template)
}

function _activeRecipeTemplate() {
    if(appState.recipe) {
        setHTML('active-modal', appState.recipe.activeRecipeTemplate)
        bootstrap.Modal.getOrCreateInstance('#exampleModal').show()

    }
    // if (appState.recipe) {
    //     document.getElementById('active-modal').innerHTML = (appState.recipe.activeRecipeTemplate)
    // }
}

export class RecipesController {
    constructor() {
        this.getAllRecipes()
        appState.on('recipes', _drawRecipes)
        appState.on('recipe', _activeRecipeTemplate)
    }

    async createRecipe() {
        event.preventDefault()
        let form = event.target
        let formData = getFormData(form)
        try {
            await recipesService.createRecipe(formData)
        }
        catch (error) {
            console.log(error)
        }
        // console.log(formData);
        form.reset()
        bootstrap.Modal.getOrCreateInstance('#modal').hide()
    }

    async getAllRecipes() {
        try {
            await recipesService.getAllRecipes()

        }
        catch (error) {
            console.log(error)
        }

    }
    catch(error) {
        console.log(error)
    }

    setActiveRecipe(recipeId) {
        recipesService.setActiveRecipe(recipeId)
    }
}
