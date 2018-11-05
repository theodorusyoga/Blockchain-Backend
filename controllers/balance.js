var model = require('../server/models/index');

const getBalance = (req, res) => {
  const username = req.query.username;
  const user = model.user.findOne({
    where: {
      uniqueId: username
    }
  });
  user.then((data) => {
    res.status(200).send({
      balance: Number(data.dollars)
    });
  }).catch(() => {
    res.status(500).send({
      status: 1,
      message: 'Invalid User ID'
    })
  })
}

module.exports = {
  getBalance
};