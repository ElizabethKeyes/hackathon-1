import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const RecipeSchema = new Schema({
    title: {type: String, required: true, minLength: 5, maxLength: 20 },
    imgUrl: { type: String, required: true },
    description: { type: String, required: true, minLength: 20, maxLength: 100 },
    ingredients: {type: String, required: true, maxLength: 100 },
    steps: { type: String, required: true, maxLength: 150 }
    // createdBy: { type: Schema.Types.ObjectId, required: true, ref: 'Account' }
},
{ timestamps: true, toJSON: { virtuals: true } }

)


// {
//   "title" : "Fried Chicken Ice Cream",
//   "imgUrl" : "https://40aprons.com/wp-content/uploads/2023/02/Fried-Chicken-Ice-Cream-9-1365x2048.jpg",
//   "description" : "Looks can be deceiving! These fun and tasty homemade ice cream bars don't taste like chicken at all. Perfect for cookouts, themed birthday parties or showers, or just anytime you want a different sort of treat.",
//   "ingredients" : "2 cups cold heavy cream, 1 14-ounce can sweetened condensed milk chilled, 1 ½ teaspoons pure vanilla extract, 1 ½ cups white chocolate chips, 2 tablespoons refined coconut oil solid or liquid, 3 cups cornflakes",
//   "steps" : 
//   "15 minutes prior to beginning recipe, pour 2 cups cold heavy cream into stand mixer bowl. Place bowl of heavy cream and mixer's whisk attachment in refrigerator until ready to begin mixing. Line baking dish with parchment paper. Leave enough parchment paper overhanging on two sides, to use as release handles later. Set dish aside. Fit mixer with chilled whisk attachment and secure chilled bowl on stand mixer base. Whisk very cold heavy cream on medium-low speed 30 to 60 seconds, then increase speed to medium-high. Continue whisking until heavy cream forms soft peaks, then reduce speed to medium and whisk until cream forms stiff peaks (see Notes). Be careful not to over-whip. Remove bowl from stand mixer. Use silicone spatula to gently fold in sweetened condensed milk and vanilla extract, until ingredients are fully incorporated."
// }