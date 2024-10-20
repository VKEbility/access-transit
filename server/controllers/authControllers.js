const User = require('../models/User');

// This controller takes the provided username and password and finds
// the matching user in the database. If the user is found and the password
// is valid, it adds the userId to the cookie (allowing them to stay logged in)
// and sends back the user object.
exports.loginUser = async (req, res) => {
  const { emailOrUsername, password } = req.body //the req.body value is provided by the client
  try {
    console.log('Login attempt:', emailOrUsername); //log the login attempt
    let user;

    if (emailOrUsername.includes('@')) {
      user = await User.findByEmail(emailOrUsername);
      if (!user) return res.status(404).send({ msg: 'User by that email not found' });
    } else {
      user = await User.findByUsername(emailOrUsername);
      if (!user) return res.status(404).send({ msg: 'User by that username not found' });
    }

    const isPasswordValid = await user.isValidPassword(password);
    if (!isPasswordValid) return res.status(401).send({ msg: 'Invalid password' });

    console.log(`User login detected:' ${user.id}`);
    req.session.userId = user.id;

    res.send(user); //sends status code 200 by default
  } catch (err) {
    console.error('Login error:', err);
    res.status(500).send({ msg: 'Internal: An unexpected error occurred during login' });
  };
};

// This controller sets `req.session` to null, destroying the cookie 
// which is the thing that keeps them logged in.
exports.logoutUser = (req, res) => {
  req.session = null;
  res.sendStatus(204);
};

// This controller returns 401 if the client is NOT logged in (doesn't have a cookie)
// or returns the user based on the userId stored on the client's cookie
exports.showMe = async (req, res) => {
  try {
    console.log('Session data:', req.session); // log session details
    if (!req.session.userId) {
      console.log('User not authenticated');
      return res.status(401).send({ msg: 'User not authenticated' });
    }
    const user = await User.find(req.session.userId);

    if (!user) {
      console.log('Guest user detected: user does not have an account yet');
      return res.status(404).send({ msg: 'No user logged in' });
    }

    res.send(user);
  } catch (err) {
    console.error(`Error fetching user data:`, err);
    res.status(500).send({ msg: 'Internal: An unexpected error occurred while fetching session user data' });
  };
};