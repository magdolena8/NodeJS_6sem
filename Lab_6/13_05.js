const udp = require("dgram");
const PORT = process.env.PORT || 3000;
let server = udp.createSocket("udp4");

server.on("message", (message, info, error) => {
  console.log(`MESSAGE: ${message}`);
  server.send(`ECHO: ${message}`, info.port, info.address, (error) => {
    error ? server.close() : console.log("Reponse Success");
  });
});

server.on("error", (error) => {
  console.log(`ERROR: ${error}`);
  server.close();
});

server.on("listening", () => {
  console.log(`listening on port ${server.address().port}`);
});

server.on("close", () => {
  console.log(`SERVER: STOPED`);
});

server.bind(PORT);
