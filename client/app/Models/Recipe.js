

export class Recipe {
  constructor(data) {

  }

  get ListTemplate() {
    // TODO needs string interpolation for variables once the model has been defined (waiting to see how data comes back from the API)
    return `
    <div class="col-11">
    <div class="list-card d-flex">
      <div>
        <img src="https://www.tastingtable.com/img/gallery/moroccan-chickpea-stew-recipe/intro-1641487760.webp"
          class="list-image" alt="">
      </div>
      <div class="p-2 d-flex flex-column justify-content-center">
        <h3>Chickpea Soup</h3>
        <p>This chickpea and vegetable stew is a hearty and flavorful meal that's perfect for a cozy night in or as
          a nutritious and satisfying lunch. </p>
      </div>
    </div>
  </div>`
  }

}