

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
    <div class="col-11">
      <i class="mdi mdi-arrow-up-bold-outline"></i> <br>
      <i class="mdi mdi-arrow-down-bold-outline"></i>
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
      template += `
      
      `
    })
    return
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