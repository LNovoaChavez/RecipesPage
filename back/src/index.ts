import { AppDataSource } from "./config/data-source";
import { PORT } from "./config/envs";
import { preLoadRecipes } from "./helpers/preLoadRecipes";
import app from "./server";
import "reflect-metadata"


const initialize = async () => {
    console.log("Initializing server");
    await AppDataSource.initialize();
    console.log("Database initialized");
    await preLoadRecipes()
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}

initialize();

