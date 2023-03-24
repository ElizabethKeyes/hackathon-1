import BaseController from "../utils/BaseController.js"

export class UpvoteCommentsController extends BaseController {
  constructor() {
    super('/api/upvotecomments')
    this.router
  }
}