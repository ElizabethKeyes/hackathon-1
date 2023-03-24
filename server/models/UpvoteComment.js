import mongoose from "mongoose"
const Schema = mongoose.Schema

export const UpvoteCommentSchema = new Schema({
  commentId: { type: Schema.Types.ObjectId, required: true },
  userId: { type: Schema.Types.ObjectId, required: true }
})

UpvoteCommentSchema.index({ commentId: 1, userId: 1 }, { unique: true })

