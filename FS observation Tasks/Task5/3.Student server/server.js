const express = require("express");

const app = express();

const PORT = 3000;

// Home route
app.get("/", (req, res) => {
    res.send("<h1>Welcome to Student Server</h1><p>This is the Home Page.</p>");
});

// Students route
app.get("/students", (req, res) => {
    const students = [
        "Pavan",
        "Rahul",
        "Priya",
        "Anil",
        "Sneha"
    ];

    res.json(students);
});

// About route
app.get("/about", (req, res) => {
    res.send(`
        <h1>About Application</h1>
        <p>This is a basic Express.js Student Server.</p>
        <p>It demonstrates routing and HTTP methods.</p>
    `);
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
