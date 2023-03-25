import { dbContext } from "../db/DbContext.js"

class UpvoteCommentsService {
    async upvoteComment(upvoteData) {
        const downVote = await dbContext.DownvoteComments.findOneAndDelete({ commentId: upvoteData.commentId, userId: upvoteData.userId })

        const newUpvote = await dbContext.UpvoteComments.create(upvoteData)
        return newUpvote
    }

}

export const upvoteCommentsService = new UpvoteCommentsService()