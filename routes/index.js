const router = require("express").Router();
const { convert } = require("../services");

router.post("/", (req, res) => {
  const { number } = req.body;
  console.log(req.body);
  if (!number) {
    return res.status(400).send("Por favor, um numero deve ser informado");
  }

  const letter = convert(number);

  res.send({ number: letter });
});

module.exports = router;
