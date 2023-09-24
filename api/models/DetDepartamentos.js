const { sequelize } = require("../config/mssql");
const { DataTypes } = require("sequelize");

const DetDepartamentos = sequelize.define(
  "DteCat012",
  {
    departamento_Id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
    },
    Codigo: {
      type: DataTypes.STRING,
    },
    Valores: {
      type: DataTypes.STRING,
    },
  },
  { timestamps: false, hasTrigger: true }
);

module.exports = DetDepartamentos;
