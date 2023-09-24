require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const { dbConnect } = require("./api/config/mssql");
app.use(cors());
const port = process.env.PORT || 3000;
//Aqui invocamos a las rutas
app.use("/api/v1", require("./api/routes"));
app.listen(port, () => {
  console.log("Tu app esta lista por http://localhost:" + port);
});
dbConnect();
