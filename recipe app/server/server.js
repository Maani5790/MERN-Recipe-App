import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import morgan from "morgan";
import helmet from "helmet";
import database from "./database/db.js";
import usersRouter from "./routes/users.js";
import recipeRouter from "./routes/Recipes.js";

const server = express();
server.use(cors());
server.use(bodyParser.json({extended:true}));
server.use(bodyParser.urlencoded({extended:true}));
server.use(morgan("combined"));
server.use(helmet());
dotenv.config()

server.get("/", (req,res)=>{
    res.send("welcome application")
});

server.use("/auth", usersRouter);
server.use("/recipes", recipeRouter)

const username = process.env.MONGODB_USERNAME;
const password = process.env.MONGODB_PASSWORD;

database(username,password)

server.listen(process.env.PORT,()=>{
    console.log(`port listen on ${process.env.PORT} server`)
})



