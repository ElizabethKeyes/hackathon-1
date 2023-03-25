import mongoose from "mongoose"
const Schema = mongoose.Schema

export const CommentSchema = new Schema({
  content: { type: String, required: true, minLength: 1, maxLength: 2000 },
  // NOTE maybe add imgUrl
  creatorId: { type: Schema.Types.ObjectId, required: true },
  // NOTE active recipe id
  recipeId: { type: Schema.Types.ObjectId, required: true }

},
  { timestamps: true, toJSON: { virtuals: true } }
)

CommentSchema.virtual('comment-upvotes', {
  localField: '_id',
  ref: 'Comment',
  foreignField: 'commentId',
  count: true
})

CommentSchema.virtual('comment-downvotes', {
  localField: '_id',
  ref: 'Comment',
  foreignField: 'commentId',
  count: true
})

CommentSchema.virtual('user', {
  localField: 'creatorId',
  ref: 'Account',
  foreignField: '_id',
  justOne: true
})