const ClientError = require("./path-to/ClientError");

try {
  throw new ClientError("Something went wrong", 404);
} catch (err) {
  console.log(err.message); // "Something went wrong"
  console.log(err.statusCode); // 404
}

module.exports = {ClientError}