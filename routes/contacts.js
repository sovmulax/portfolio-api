'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Clients extends Model {}
  Clients.init({
    nom: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: true
    },
    email: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: true,
      validate:{
        isEmail: true
      }
    },
    tel: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: true
    },
    avatar: {
      type: DataTypes.TEXT,
    },  }, {
    sequelize,
    modelName: 'clients',
    paranoid: true,
    deletedAt: 'destroyTime',
  });
  return Clients;
};