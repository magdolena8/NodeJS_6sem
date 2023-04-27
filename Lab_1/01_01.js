var http = require("http");
http
  .createServer(function (request, response) {
    response.writeHead(200, { "Content-Type": "text/html" });

    const data = request;

    request.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });

    response.end(`<h1>Hello World</h1>`);
  })
  .listen(3000);
