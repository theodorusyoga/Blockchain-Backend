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
  });
};

const updateBalance = (req, res) => {
  const username = req.body.username;
  const value = req.body.value;
  const amount = req.body.amount;
  const user = model.user.findOne({
    where: {
      uniqueId: username
    }
  });
  user.then((data) => {
    data.dollars = Number(data.dollars) - Number(value);
    data.amount = Number(data.amount) - Number(amount);
    
    data.save();
    res.status(200).send({
      data
    });
  }).catch(() => {
    res.status(500).send({
      status: 1,
      message: 'Invalid User ID'
    });
  })
}

module.exports = {
  getBalance,
  updateBalance
};