import express from "express";
import RecipesModel from "../models/Recipes.js";
import UserModel from "../models/users.js";
const recipeRouter = express();

recipeRouter.get("/", async (req, res) => {
    try {
        const response = await RecipesModel.find({});
        res.json(response)
    } catch (error) {
        res.json(error)
    };
});

recipeRouter.post("/", async (req, res) => {
    const recipe = new RecipesModel(req.body);
    try {
        const response = await recipe.save();
        res.json(response)

    } catch (error) {
        res.json(error)
    }
});


recipeRouter.put("/", async (req, res) => {
    const recipe = await RecipesModel.findById(req.body.recipeID);
    const user = await UserModel.findById(req.body.userID);
    user.savedRecipe.push(recipe);
    await user.save();
    res.json({savedRecipe: user.savedRecipe});
    try {
        const response = await recipe.save();
        res.json(response)

    } catch (error) {
        res.json(error)
    }
});

recipeRouter.get("/savedRecipes/ids", async(req,res)=>{
    try {
        
    } catch (error) {
        
    }
})

export default recipeRouter