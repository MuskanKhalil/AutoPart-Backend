const express = require('express');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const app = express();

app.use(express.json());

// Test Route: Naya User banane ke liye
app.post('/register', async (req, res) => {
  try {
    const { first_name, last_name, email, password } = req.body;
    const newUser = await prisma.user.create({
      data: { first_name, last_name, email, password }
    });
    res.json({ message: "User created successfully!", user: newUser });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
// Login Route
app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Database mein user ko dhoondhen
    const user = await prisma.user.findUnique({
      where: { email: email }
    });

    // Check karein user mila aur password sahi hai (abhi hum plain text password check kar rahe hain)
    if (user && user.password === password) {
      res.json({ message: "Login successful!", user });
    } else {
      res.status(401).json({ message: "Invalid email or password" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
app.listen(3000, () => console.log("Server running on port 3000"));
