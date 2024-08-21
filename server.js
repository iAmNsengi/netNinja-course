const http = require("http");
const fs = require("fs");

let count = 0;

// The callback function runs everytime a request is made
const server = http.createServer((req, res) => {
  console.log("Request made");

  // set header content type
  //   res.setHeader("Content-Type", "text/plain");
  res.setHeader("Content-Type", "text/html");

  let path = "./views/";
  switch (req.url) {
    case "/":
      path += "index.html";
      res.statusCode = 200;
      break;
    case "/about":
      path += "about.html";
      res.statusCode = 200;
      break;
    case "/about-me":
      res.statusCode = 301;
      res.setHeader("Location", "/about");
      res.end();
      break;
    default:
      path += "404.html";
      res.statusCode = 404;
      break;
  }

  fs.readFile(path, (err, data) => {
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
