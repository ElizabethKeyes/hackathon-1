import mongoose from "mongoose"
const Schema = mongoose.Schema

export const DownvoteRecipeSchema = new Schema({
  recipeId: { type: Schema.Types.ObjectId, required: true },
  userId: { type: Schema.Types.ObjectId, required: true }
})

DownvoteRecipeSchema.index({ recipeId: 1, userId: 1 }, { unique: true })


