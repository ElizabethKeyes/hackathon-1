import { appState } from "../AppState.js"


export class Recipe {
  constructor(data) {
    this.title = data.title
    this.imgUrl = data.imgUrl
    this.description = data.description
    this.ingredients = data.ingredients
    this.steps = data.steps
    this.id = data.id
    this.comments = data.comments
  }

  get ListTemplate() {
    // TODO needs string interpolation for variables once the model has been defined (waiting to see how data comes back from the API)
    // ANCHOR come here to finish up
    return `
    <div class="col-1 d-flex flex-column justify-content-center align-items-end">
      <i class="mdi mdi-arrow-up-bold-outline"></i> <br>
      <i class="mdi mdi-arrow-down-bold-outline"></i>
    </div>
    <div class="col-10 me-3 my-3">
      <div onclick="app.recipesController.setActiveRecipe('${this.id}')"  class="list-card elevation-4 d-flex selectable">
        <div>
          <img src="${this.imgUrl}" class="list-image" alt="recipe picture">
        </div>
        <div class="p-2 d-flex flex-column justify-content-center">
          <h3>${this.title}</h3>
          <p>${this.description}</p>
        </div>
      </div>
    </div>

  
  `
  }

  get ingredientFormatter() {
    let ingredients = this.ingredients.split(', ')
    let template = ''
    for (let i in ingredients) {
      template += `<li>${ingredients[i]}</li>`
    }
    console.log(this.comments)
    return template
  }

  get commentDisplay() {
    let comments = this.comments
    let template = ''
    comments.forEach(c => {
      console.log(c, 'logging c');
      template += `
      <div>
      <div class="d-flex ms-2 me-5 align-content-center">
      <img src="${c.user ? c.user.picture : appState.account.picture}" class="comment-avatar">
      <p class="mb-0 ms-1">${c.user ? c.user.name : appState.account.name}</p>
      </div>
      <div>
      <p class="ms-5 ps-2 fs-6">${c.content}</p>
      </div>
      </div>
      <hr>
      `
    })
    return template
  }

  get activeRecipeTemplate() {
    return `
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div class="modal-header flex-column">
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        <img class="img-active" src="${this.imgUrl}">
        <h1 class="modal-title fs-5" id="exampleModalLabel">${this.title}</h1>
      </div>
      <div class="modal-body">
      <div class="text-center">
        
        </div>
        <p>${this.description}</p>
        <hr>
        <ul>
          ${this.ingredientFormatter}
        </ul>
        <p>${this.steps}</p>
        
      </div>
      <hr>
      <h3 class="text-center">Comments</h3>
      ${this.commentDisplay}
      <form onsubmit="app.commentsController.postComment()">
      <textarea class="form-control mb-2" id="comment" name="comment"></textarea>
      <button type="submit" class="btn btn-success"><i class="mdi mdi-check text-light"></i></button>
      </form>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
    `
  }
  //NOTE - next getter should render like and dislike functionality

}