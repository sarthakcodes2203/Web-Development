import mongoose from "mongoose";
const todoSchema = new mongoose.Schema({
  title: String,
  descrption: String,
  isdone: Boolean,
});
export const Todo = mongoose.model("Todo", todoSchema);
