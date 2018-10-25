var jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt');
var AES = require('crypto-js/aes');
var CryptoJS = require('crypto-js');
var model = require('../server/models/index');

const secretKey = 'm5ByKNEmCgUXsPDe';
const secretJwt = 'p7fTW+gyYSZ[X2?6';

const loginUser = (req, res) => {
  const user = model.user.findAll({
    where: {
      username: req.body.username
    }
  });
  user.then((data) => {
    if(data.length > 0){
      const decryptedPass = AES.decrypt(req.body.password, secretKey)
      .toString(CryptoJS.enc.Utf8);
      bcrypt.compare(decryptedPass, data[0].password, (err, same) => {
        if(same) {
          res.send({
            status: 0,
            token: jwt.sign({
              exp: Math.floor(Date.now() / 1000) + (120 * 60), // 1 hour
              id: data[0].id
            }, secretJwt),
            username: data[0].username
          });
        } else {
          res.send({
                status: 1,
                message: 'Email atau password salah'
            });
        }
      });
    } else {
      res.send({
        status: 1,
        message: 'Email tidak ditemukan'
      });
    }
  }).catch(() => {
    res.send({
      status: 1,
      message: 'Email atau password tidak ditemukan'
    })
  })
}

module.exports = {
  secretKey,
  loginUser,
  secretJwt
};