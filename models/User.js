const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const { STRING, INTEGER } = DataTypes;
const User = sequelize.define("user", {
  id: {
    type: INTEGER,
    primaryKey: true,
    autoIncrement: true,
    unique: true,
  },
  phone_number: {
    type: STRING,
    unique: true,
  },
  first_name: {
    type: STRING,
  },
  last_name: { type: STRING },
});

module.exports = User;
