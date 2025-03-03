import express from 'express';
const app = express()
const port = 3001
import fs from 'fs/promises';

app.get('/', (req, res) => {
  res.send('Hello World!!!! ')
})

// Built-in middleware>>>
// app.use(express.static('public'))

// // function as middleware>>
// app.use((req,res,next)=>{
//     console.log('LOGGED');
//     next()
// })

//  middleware1 (happening other than main page)
app.use((req,res,next)=>{
    console.log('m1');
    // console.log(`it is a ${req.method}`)
    fs.appendFile("8logs.txt",`${Date.now()}it is a ${req.method}\n`) 
    .catch(err => console.error('Error writing to log file:', err));
    req.saru="Hello i am sarthak"
    
    // res.send("hacked by middleware1")
    next()
})
//  middleware2>>
app.use((req,res,next)=>{
    console.log('m2');
    next()
})

app.get('/blog', (req, res) => {
    res.send('Hello blog!!!! '+req.saru)
  })
  
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
