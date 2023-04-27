const express = require("express");
const app = express();
var PORT = process.env.port || 5000;

app.get("/html", function (req, res) {
  
  res.sendFile(__dirname + "/index.html");
});

app.listen(3000, function (error) {
  if (error) throw error;
  console.log("Server created Successfully on PORT", PORT);
});
