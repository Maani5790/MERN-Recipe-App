import RecipeModel from "../models/Recipes.js";

export const GetAllPost = async () =>{
    try {
        const response = await RecipeModel.find({});
        res.json(response)
    } catch (error) {
        res.json(error)
    };

};

export const SendPost = async () =>{

};

export default { GetAllPost, SendPost };