// Is the user logged in?
// Not specific user, just ANY user
const checkAuthentication = (req, res, next) => {
  console.log('Session:', req.session);
  const { userId } = req.session;
  if (!userId) {
      console.log('User not authenticated');
      return res.sendStatus(401);
  }
  console.log('User authenticated:', userId);
  return next();
};

module.exports = checkAuthentication;
