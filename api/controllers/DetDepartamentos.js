const { departamentoModel } = require("../models");

const getDepartamentos = async (req, res) => {
  //Obtener lista de la base de datos
  try {
    const errores = [];
    const data = await departamentoModel.findAll();

    res.send({ results: data, result: "true", error: errores });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getDepartamentos };
