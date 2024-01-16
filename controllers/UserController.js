// UserController.js
const { db } = require("../barber-api/db");
const User = db.users;

exports.register = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    console.error("User registration error:", error);
    res.status(500).send({ error: "Registration failed" });
  }
};
