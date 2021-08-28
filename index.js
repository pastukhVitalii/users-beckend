const cors = require('cors')
const express = require('express')
const users = require("./users-router");
const bodyParser = require('body-parser');

const app = express()
const port = 3333
app.use(cors())

// parse application/x-www-form-urlencoded
// use - middleware
app.use(bodyParser.urlencoded({extended: false}))

// parse application/json
app.use(bodyParser.json())

app.use("/users", users);

app.get('/tasks', (req, res) => {
  res.send('tasks')
})

app.use((req, res) => {
  res.send(404)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
