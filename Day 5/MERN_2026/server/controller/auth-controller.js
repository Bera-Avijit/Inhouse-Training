const User = require("../models/user-model");
const bcrypt = require("bcryptjs");
const registationSchema = require("../validator/auth-validator");

// Without external API integration
/*
const register = async (req, res) => {
  try {
    res.status(200).send("Welcome to Registration Page using Controller");
  } catch (error) {
    console.log(error);
  }
};
*/

// With external API integration
const register = async (req, res) => {
  try {
    const value = await registationSchema.validateAsync(req.body, {
      abortEarly: false,
    });
    const { username, email, phone, password } = value;
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    } else {
      // const saltRound = 10;
      // const hash_password = await bcrypt.hash(password, saltRound);
      // const userData = await User.create({username, email, phone, password: hash_password});

      const userData = await User.create({ username, email, phone, password });
      return res.status(201).json({
        message: "User registered successfully",
        userData,
        token: await userData.generateAuthToken(),
      });
    }
    // res.status(200).json({ message: req.body });
  } catch (error) {
    if (error.isJoi === true) {
      const errorMessages = error.details.map((err) => {
        return err.message;
      });
      return res
        .status(400)
        .json({ msg: "Validation failed", errors: errorMessages });
    }
    return res
      .status(500)
      .json({ message: "User Registration Failed", error: error.message });
  }
};

// Without external API integration
/*
const login = async (req, res) => {
  try {
    res.status(200).send("Welcome to Login Page using Controller");
  } catch (error) {
    console.log(error);
  }
};
*/

// With external API integration
const login = async (req, res) => {
  try {
    const value = await registationSchema.validateAsync(req.body, {
      abortEarly: false,
    });
    const { email, password } = value;
    const userData = await User.findOne({ email });
    if (!userData) {
      return res
        .status(400)
        .json({ message: "User does not exist! Register first." });
    } else {
      const isMatch = await bcrypt.compare(password, userData.password);
      if (isMatch) {
        return res.status(200).json({
          message: "Login successful",
          userData,
          token: await userData.generateAuthToken(),
        });
      } else {
        return res.status(400).json({ message: "Invalid credentials" });
      }
    }
  } catch (error) {
    if (error.isJoi === true) {
      const errorMessages = error.details.map((err) => {
        return err.message;
      });
      return res
        .status(400)
        .json({ msg: "Validation failed", errors: errorMessages });
    }
    return res
      .status(500)
      .json({ message: "User Registration Failed", error: error.message });
  }
};

module.exports = { register, login };
