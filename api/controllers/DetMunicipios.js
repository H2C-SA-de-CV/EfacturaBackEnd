const { municipiosModel } = require("../models");

const getmunicipios = async (req, res) => {
  //Obtener lista de la base de datos
  try {
    const errores = [];
    const data = await municipiosModel.findAll();

    res.send({ results: data, result: "true", error: errores });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getmunicipios };
