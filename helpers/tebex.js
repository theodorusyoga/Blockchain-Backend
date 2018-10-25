require('dotenv').config();
const SHA256 = require('crypto-js/sha256');
var CryptoJS = require('crypto-js');

const tebexApiKey = process.env.TEBEX_API_KEY;

const tebexMiddleware = (req, res, next) => {
  const username = req.query.username;
  const hash = req.headers['x-bc-sig'];
  if(hash === ''){
    res.status(401).send({
      status: 1,
      message: 'Authorization field empty'
    });
    return;
  }
  const newHash = SHA256(`${tebexApiKey}${username}`).toString();
  if(String(newHash).toLowerCase() === String(hash).toLowerCase()){
    next();
  } else {
    res.status(401).send({
      status: 2,
      message: 'Unauthorized'
    });
  }
}

module.exports = {
  tebexMiddleware
}