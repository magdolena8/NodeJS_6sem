const express = require("express");
const app = express();
var PORT = process.env.port || 5000;


app.get("/api/name", function (req, res) {
  res.setHeader("content-type", "text/plain");
  res.send("Иван Александрович Беганский ФИТ-3");
});

app.get("/xmlhttprequest", function (req, res) {
  res.sendFile(__dirname + "/xmlhttprequest.html");
});

app.get("/fetch", function (req, res) {
  res.sendFile(__dirname + "/fetch.html");
});

app.get("/jquery", function (req, res) {
  res.sendFile(__dirname + "/jquery.html");
});

app.listen(PORT, function (error) {
  if (error) throw error;
  console.log("Server created Successfully on PORT", PORT);
});
