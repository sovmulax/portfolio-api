"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Contacts extends Model {}
  Contacts.init(
    {
      nom: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      email: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          isEmail: true,
        },
      },
      phone: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      subject: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      message: {
        type: DataTypes.TEXT,
        allowNull: false,
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
