import mongoose, { mongo } from 'mongoose'
import { AccountSchema } from '../models/Account'
import { CommentSchema } from "../models/Comment.js"
import { RecipeSchema } from '../models/Recipe'
import { ValueSchema } from '../models/Value'

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);
  Recipes = mongoose.model('Recipe', RecipeSchema)

  Comments = mongoose.model('Comment', CommentSchema)
}

export const dbContext = new DbContext()
