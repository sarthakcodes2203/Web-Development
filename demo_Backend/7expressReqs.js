import express from 'express';
const app = express()
const port = 3001

app.use(express.static("public"))

app.get('/', (req, res) => {
  console.log('This is a get request');
  res.send('Hello World!!!!')
})
app.post('/', (req, res) => {
  console.log('This is a post request');
  res.send('Hello World post!')
})
//Chaining>>
app.put('/', (req, res) => {
  console.log('This is a PUT request');
  res.send('Hello World PUT!')
}).delete('/', (req, res) => {
  console.log('This is a delete request');
  res.send('Hello World delete!')
})

import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.get("/index", (req, res) => {
  console.log('This is a index');
  res.sendFile('./templates/index.html', { root: __dirname })
})

app.get("/api", (req, res) => {
  res.json({ a: 1, b: 2, c: 3 })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
