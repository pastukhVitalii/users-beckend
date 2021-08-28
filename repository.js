const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
});

const User = mongoose.model("MyUser", userSchema);

const getUsers = (search) => {
  if (!search) {
    return User.find()
  } else {
    // filtration in BD
    return User.find({name: new RegExp(search)})
  }
}

const getUser = (id) => {
  return User.find({_id: id})
}

const addUsers = (name) => {
  const user1 = new User({name: name})
  return user1.save();
}

const deleteUsers = (id) => {
  return User.deleteOne({_id: id})
}

const updateUsers = (id, name) => {
  return User.updateOne({_id: id}, {name: name})
}

exports.getUsers = getUsers;
exports.addUsers = addUsers;
exports.deleteUsers = deleteUsers;
exports.getUser = getUser;
exports.updateUsers = updateUsers;
