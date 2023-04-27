const net = require("net");
const PORT = process.env.PORT || 5000;
const HOST = process.env.PORT || "127.0.0.1";
let sockets = [];

const client = new net.Socket();
client.connect(PORT, HOST, function () {
  console.log("Connected");
  client.write(
    `Hello from Client ${client.address().address}:${client.address().port}`
  );
});

client.on("data", function (data) {
  console.log(`${data}`);
});

// client.on("error", function (error) {
//   console.log(error);
// });
process.on("uncaughtException", function (err) {
  console.log(err);
});
client.on("close", function () {
  console.log("Connection closed");
});
