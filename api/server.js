const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://127.0.0.1:27017/react-todo', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => {
    console.error("MongoDB connection error:", err);
    process.exit(1); // Exit the application if unable to connect to the database
  });

const Todo = require('./models/Todo');

app.get('/todo', async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (err) {
    console.error("Error fetching todos:", err);
    res.status(500).json({ error: "An internal server error occurred." });
  }
});

app.post('/todo/new', async (req, res) => {
  try {
    const todo = new Todo({
      text: req.body.text
    });
    await todo.save();
    res.json(todo);
  } catch (err) {
    console.error("Error creating todo:", err);
    res.status(500).json({ error: "An internal server error occurred." });
  }
});

app.delete('/todo/delete/:id', async (req, res) => {
  try {
    const result = await Todo.findByIdAndDelete(req.params.id);
    if (!result) {
      return res.status(404).json({ error: "Todo not found." });
    }
    res.json({ result });
  } catch (err) {
    console.error("Error deleting todo:", err);
    res.status(500).json({ error: "An internal server error occurred." });
  }
});

app.get('/todo/complete/:id', async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    if (!todo) {
      return res.status(404).json({ error: "Todo not found." });
    }
    todo.complete = !todo.complete;
    await todo.save();
    res.json(todo);
  } catch (err) {
    console.error("Error updating todo:", err);
    res.status(500).json({ error: "An internal server error occurred." });
  }
});

app.put('/todo/update/:id', async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    if (!todo) {
      return res.status(404).json({ error: "Todo not found." });
    }
    todo.text = req.body.text;
    await todo.save();
    res.json(todo);
  } catch (err) {
    console.error("Error updating todo:", err);
    res.status(500).json({ error: "An internal server error occurred." });
  }
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
