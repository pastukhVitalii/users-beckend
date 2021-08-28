const cors = require('cors')
const express = require('express')
const users = require("./users-router");
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/users');
}
/*const Cat = mongoose.model('Cat', { name: String });

const kitty = new Cat({ name: 'Zildjian' });
kitty.save().then(() => console.log('meow'));*/

/*const db = mongoose.connections;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", function () {

})*/

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
