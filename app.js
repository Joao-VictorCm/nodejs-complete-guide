const http = require("http");

let port = 3000;

const server = http.createServer((req, res) => {
  console.log(`servidor rodando na porta ${port}, ${req}`);
});

server.listen(port);
