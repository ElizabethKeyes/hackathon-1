import { dbContext } from "../db/DbContext.js"

class DownvoteCommentsService {
    async downvoteComment(downvoteData) {
        const downvote = await dbContext.DownvoteComments.findById({ commentId: downvoteData.commentId, userId: downvoteData.userId })
        if (downvote) {
            const newDownvote = await dbContext.DownvoteComments.findOneAndDelete(downvote._id)
        }
        const upVote = await dbContext.UpvoteComments.findOneAndDelete({
            commentId: downvoteData.commentId, userId: downvoteData.userId
        })

        const newDownvote = await dbContext.DownvoteComments.create(downvoteData)
        return newDownvote
    }

}

export const downvoteCommentsService = new DownvoteCommentsService()