import { Auth0Provider } from "@bcwdev/auth0provider"
import { recipesService } from "../services/RecipesService.js"
import BaseController from "../utils/BaseController.js"

export class RecipesController extends BaseController {
    constructor() {
        super('api/recipes')
        this.router
            .get('', this.getRecipes)
            .get('/:recipeId', this.getRecipeById)
            // NOTE we want to use auth0 here 
            .use(Auth0Provider.getAuthorizedUserInfo)
            .post('', this.createRecipe)
    }
    
    async getRecipes(req, res, next) {
        try {
            const query = req.query
            const recipes = await recipesService.getRecipes(query)
            return res.send(recipes)
        } catch (error) {
            next(error)
        }
    }
    
    async getRecipeById(req, res, next) {
        try {
            const recipeId = req.params.recipeId
            const recipe = await recipesService.getRecipeById(recipeId)
            return res.send(recipe)
        } catch (error) {
            next(error)
        }
    }
    async createRecipe(req, res, next) {
        try {
            const recipeData = req.body
            const newRecipe = await recipesService.createRecipe(recipeData)
            return res.send(newRecipe)
        } catch (error) {
            next(error)
        }
    }
}