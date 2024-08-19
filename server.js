const http = require("http");

let count = 0;

// The callback function runs everytime a request is made
const server = http.createServer((req, res) => {
  console.log("Request made");
  count += 1;
  console.log(count);
});

// takes the port and hostname and a callback function tht at runs when we start listening
server.listen(3000, "localhost", () => {
  console.log("Listening on port 3000");
});

// localhost is a domain name that takes us to a loopback address i.e back to our own computer for requests.

// port number represents a specific gate, they are like doors in a computer.
