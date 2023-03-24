import { dbContext } from "../db/DbContext.js"

class UpvoteCommentsService {
    async upvoteComment(upvoteData) {
        const newUpvote = await dbContext.UpvoteComments.create(upvoteData)
        return newUpvote
    }

}

export const upvoteCommentsService = new UpvoteCommentsService()