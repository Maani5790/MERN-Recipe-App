import mongoose from "mongoose";

const database = async (username,password) =>{
    const port = process.env.PORT
    const URL = `mongodb+srv://${username}:${password}@maani.iokzzuy.mongodb.net/?retryWrites=true&w=majority`
    try {
        await mongoose.connect(URL,{useUnifiedTopology:true, useNewUrlParser:true});
        console.log(`database connected successfully on ${port}`)
    } catch (error) {
        console.log(`error while connected database ${error}`)
    }
}

export default database;