const  expres = require("express");
const { getDepartamentos } = require("../controllers/DetDepartamentos");
const router = expres.Router();

//TODO http://localhost/DteMunicipios

router.get("/getDep",getDepartamentos)

module.exports = router