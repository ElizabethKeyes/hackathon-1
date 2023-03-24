import { dbContext } from "../db/DbContext.js"

class UpvoteCommentsService {
    async upvoteComment(upvoteData) {
        const downVote = await dbContext.DownvoteComments.find({ commentId: upvoteData.commentId, userId: upvoteData.userId })
        if (downVote) {
            await dbContext.DownvoteComments.deleteMany(downVote)
        }
        const newUpvote = await dbContext.UpvoteComments.create(upvoteData)
        return newUpvote
    }

}

export const upvoteCommentsService = new UpvoteCommentsService()