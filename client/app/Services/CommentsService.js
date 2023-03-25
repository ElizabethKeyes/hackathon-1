import { appState } from "../AppState.js"
import { server } from "./AxiosService.js"

class CommentsService {
  async postComment(comment) {
    const recipeId = appState.recipe.id
    const res = await server.post(`api/recipes/${recipeId}/comment`, { content: comment })
    appState.recipe.comments.push(res.data)
    console.log(appState.recipe.comments, 'comments on active recipe')
    // @ts-ignore
    bootstrap.Modal.getOrCreateInstance('#exampleModal').hide()
    appState.emit('recipe')
  }

}

export const commentsService = new CommentsService()