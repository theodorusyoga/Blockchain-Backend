'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    uniqueId: DataTypes.STRING,
    name: DataTypes.STRING,
    dollars: DataTypes.BIGINT,
    amount: DataTypes.BIGINT
  }, {});
  user.associate = function(models) {
    // associations can be defined here
  };
  return user;
};