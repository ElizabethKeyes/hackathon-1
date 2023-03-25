import { dbContext } from "../db/DbContext.js"
import { Forbidden } from "../utils/Errors.js"

class CommentsService {

  async getCommentsByRecipeId(recipeId) {
    const comments = await dbContext.Comments.find({ recipeId: recipeId }).populate('comment-upvotes').populate('comment-downvotes').populate('user')
    return comments
  }

  async getCommentsByCreator(userId) {
    const comments = await dbContext.Comments.find({ creatorId: userId }).populate('comment-upvotes').populate('comment-downvotes').populate('user')
    return comments
  }

  async leaveComment(commentContent) {
    const newComment = await dbContext.Comments.create(commentContent)
    return newComment
  }

  async deleteComment(commentId, userId) {
    const comment = await dbContext.Comments.findById(commentId)
    if (comment.creatorId == userId) {
      await dbContext.Comments.findByIdAndDelete(commentId)
    } else {
      throw new Forbidden('you are not authorized to delete this function')
    }
  }
}

export const commentsService = new CommentsService()