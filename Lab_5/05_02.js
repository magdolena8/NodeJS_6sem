const express = require("express");
const { send } = require("m0603_magolena");

const app = express();
var PORT = process.env.port || 5000;
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, function (error) {
  if (error) throw error;
  console.log("Server created Successfully on PORT", PORT);
});

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/sendmessage", function (req, res) {
  const options = ({ sender, receiver, message } = req.body);
  send(options.sender, options.receiver, "c51Lj3isGhcxkpJRm571", message);
  res.redirect("/");
});
