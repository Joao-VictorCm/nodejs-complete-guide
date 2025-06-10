const http = require("http");
const fs = require("fs");
let port = 3000;

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Enter message</title></head>");
    res.write(
      "<body><form action='/message' method='POST' ><input type='text'><button type='submit' name='message'>Send</button></input></form></body>"
    );
    res.write("</html>");
    return res.end();
  }

  if (url === "/message" && method === "POST") {
    fs.writeFileSync("message.txt", "DUMMY");
    res.statusCode = 302;
    res.setHeader("Location", "/");
    return res.end();
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>Page 01</title></head>");
  res.write("<body><h1>ola</h1></body>");
  res.write("</html>");
  res.end();
  console.log(`servidor rodando na porta ${port}`);
});

server.listen(port);
