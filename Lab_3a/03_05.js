const express = require("express");
const PORT = process.env.PORT || 5005;

const app = express();

app.get("/fact", function (req, res) {
  res.contentType("application/json");
  let k = req.query.k;
  let fact = factorialize(k);

  setImmediate(() => {
    res.send({ k, fact });
  });
});

app.get("/", function (req, res) {
  res.contentType("text/html");
  res.sendFile(__dirname + "/index5.html");
});

function factorialize(num) {
  if (num < 0) return -1;
  else if (num == 0) return 1;
  else {
    return num * factorialize(num - 1);
  }
}

app.listen(PORT, function (error) {
  if (error) throw error;
  console.log("Server created Successfully on PORT", PORT);
});
