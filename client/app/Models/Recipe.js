

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
    <div class="list-card d-flex">
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
    
    `
  }

}