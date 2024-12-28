const User = require("../models/User");
const bcrypt = require("bcrypt");
const SignUp = async (req, res) => {
  console.log("signup");
  try {
    const { name, email, password, role } = req.body; // Include 'role' in the request body

    // Validate input
    if (!name || !email || !password) {
      return res.status(400).json({
        error: "Name, email, and password are required.",
      });
    }

    // Check if the user already exists by email
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "Email is already registered." });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create the user
    const user = new User({
      name,
      email,
      password: hashedPassword,
      role: role || "user", // Use provided role or default to "user"
    });

    await user.save();

    return res.status(201).json({
      message: "User created successfully.",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role, // Role can either be the default "user" or the provided value
      },
    });
  } catch (error) {
    console.error("Error creating user:", error);
    return res.status(500).json({ error: "Internal server error." });
  }
};

module.exports = { SignUp };
