const { checkUserExists } = require("../services/user.service");
const { ClientError } = require("../utils/errors");

const validateUserRegister = (req, res, next) => {
  const { email, password, name, lastname } = req.body;

  if (!email || !password || !name || !lastname) {
    next(new ClientError("Missing required fields", 400));
  } else {
    next();
  }
};

const validateUserExists = async (req, res, next) => {
  const { email } = req.body;

  if (await checkUserExists(email)) {
    next(new ClientError("User already exists", 400));
  } else {
    next();
  }
};

module.exports = [validateUserRegister, validateUserExists];
