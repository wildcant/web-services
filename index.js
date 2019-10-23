const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const routes = require("./routes/index");

const app = express();
app.use(cors());
app.use(morgan("combined"));
app.use(bodyParser.json());

app.use("/server", routes);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on ${port}`));