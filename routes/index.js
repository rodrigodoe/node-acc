const router = require("express").Router();
const { convert } = require("../services");

router.get("/", (req, res) => {
  const { number } = req.body;
  if (!number) {
    res.status(400).send("Por favor, um numero deve ser informado");
  }

  const letter = convert(number);

  res.send({ number: letter });
});

module.exports = router;
