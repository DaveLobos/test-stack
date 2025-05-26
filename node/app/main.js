const http = require("http");
const index = require("./index.js");

const hostname = "0.0.0.0";
const port = 3000;

http.createServer((req, res) => {
  const {url} = req;

  if(url === "/"){
    res.statusCode = 200;
    res.setHeader("content-type", "text/html");
    res.end(index());
  }else{
    res.statusCode = 200;
    res.setHeader("content-type", "text/html");
    res.end("It Worked\n");
  }
})
  .listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });
