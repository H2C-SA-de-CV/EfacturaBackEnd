const { sequelize } = require("../config/mssql");
const { DataTypes } = require("sequelize");

const DetMunicipios = sequelize.define(
  "DteCat013",
  {
    Municipio_Id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
    },
    Codigo: {
      type: DataTypes.STRING,
    },
    Valores: {
      type: DataTypes.STRING,
    },
    Departamento_id: {
      type: DataTypes.INTEGER,
    },
  },
  { timestamps: false, hasTrigger: true }
);
module.exports = DetMunicipios;
