const net = require("net");
const PORT = process.env.PORT || 5000;
const HOST = process.env.PORT || "127.0.0.1";
let sockets = [];

const server = net.createServer();
server.listen(PORT, HOST, () => {
  console.log("TCP Server is running on port " + PORT + ".");
});

server.on("connection", function (sock) {
  console.log("CONNECTED: " + sock.remoteAddress + ":" + sock.remotePort);
  sockets.push(sock);
  sock.on("data", function (data) {
    console.log("DATA " + sock.remoteAddress + ": " + data);
    sockets.forEach(function (sock, index, array) {
      sock.write(`ECHO: ${data}`);
    });
  });

  sock.on("close", function (data) {
    let index = sockets.findIndex(function (o) {
      return (
        o.remoteAddress === sock.remoteAddress &&
        o.remotePort === sock.remotePort
      );
    });
    if (index !== -1) sockets.splice(index, 1);
    console.log("CLOSED: " + sock.remoteAddress + " " + sock.remotePort);
  });

  sock.on("error", function () {
    console.log("EROOR EMMITED");
  });
});
