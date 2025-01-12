const { checkUserExists } = require("../services/user.service");

const validateLogin = (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    next({ message: "Missing fields", status: 400 });
  } else {
    next();
  }
};

const validateUserExists = async (req, res, next) => {
  const { email } = req.body;

  if (!(await checkUserExists(email))) {
    next({ message: "User does not exist", statusCode: 400 });
  } else {
    next();
  }
};

module.exports = [validateLogin, validateUserExists];
