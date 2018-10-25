const express = require('express');
const login = require('../controllers/login');
const balance = require('../controllers/balance');
const tebex = require('../helpers/tebex');
const router = express.Router();

/* GET users listing. */
router.post('/login', function(req, res, next) {
  login.loginUser(req, res);
});

router.get('/tebexbalance', tebex.tebexMiddleware, function (req, res, next) {
  balance.getBalance(req, res);
});

module.exports = router;
