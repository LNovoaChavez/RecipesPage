const AppDataSource = require("./config/data-source");
const { PORT } = require("./config/envs");
const app = require("./server");
require("reflect-metadata");

const initialize = async () => {
    console.log("Initializing server");
    await AppDataSource.initialize();
    console.log("Database initialized");
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}

initialize();
