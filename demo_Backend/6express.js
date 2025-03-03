// initializing express(already done in '--global')
// npm i express


import express from 'express';
const app = express()
const port = 3001

// app.get , app.post , app.put , app.delete (path,handler)

app.get('/', (req, res) => {
  res.send('Hello World!!!!')
})
app.get('/about', (req, res) => {
  res.send('about page!!!!')
})
app.get('/contact', (req, res) => {
  res.send('contact page!!!!')
})

//enter anything in place of slug and parallel response on screen
app.get('/blog/:slug', (req, res) => {
  res.send(`hello ${req.params.slug}`)
})
// app.get('/blog1', (req, res) => {
//   res.send('blog1 page!!!!')
// })
// app.get('/blog2', (req, res) => {
//   res.send('blog2 page!!!!')
// })
// app.get('/blog3', (req, res) => {
//   res.send('blog3 page!!!!')
// })


app.use(express.static('public'))



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
