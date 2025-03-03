import express from "express";
const app = express();
const port = 2004;

import { fileURLToPath } from "url";
import { dirname } from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  // res.sendFile("templates/ejs.html", { root: __dirname });
  let siteName = "sarthakcodes";
  let searchBar = "Look for content";
  let arr = [22, "23", "24", "32"];
  res.render("9tempEngine", {
    siteName: siteName,
    searchBar: searchBar,
    arr,
  });
});

// app.get("/blog/:slug", (req, res) => {
//   let blogTitle = "a blog title";
//   let blogContent = "a blog content";
//   res.render("9tempEngine", {
//     blogTitle: blogTitle,
//     blogContent: blogContent,
//   });
// });

app.use(express.static("public"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
