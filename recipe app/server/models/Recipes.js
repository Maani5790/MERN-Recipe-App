import mongoose from "mongoose";

const recipeSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  ingredients: [
    {

      type: String, Array,
      required: true,
    },
  ],
  instructions: {
    type: String,
    required: true,
  },

  imageUrl: {
    type: String,
    required: true,
  },
  cookingTime: {
    type: Number,
    required: true,
  },
  userOwner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

const RecipesModel = mongoose.model("Recipes", recipeSchema);
export default RecipesModel;