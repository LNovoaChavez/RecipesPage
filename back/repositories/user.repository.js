const { AppDataSource } = require("../config/dataSource");
const { User } = require("../entities/User");

const UserRepository = AppDataSource.getRepository(User);

module.exports = { UserRepository };
