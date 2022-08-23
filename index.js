const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.json([{
    name:'juan',
    email:'juanp@gmail.com'
  },
  {
    name:'juana',
    email:'juanap@gmail.com'
  },{
    name:'andersonp',
    email:'andersonp@gmail.com'
  },{
    name:'carlosperes',
    email:'carlosperes@gmail.com'
  }])
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
