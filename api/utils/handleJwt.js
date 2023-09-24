const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;
const tokenSign = async (datos) => {
  const sign = jwt.sign(
    {
      cliente: datos.cliente,
      compania: datos.compania,
    },
    JWT_SECRET,
    { expiresIn: "720h" }
  );
  return sign;
};

const verifyToken = async (tokenJwt) => {
  try {
    return jwt.verify(tokenJwt, JWT_SECRET);
  } catch (error) {
    return null;
  }
};

module.exports = { tokenSign, verifyToken };
