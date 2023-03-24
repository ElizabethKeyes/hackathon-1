

export class Recipe {
  constructor(data) {
    this.title = data.title
    this.imgUrl = data.imgUrl
    this.description = data.description
    this.ingredients = data.ingredients
    this.steps = data.steps
    this.id = data.id

  }

  get ListTemplate() {
    // TODO needs string interpolation for variables once the model has been defined (waiting to see how data comes back from the API)
    return `
    <div class="col-11">
    <div onclick="app.recipesController.setActiveRecipe('${this.id}')"  class="list-card d-flex selectable">
      <div>
        <img src="${this.imgUrl}"
          class="list-image" alt="recipe picture">
      </div>
      <div class="p-2 d-flex flex-column justify-content-center">
        <h3>${this.title}</h3>
        <p>${this.description}</p>
      </div>
    </div>
  </div>`
  }

  get activeRecipeTemplate() {
    return `
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-xl">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">${this.title}</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <p>${this.ingredients}</p> <br>
        ${this.description}
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
    `
  }
  //NOTE - next getter should render like and dislike functionality
  
}