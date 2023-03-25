import { appState } from "../AppState.js"
import { server } from "./AxiosService.js"

class CommentsService {
  async postComment(comment) {
    const recipeId = appState.recipe.id
    const res = await server.post(`recipes/${recipeId}/comments`, comment)
    console.log(res.data);
  }

}

export const commentsService = new CommentsService()