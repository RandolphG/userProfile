/* starting express server */
const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const cors = require("cors");
require("dotenv").config();

/* executes database code */
require("./config/database");
const app = express();
app.use(logger("dev"));
app.use(cors());
/* parse the post body string to json 'req.body' */
app.use(express.json());

/* mounting a router to the app */
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:4002");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

/* routes*/
app.use("/api/users", require("./routes/users"));
app.listen(4001, () => console.log("listening from port 4001"));
