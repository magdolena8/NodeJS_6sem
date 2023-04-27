const bodyparser = require("body-parser");
const express = require("express");
const path = require("path");
const app = express();

var PORT = process.env.port || 3000;

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

app.get("/", function (req, res) {
  res.send(`<h1>method:</h1> ${req.method}
  <h1>url:</h1> ${req.url}
  <h1>protocol:</h1> ${req.httpVersion}
  <h1>headers:</h1> ${req.rawHeaders}
  <h1>body:</h1> ${JSON.stringify(req.body)}`);
});

app.post("/", (req, res) => {
  res.send(`<h1>method:</h1> ${req.method}
  <h1>url:</h1> ${req.url}
  <h1>protocol:</h1> ${req.httpVersion}
  <h1>headers:</h1> ${req.rawHeaders}
  <h1>body:</h1> ${JSON.stringify(req.body)}`);
});

app.listen(PORT, function (error) {
  if (error) throw error;
  console.log("Server created Successfully on PORT", PORT);
});
