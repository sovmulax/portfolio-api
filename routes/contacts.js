"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Contacts extends Model {}
  Contacts.init(
    {
      nom: {
        type: DataTypes.TEXT,
        allowNull: false,
        unique: true,
      },
      email: {
        type: DataTypes.TEXT,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      phone: {
        type: DataTypes.TEXT,
        allowNull: false,
        unique: true,
      },
      subject: {
        type: DataTypes.TEXT,
        allowNull: false,
        unique: true,
      },
      message: {
        type: DataTypes.TEXT,
        allowNull: false,
        unique: true,
      },
    },
    {
      sequelize,
      modelName: "contacts",
      paranoid: true,
      deletedAt: "destroyTime",
    }
  );
  return Contacts;
};
