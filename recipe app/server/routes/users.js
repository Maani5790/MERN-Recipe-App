import express from "express";
import { userLogin, userRegister } from "../controllers/users-controller.js";
const usersRouter = express()

usersRouter.post("/register", userRegister);
usersRouter.post("/login", userLogin);

export default usersRouter