const {getUsers} = require("./repository");
const {addUsers} = require("./repository");

const express = require('express');
const router = express.Router();

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now())
  next()
})
// define the home page route

router.get('/', async (req, res) => {
  let users = await getUsers();

  if (!!req.query.search) {
    users = users.filter(u => u.name.indexOf(req.query.search) > -1)
  }
  res.send(users)
})

router.post('/', async (req, res) => {
  let name = req.body.name;
  await addUsers(name);
  res.send({success: true})
})

router.get('/:id', async (req, res) => {
  let userId = req.params.id;
  let users = await getUsers();
  let user = users.find(u => u.id == userId);
  if (user) {
    res.send(user)
  } else {
    res.send(404)
  }
})

module.exports = router;
