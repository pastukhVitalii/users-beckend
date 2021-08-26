/*const users = [
  {"id": 1, "name": "Vitaliy"},
  {"id": 2, "name": "Yulia"}
];*/

/*const getUsers = () => {
  return users
}*/

const fs = require("fs");

const getUsers = (callback) => {
  let promise = new Promise((resolve, reject) => {
    fs.readFileSync("users.json", function (err, buf) {
      resolve(buf.toJSON())
    })
  })
  console.log(promise)
  debugger
  return promise
}

const addUsers = (name) => {
  users.push({name: name})
}

exports.getUsers = getUsers;
exports.addUsers = addUsers;
