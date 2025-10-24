const express = require("express");
const app = express();
app.use(express.json());

let todos = [
  { id: 1, title: "Learn Node.js", completed: false },
  { id: 2, title: "Learn Express.js", completed: false },
];

app.get("/todos", (req, res) => res.json(todos));

app.post("/todos", (req, res) => {
  const { title, completed } = req.body;
  if (!title) return res.status(400).json({ error: "Title is required" });

  const newTodo = {
    id: todos.length + 1,
    title,
    completed: completed || false,
  };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

app.put("/todos/:id", (req, res) => {
  const { id } = req.params;
  const { title, completed } = req.body;
  const todo = todos.find((t) => t.id === parseInt(id));
  if (!todo) return res.status(404).json({ error: "Todo not found" });

  if (title) todo.title = title;
  if (completed !== undefined) todo.completed = completed;
  res.json(todo);
});

app.get("/todos/:id", (req, res) => {
  const todo = todos.find((t) => t.id === parseInt(req.params.id));
  if (!todo) return res.status(404).json({ error: "Todo not found" });
  res.json(todo);
});

app.delete("/todos/:id", (req, res) => {
  todos = todos.filter((t) => t.id !== parseInt(req.params.id));
  res.json({ message: "Todo deleted successfully" });
});

app.listen(3000, () =>
  console.log("✅ Server running on http://localhost:3000")
);
