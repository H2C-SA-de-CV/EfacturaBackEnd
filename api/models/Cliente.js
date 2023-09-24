const { sequelize } = require("../config/mssql");
const { DataTypes } = require("sequelize");

const Cliente = sequelize.define(
  "Clientes",
  {
    Cliente_Id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
    },
    Cliente: {
      type: DataTypes.STRING,
    },
    Nombre: {
      type: DataTypes.STRING,
    },
    Alias: {
      type: DataTypes.STRING,
    },
    Direccion: {
      type: DataTypes.STRING,
    },
    Correo: {
      type: DataTypes.STRING,
    },
    Telefono: {
      type: DataTypes.STRING,
    },
    pais: {
      type: DataTypes.STRING,
    },
    Nit: {
      type: DataTypes.STRING,
    },
    Nrc: {
      type: DataTypes.STRING,
    },
    Giro: {
      type: DataTypes.STRING,
    },
    CodGiro: {
      type: DataTypes.STRING,
    },
    Zona: {
      type: DataTypes.STRING,
    },
    Token: {
      type: DataTypes.STRING,
    },
    actualizado: {
      type: DataTypes.BOOLEAN,
    },
    Vendedor: {
      type: DataTypes.STRING,
    },
    compania: {
      type: DataTypes.DECIMAL,
    },
  },
  { timestamps: false, hasTrigger: true }
);

module.exports = Cliente;
