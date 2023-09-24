const { sequelize } = require("../config/mssql");
const { DataTypes } = require("sequelize");

const ActividadEconomica = sequelize.define(
  "DteCat019",
  {
    actividadEconomica_Id: {
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

module.exports = ActividadEconomica;
