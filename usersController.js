const {getUsers} = require("./repository");
const {addUsers} = require("./repository");

exports.usersControllers = async (req, res) => {
  if (req.method === "POST") {
    addUsers('Roma');
    res.write(JSON.stringify({success: true}));
    // res.write(`[{"id": 1, "name": "Vitaliy"}, {"id": 2, "name": "Yulia"}]`)
    res.end();
  } else {
    // res.write(JSON.stringify(getUsers()))
    let users = await getUsers();
    console.log(users)
    debugger
    res.write(users.toString());
    console.log('res ', res)
    res.end();
  }
}
