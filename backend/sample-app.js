const express = require("express");
const app = express(); //creates an Express app object.
const port = 3000;

app.get("/", (req, res) => {
  res.send("Home Page Requested");
});

app.get("/about", (req, res) => {
  res.send("About Page");
});

// Query Params and Route Params

// http://localhost:3000/search?term=node
app.get("/search", (req, res) => {
  res.send(
    `You searched for ${req.query.term || "Nothing"} and ${
      req.query.term2 || ""
    }`
  );
});

const users = [
  { id: 1, name: "Ajit", age: 25 },
  { id: 2, name: "John", age: 30 },
  { id: 3, name: "Jane", age: 28 },
];

app.get("/user", (req, res) => {
  res.json(users);
});

// http://localhost:3000/user/123
app.get("/user/:id", (req, res) => {
  const user = users.find((user) => user.id === parseInt(req.params.id));
  res.send(user || { msg: "User Not Found" });
});

app.use(express.json()); // Middleware to parse JSON

app.post("/user", (req, res) => {
  const user = req.body;
  users.push(user);
  res.json({ message: "User added!", user });
});

app.delete("/user/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  const index = users.findIndex((user) => user.id === userId);
  if (index !== -1) {
    const deletedUser = users.splice(index, 1);
    res.json({ message: "User deleted!", user: deletedUser[0] });
  } else {
    res.status(404).json({ message: "User not found!" });
  }
});

app.put("/user/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  const index = users.findIndex((user) => user.id === userId);
  if (index !== -1) {
    // spread operator to update user details so that only provided fields are updated
    users[index] = { ...users[index], ...req.body };
    res.json({ message: "User updated!", user: users[index] });
  } else {
    res.status(404).json({ message: "User not found!" });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
