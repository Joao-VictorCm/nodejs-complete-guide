const http = require("http");
let port = 3000;

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    res.write(
      <html>
        res.write(
        <head>
          <title>Enter message</title>
        </head>
        ) res.write(
        <body>
          <form action="/message" method="POST">
            <input type="text" name="message"></input>
          </form>
        </body>
        ) res.write
      </html>
    );

    return res.end();
  }

  console.log(`servidor rodando na porta ${port}, ${req}`);
});

server.listen(port);
