var express = require('express');
var login = require('../controllers/login');
var router = express.Router();

/* GET users listing. */
router.post('/login', function(req, res, next) {
  const user = login.loginUser(req.body.username, req.body.password);
  user.then((data) => {
    res.send(data);
  })
});

module.exports = router;
