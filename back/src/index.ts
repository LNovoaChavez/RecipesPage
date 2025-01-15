import { AppDataSource } from "./config/data-source";
import { PORT } from "./config/envs";
import app from "./server";
import "reflect-metadata"


const initialize = async () => {
    console.log("Initializing server");
    await AppDataSource.initialize();
    console.log("Database initialized");
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}

initialize();

