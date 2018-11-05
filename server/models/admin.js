'use strict';
module.exports = (sequelize, DataTypes) => {
  const admin = sequelize.define('admin', {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      defaultValue: true
    },
    username: DataTypes.STRING,
    name: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});
  admin.associate = function(models) {
    // associations can be defined here
  };
  return admin;
};