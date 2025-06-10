const http = require("http");
let port = 3000;

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>Page 01</title></head>");
  res.write("<body><h1>ola</h1></body>");
  res.write("</html>");

  console.log(`servidor rodando na porta ${port}, ${req}`);
});

server.listen(port);
