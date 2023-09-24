const { clienteModel } = require("../models");
const { tokenSign, verifyToken } = require("../utils/handleJwt");

const getCliente = async (req, res) => {
  //Obtener lista de la base de datos
  try {
    const errores = [];
    const data = await clienteModel.findAll();

    res.send({ results: data, result: "true", error: errores });
  } catch (error) {
    console.log(error);
  }
};

const GeneraToken = async (req, res) => {
  //let verificactionLink;
  const message = "Se genero Token sin problema";
  try {
    const cliente = await clienteModel.findAll({
      attributes: ["Cliente", "compania"],
    });
    for (let a = 0; a < cliente.length; a++) {
      const element = cliente[a];
      const datos = {
        cliente: element.Cliente,
        compania: element.compania,
      };
      const token = await tokenSign(datos);

      const updateToken = await clienteModel.update(
        {
          Token: token,
        },
        { where: { Cliente: element.Cliente } }
      );
    }
    res.send({ message });
  } catch (error) {}
};
const getConsultaCliente = async (req, res) => {
  const resetToken = req.params.id;
  let jwtPayload;
  try {
    jwtPayload = await verifyToken(resetToken);
    if (!jwtPayload) {
      return res
        .status(401)
        .send({ message: "El tiempo para realizar cambio ha expirado" });
    }
    const cliente = await clienteModel.findOne({
      where: { Token: resetToken },
    });

    //dataNew = JSON.stringify(cliente[0]);
    //dataNew = JSON.parse(dataNew);

    //console.log(dataNew);
    res.send({ results: cliente, result: "true", error: "" });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getCliente, GeneraToken, getConsultaCliente };
