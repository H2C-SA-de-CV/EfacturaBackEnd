const expres = require("express");
const { getmunicipios } = require("../controllers/DetMunicipios");
const router = expres.Router();

//TODO http://localhost/DteMunicipios

router.get("/getMunicipios", getmunicipios);

module.exports = router;
