const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  // console.log(req.headers)
  res.send(`Hello from ${req.headers.host}!`)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
