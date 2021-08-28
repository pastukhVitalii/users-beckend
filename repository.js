const users = [
  {"id": 1, "name": "Vitaliy"},
  {"id": 2, "name": "Yulia"}
];

const getUsers = () => {
  return new Promise((resolve, reject) => {
    resolve(users)
  })
}

const addUsers = (name) => {
  users.push({name: name})
}

exports.getUsers = getUsers;
exports.addUsers = addUsers;
