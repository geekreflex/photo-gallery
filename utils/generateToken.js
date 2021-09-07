const jwt = require('jsonwebtoken');

module.exports = {
  generateToken: (id) => {
    return jwt.sign({ id }, process.env.TOKEN_SECRET, {
      expiresIn: process.env.TOKEN_EXPIRE,
    });
  },
};
