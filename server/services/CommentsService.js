import { dbContext } from "../db/DbContext.js"

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

}

export const commentsService = new CommentsService()