const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const calculatorRoutes = require("./routes");

const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(bodyParser.json());

app.use("/api", calculatorRoutes);

app.listen(PORT, console.log(`RUNNING ON PORT ${PORT}`));
