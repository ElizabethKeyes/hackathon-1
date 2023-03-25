import { commentsService } from "../Services/CommentsService.js"
import { getFormData } from "../Utils/FormHandler.js"

export class CommentsController {
  constructor() {

  }

  async postComment() {
    window.event.preventDefault()
    // @ts-ignore
    const comment = window.event.target.comment.value
    // @ts-ignore
    window.event.target.reset()
    await commentsService.postComment(comment)
  }

}