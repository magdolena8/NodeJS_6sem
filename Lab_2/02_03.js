const express = require("express");
const app = express();

var PORT = process.env.port || 5000;

app.get("/api/name", function (req, res) {
  res.setHeader("content-type", "text/plain");
  res.send("Иван Александрович Бегнаский ФИТ-3");
});

app.listen(PORT, function (error) {
  if (error) throw error;
  console.log("Server created Successfully on PORT", PORT);
});
