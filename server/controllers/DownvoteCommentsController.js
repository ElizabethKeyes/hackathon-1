import BaseController from "../utils/BaseController.js"

export class DownvoteCommentsController extends BaseController {
  constructor() {
    super('/api/downvotecomments')
    this.router
  }
}