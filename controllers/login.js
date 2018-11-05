var jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt');
var AES = require('crypto-js/aes');
var CryptoJS = require('crypto-js');
var model = require('../server/models/index');
const boom = require('boom')

const loginUser = (req, res) => {
  model.admin.findOne({
    where: {
      username: req.body.username
    }
  }).then((data) => {
    const decryptedPass = AES.decrypt(req.body.password, process.env.secretKey)
    .toString(CryptoJS.enc.Utf8);
    bcrypt.compare(decryptedPass, data.password, (err, same) => {
      if(same) {
        res.send({
          status: 0,
          token: jwt.sign({
            exp: Math.floor(Date.now() / 1000) + (120 * 60), // 1 hour
            id: data.id
          }, process.env.secretJwt),
          username: data.username,
          name: data.name
        });
      } else {
        res.status(401).send(boom.unauthorized('Invalid email or password').output.payload);
      }
    });
  }).catch(() => {
    res.status(401).send(boom.unauthorized('Invalid username').output.payload);
  })
}

module.exports = {
  loginUser
};