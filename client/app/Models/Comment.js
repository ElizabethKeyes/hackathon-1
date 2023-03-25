import { appState } from "../AppState.js"
import { Account } from "./Account.js"

export class Comment {
  constructor(data) {
    this.content = data.content
    // this["comment-upvotes"] = data["comment-upvotes"]
    this.user = {}
    this.user.name = appState.account.name
    this.user.picture = appState.account.picture
    // this.user = appState.account
  }
}