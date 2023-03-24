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
            .put('/:recipeId', this.editRecipe)
            .delete('/:recipeId', this.deleteRecipe)
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
            const userId = req.userInfo.id
            recipeData.creatorId = userId
            const newRecipe = await recipesService.createRecipe(recipeData)
            return res.send(newRecipe)
        } catch (error) {
            next(error)
        }
    }

    async editRecipe(req, res, next) {
        try {
            const recipeEdits = req.body
            const recipeId = req.params.recipeId
            const editedRecipe = await recipesService.editRecipe(recipeEdits, recipeId)
            res.send(editedRecipe)

        } catch (error) {
            next(error)
        }
    }

    async deleteRecipe(req, res, next) {
        try {
            const recipeId = req.params.recipeId
            await recipesService.deleteRecipe(recipeId)
            res.send(`deleted recipe ${recipeId}`)
        } catch (error) {
            next(error)
        }
    }
}