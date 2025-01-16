import { Router, Request, Response } from "express";
import validateUserLogin from "../middlewares/validateUserLogin";
import validateUserRegister from "../middlewares/validateUserRegister";
import checkLogin from "../middlewares/checkLogin.middleware";
import { RecipeRepository } from "../repositories/recipe.repository";
import { login, registerNewUser } from "../controllers/user.controller";

const usersRouter = Router();

usersRouter.post("/register", validateUserRegister, registerNewUser);

usersRouter.post("/login", validateUserLogin, login);

usersRouter.get("/recipes", checkLogin, async (req: Request, res: Response) => {
    const { userId } = req.body;
    try {
        const recipes = await RecipeRepository.find({
            relations: ["user"], 
            where: { user: { id: userId } },
        });
        res.send(recipes);
    } catch (err: any) {
        res.status(500).send({
            message: "Error retrieving recipes",
            error: err.message,
        });
    }
});

export default usersRouter;
