'use strict';
module.exports = (sequelize, DataTypes) => {
  const balance = sequelize.define('balance', {
    userId: DataTypes.STRING,
    balance: DataTypes.DECIMAL
  }, {});
  balance.associate = function(models) {
    // associations can be defined here
  };
  return balance;
};