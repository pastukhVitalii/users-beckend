const {getUsers, getUser} = require("./repository");
const {addUsers} = require("./repository");

const express = require('express');
const {updateUsers} = require("./repository");
const {deleteUsers} = require("./repository");
const router = express.Router();

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now())
  next()
})
// define the home page route

router.get('/', async (req, res) => {
  let users = await getUsers(req.query.search);

  // filtration in backend
  /*if (!!req.query.search) {
    users = users.filter(u => u.name.indexOf(req.query.search) > -1)
  }*/
  res.send(users)
})

router.post('/', async (req, res) => {
  let name = req.body.name;
  await addUsers(name);

  res.send({success: true})
})

router.put('/', async (req, res) => {
  let id = req.body.id;
  let name = req.body.name;
  await updateUsers(id, name);

  res.send({success: true})
})

router.delete('/:id', async (req, res) => {
  let userid = req.params.id;
  await deleteUsers(userid);
  res.send(204)
})

router.get('/:id', async (req, res) => {
  let userId = req.params.id;
  let user = await getUser(userId);
  if (user) {
    res.send(user)
  } else {
    res.send(404)
  }
})

module.exports = router;
