const { isAuthorized } = require('../utils/auth-utils');
const User = require('../models/User');

exports.createUser = async (req, res) => {
  console.log('--USER CONTROLLER INVOKED @createUser'); //to help debug;
  const { username, password, email, language } = req.body;
  try {
    // TODO: check if username is taken, and if it is what should you return?
    const existingEmail = await User.findByEmail(email);
    if (existingEmail) return res.status(409).send({ msg: 'Email already in use' }); //conflict status code

    const existingUsername = await User.findByUsername(username);
    if (existingUsername) return res.status(409).send({ msg: 'Username already taken' }); //noting that this + other guard clauses within the try block are transport related errors

    const user = await User.create(username, password, email, language);
    console.log(`New user created: ${user.id}`);
    req.session.userId = user.id;

    res.status(201).send(user); //successful creation code
  } catch (err) { //backend api related error
    console.error('Error creating user:', err);
    res.status(500).send({ msg: 'Internal: Error occurred while creating user' }); //for unexpected server errors
  }
};

exports.listUsers = async (req, res) => {
  console.log('--USER CONTROLLER INVOKED @listUsers'); //to help debug;
  try {
    const users = await User.list();
    res.send(users);
  } catch (err) {
    console.error('Error listing users:', err);
    res.status(500).send({ msg: 'Internal: Error occurred while listing all users' });
  }
};

exports.showUser = async (req, res) => {
  console.log('--USER CONTROLLER INVOKED @showUser'); //to help debug;
  const { id } = req.params;

  try {
    const user = await User.find(id);
    if (!user) return res.status(404).send({ msg: 'User does not exist' });

    res.send(user);
  } catch (err) {
    console.error('Error fetching current user:', err);
    res.status(500).send({ msg: 'Internal: An error occurred while getting current user' });
  }
};

exports.updateUser = async (req, res) => {
  console.log('--USER CONTROLLER INVOKED @updateUser'); //to help debug;
  const { username, password, email } = req.body;
  const { id } = req.params;

  try {
    // Not only do users need to be logged in to update a user, they
    // need to be authorized to perform this action for this particular
    // user (users should only be able to change their own profiles)
    if (!isAuthorized(id, req.session)) return res.status(403).send({ msg: 'Not authorized to update info for this user' });

    const existingEmail = await User.findByEmail(email);
    if (existingEmail) return res.status(409).send({ msg: 'Email already in use' });

    const existingUsername = await User.findByUsername(username);
    if (existingUsername) return res.status(409).send({ msg: 'Username already taken' });

    const updatedUser = await User.update(id, username, password, email);
    if (!updatedUser) return res.status(404).send({ msg: 'User not found' });

    console.log('Updated user:', updatedUser.id);
    res.send(updatedUser);
  } catch (err) {
    console.error('Error updating user:', req, err);
    res.status(500).send({ msg: 'Internal: An error occurred while updating user' });
  }
};

exports.deleteUser = async (req, res) => {
  // console.log('--USER CONTROLLER INVOKED @deleteUser'); //to help debug;
  const { id } = req.params;

  try {
    if (!isAuthorized(id, req.session)) return res.status(403).send({ msg: 'Not authorized to delete this user' });

    const deletedRows = await User.delete(id);
    if (deletedRows === 0) return res.status(404).send({ msg: 'User to delete not found' }); //knex del() returns num of rows deleted

    res.send('User deleted successfully');
  } catch (err) {
    console.error('Error deleting user:', err);
    res.status(500).send({ msg: 'Internal: An error occurred while deleting user' });
  }
};