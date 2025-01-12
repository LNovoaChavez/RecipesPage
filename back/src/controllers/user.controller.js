const { catchedController } = require("../utils/catchedController");
const { loginUserService, registerUserService } = require("../services/user.service");

const registerNewUser = catchedController(async (req, res) => {
  const { email, password, name, lastname } = req.body;

  if (!email || !password || !name || !lastname) {
    return res.status(400).send({ message: "Missing fields" });
  }

  const newUser = await registerUserService({
    email,
    password,
    name,
    lastname,
  });
  res.status(201).send(newUser);
});

const login = catchedController(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).send({ message: "Missing fields" });
  }

  const user = await loginUserService({ email, password });
  res.status(200).send({
    login: true,
    user: user.user,
    token: user.token,
  });
});

module.exports = { registerNewUser, login };
