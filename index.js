var bodyParser = require("body-parser");
var express = require("express");
var cors = require("cors");
var app = express();

app.use(cors());

app.post("/klank", bodyParser.json(), function (req, res) {
  console.log(req.body);
  res.json({ ok: true });
});

app.listen(3000, function () {
  console.log("Server is running on port 3000.");
});
