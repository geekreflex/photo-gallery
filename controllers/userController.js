// const asyncHandler = require('express-async-handler');
const { generateToken } = require('../utils/generateToken');
const User = require('../models/userModel');

const { validationResult } = require('express-validator');

module.exports = {
  loginUser: async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    console.log(user);

    if (user && (await user.matchPassword(password))) {
      res.json({
        token: generateToken(user._id),
        user: {
          _id: user._id,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
        },
      });
    } else {
      res.status(401).json({ message: 'Invalid email or password' });
    }
  },

  registerUser: async (req, res) => {
    const { firstName, lastName, email, password } = req.body;

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      const firstError = errors.array().map((error) => error.msg)[0];
      return res.status(422).json({
        errors: firstError,
      });
    }

    const userExists = await User.findOne({ email });

    if (userExists) {
      res.status(400).json({ message: 'User already exists' });
      return;
    }

    const user = await User.create({
      firstName,
      lastName,
      email,
      password,
    });

    if (user) {
      return res.status(201).json({
        token: generateToken(user._id),
        user: {
          _id: user._id,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
        },
      });
    }
  },
};
