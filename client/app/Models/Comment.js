export class Comment {
  constructor(data) {
    this.content = data.content
    this["comment-upvotes"] = data["comment-upvotes"]
  }
}