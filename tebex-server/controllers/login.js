var model = require('../server/models/index');

const loginUser = (username, password) => {
  const user = model.user.findAll({
    where: {
      username: username
    }
  });
  return user;
}

module.exports = {
  loginUser
};