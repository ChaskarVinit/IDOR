const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
app.use(express.static(__dirname)); // Serve static files

// Load users from JSON file
const usersFile = path.join(__dirname, "users.json");
const users = JSON.parse(fs.readFileSync(usersFile, "utf-8"));

// Vulnerable endpoint (IDOR)
app.get("/user/:id", (req, res) => {
    const userId = req.params.id;
    if (users[userId]) {
        res.json(users[userId]); // Exposing full user data!
    } else {
        res.status(404).json({ error: "User not found" });
    }
});

app.listen(3000, () => {
    console.log("🚀 Server running on http://localhost:3000");
});