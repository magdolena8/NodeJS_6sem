const udp = require("dgram");
let client = udp.createSocket("udp4");
const PORT = process.env.PORT || 3000;
const buffer = require("buffer");

client.on("message", (message, info) => {
  console.log(`MESSAGE: ${message}`);

});

let data = Buffer.from("hello from client");
client.send(data, PORT, "127.0.0.1", (err) => {
  err ? client.close() : console.log("Request success");
});

client.on("error", (error) => {
  console.log(`ERROR: ${error}`);
  client.close();
});
