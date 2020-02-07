const auth = async (req, res, next) => {
  try {
    next();
  } catch (error) {
    return res.status(400).send({ error: "Não autorizado!" });
  }
};

module.exports = auth;
