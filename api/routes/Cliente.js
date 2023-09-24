const expres = require("express");
const {
  getCliente,
  GeneraToken,
  getConsultaCliente,
} = require("../controllers/Clientes");
const router = expres.Router();

//TODO http://localhost/DteMunicipios

router.get("/", getCliente);
router.get("/GeneraToken", GeneraToken);
router.get("/:id", getConsultaCliente);

module.exports = router;
