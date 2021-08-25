const {getUsers} = require("./repository");
const {addUsers} = require("./repository");

exports.usersControllers = (req, res) => {
  if (req.method === "POST") {
    addUsers('Roma')
    res.write(JSON.stringify({success: true}))
  } else {// res.write(`[{"id": 1, "name": "Vitaliy"}, {"id": 2, "name": "Yulia"}]`)
    res.write(JSON.stringify(getUsers()))
  }
}
