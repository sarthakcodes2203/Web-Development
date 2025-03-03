import mongoose from "mongoose";
import express from "express";
import {Todo} from "./models/11todo.js";

let connect = await mongoose.connect("mongodb://localhost:27017/11Todo");
console.log("Connected to MongoDB");

const app = express();
const port = 3001;

app.get("/", (req, res) => {
  res.send("Hello World!!!!");
  const todo = new Todo({
    title: "Learn Mongoose",
    descrption: "Learn Mongoose for MongoDB",
    isdone: false,
  });
  todo.save();
});

app.get("/a", async (req, res) => {
// let todos = await Todo.find();
// res.json(todos);
let todos = await Todo.findOne({});
res.json({title:todos.title,descrption:todos.descrption});
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
