const { DBController } = new require("./dbController.js");
var dbController = new DBController();
const express = require("express");
const cors = require("cors");

const app = express();
var PORT = process.env.port || 5000;
app.use(express.json());

app.use(
  cors({
    origin: "*",
  })
);

app.get("/api/db", function (req, res) {
  res.contentType("application/json");
  dbController.select().then((data) => res.send(data));
});

app.post("/api/db", function (req, res) {
  res.contentType("application/json");
  const person = ({ id, name, birthday } = req.body);
  dbController.insert(person)
    ? res.status(200).end()
    : () => {
        console.log(this);
        res.status(404).end();
      };
});

app.put("/api/db", function (req, res) {
  res.contentType("application/json");
  const person = ({ id, name, birthday } = req.body);
  dbController.update(person)
    ? res.sendStatus(200).end()
    : res.sendStatus(400).end();
});

app.delete("/api/db", function (req, res) {
  res.contentType("application/json");
  const personID = req.body.id;
  dbController.delete(personID)
    ? res.sendStatus(200).end()
    : res.sendStatus(400).end();
});

app.listen(PORT, function (error) {
  if (error) throw error;
  console.log("Server created Successfully on PORT", PORT);
});

dbController.on("SELECT", function (data) {
  setTimeout(() => {
    console.log(data);
  }, 1000);
});
dbController.on("INSERT", function (data) {
  setTimeout(() => {
    console.log(data);
  }, 1000);
});
dbController.on("UPDATE", function (data) {
  setTimeout(() => {
    console.log(data);
  }, 1000);
});
dbController.on("DELETE", function (data) {
  setTimeout(() => {
    console.log(data);
  }, 1000);
});
