import { dbContext } from "../db/DbContext.js"

class DownvoteCommentsService {
    async downvoteComment(downvoteData) {
        const newDownvote = await dbContext.DownvoteComments.create(downvoteData)
        return newDownvote
    }

}

export const downvoteCommentsService = new DownvoteCommentsService()