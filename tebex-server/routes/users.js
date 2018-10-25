var express = require('express');
var login = require('../controllers/login');
var router = express.Router();

/* GET users listing. */
router.post('/login', function(req, res, next) {
  login.loginUser(req, res);
});

module.exports = router;
