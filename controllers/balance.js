var model = require('../server/models/index');

const getBalance = (req, res) => {
  const username = req.query.username;
  const balance = model.balance.findOne({
    where: {
      userId: username
    }
  });
  balance.then((data) => {
    res.status(200).send({
      balance: Number(data.balance)
    });
  }).catch(() => {
    res.status(500).send({
      status: 1,
      message: 'Invalid user ID'
    })
  })
}

module.exports = {
  getBalance
};