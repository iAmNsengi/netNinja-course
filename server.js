const http = require("http");
const fs = require("fs");

let count = 0;

// The callback function runs everytime a request is made
const server = http.createServer((req, res) => {
  console.log("Request made");

  // set header content type
  //   res.setHeader("Content-Type", "text/plain");
  res.setHeader("Content-Type", "text/html");

  fs.readFile("./views/index.html", (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      // res.write(data);
      res.end(data);
    }
  });

  //   res.write("Hello, Nsengi");
  // res.write("<p>I am Nsengi</p>");
});

// takes the port and hostname and a callback function tht at runs when we start listening
server.listen(3000, "localhost", () => {
  console.log("Listening on port 3000");
});

// localhost is a domain name that takes us to a loopback address i.e back to our own computer for requests.

// port number represents a specific gate, they are like doors in a computer.
