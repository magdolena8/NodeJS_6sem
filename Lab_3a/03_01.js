const process = require("process");
const express = require("express");
let status = "norm";

const app = express();
var PORT = process.env.port || 5001;
process.stdin.setEncoding("utf-8");

app.get("/", function (req, res) {
  res.contentType("text/html");
  res.send(`<h1>${status}</h1>`);
});
let chunk = "norm";

process.stdout.write(`current status: ${status} -> `);

process.stdin.on("readable", () => {
  while (null !== (chunk = process.stdin.read())) {
    switch (chunk.trim()) {
      case "exit":
        status = "exit";
        process.abort();
      case "stop":
        status = "stop";
        break;
      case "test":
        status = "test";
        break;
      case "idle":
        status = "idle";
        break;
      default:
        break;
    }
    process.stdout.write(`current status: ${status} -> `);
  }
});

app.listen(PORT, function (error) {
  if (error) throw error;
  console.log("Server created Successfully on PORT", PORT);
});
