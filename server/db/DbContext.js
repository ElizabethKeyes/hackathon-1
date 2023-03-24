import mongoose, { mongo } from 'mongoose'
import { AccountSchema } from '../models/Account'
import { CommentSchema } from "../models/Comment.js"
import { RecipeSchema } from '../models/Recipe'
import { ValueSchema } from '../models/Value'
import { DownvoteCommentSchema } from "../models/DownvoteComment.js"
import { UpvoteRecipeSchema } from "../models/UpvoteRecipe.js"
import { DownvoteRecipeSchema } from "../models/DownvoteRecipe.js"
import { UpvoteCommentSchema } from "../models/UpvoteComment.js"

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);
  Recipes = mongoose.model('Recipe', RecipeSchema);
  Comments = mongoose.model('Comment', CommentSchema);
  UpvoteRecipes = mongoose.model('UpvoteRecipe', UpvoteRecipeSchema);
  DownvoteRecipes = mongoose.model('DownvoteRecipe', DownvoteRecipeSchema);
  UpvoteComments = mongoose.model('UpvoteComment', UpvoteCommentSchema);
  DownvoteComments = mongoose.model('DownvoteComment', DownvoteCommentSchema);



}

export const dbContext = new DbContext()
