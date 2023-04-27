const express = require("express");
const app = express();

var PORT = process.env.port || 5000;

app.get("/png", function (req, res) {
  res.sendFile(__dirname + "/splinter.png");
});

app.listen(PORT, function (error) {
  if (error) throw error;
  console.log("Server created Successfully on PORT", PORT);
});
