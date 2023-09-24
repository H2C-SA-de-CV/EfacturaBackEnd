const expres = require("express");
const { getActividadEconomica } = require("../controllers/ActividadEconomica");
const router = expres.Router();

//TODO http://localhost/DteMunicipios

router.get("/", getActividadEconomica);

module.exports = router;
