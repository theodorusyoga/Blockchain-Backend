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
      balance: Number(data.amount)
    });
  }).catch(() => {
    res.status(500).send({
      status: 1,
      message: 'Invalid User ID'
    })
  });
};

const getBalances = (req, res) => {
  const page = req.query.page ? req.query.page : 1;
  const limit = req.query.limit ? req.query.limit : 10;

  model.user.findAndCountAll().then((data) => {
    const pages = Math.ceil(data.count / limit);
    const offset = limit * (page-1);
    const user = model.user.findAll({
      limit: Number(limit),
      offset: Number(offset)
    });
    user.then((result) => {
      res.status(200).json({
        data: result,
        meta: {
          page,
          limit,
          total_data: data.count,
          total_pages: pages
        }
      });
    }).catch(() => {
      res.status(500).send({
        status: 1,
        message: 'Server Error'
      })
    });
  })

  
};

const getBalanceWithDetails = (req, res) => {
  const username = req.query.username;
  const user = model.user.findOne({
    where: {
      uniqueId: username
    }
  });
  user.then((data) => {
    res.status(200).send({
      userId: data.uniqueId,
      name: data.name,
      balance: Number(data.amount),
      dollars: Number(data.dollars)
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
  getBalances,
  getBalance,
  updateBalance,
  getBalanceWithDetails
};