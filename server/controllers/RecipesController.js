import { Auth0Provider } from "@bcwdev/auth0provider"
import { commentsService } from "../services/CommentsService.js"
import { recipesService } from "../services/RecipesService.js"
import BaseController from "../utils/BaseController.js"

export class RecipesController extends BaseController {
  constructor() {
    super('api/recipes')
    this.router
      .get('', this.getRecipes)
      .get('/:recipeId', this.getRecipeById)
      .get('/:recipeId/comments', this.getCommentsByRecipeId)
      // NOTE we want to use auth0 here 
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.createRecipe)
      .put('/:recipeId', this.editRecipe)
      .delete('/:recipeId', this.deleteRecipe)
      .post('/:recipeId/comment', this.leaveComment)
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

  async getCommentsByRecipeId(req, res, next) {
    try {
      const recipeId = req.params.recipeId
      const comments = await commentsService.getCommentsByRecipeId(recipeId)
      res.send(comments)
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
      const userId = req.userInfo.id

      await recipesService.deleteRecipe(recipeId, userId)
      res.send(`deleted recipe ${recipeId}`)
    } catch (error) {
      next(error)
    }
  }

  async leaveComment(req, res, next) {
    try {
      const commentContent = req.body
      commentContent.creatorId = req.userInfo.id
      commentContent.recipeId = req.params.recipeId
      const newComment = await commentsService.leaveComment(commentContent)
      res.send(newComment)
    } catch (error) {
      next(error)
    } // const recipeId = req.params.recipeId

  }
}