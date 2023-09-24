const { actividadEconomicaModel } = require("../models");

const getActividadEconomica = async (req, res) => {
  //Obtener lista de la base de datos
  try {
    const errores = [];
    const data = await actividadEconomicaModel.findAll();

    res.send({ results: data, result: "true", error: errores });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getActividadEconomica };
