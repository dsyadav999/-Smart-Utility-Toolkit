const http = require("http");
const logger = require("./modules/logger");

const PORT = 8080;

const routes = {
  "/": "Welcome to Node Server",
  "/about": "About Page",
  "/contact": "Contact Page",
};

const server = http.createServer((req, res) => {
  logger.info(`Incoming request: ${req.method} ${req.url}`);

  const body = routes[req.url];

  if (body) {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end(body);
    logger.success(`Responded 200 for ${req.url}`);
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 - Page Not Found");
    logger.error(`Responded 404 for ${req.url}`);
  }
});

server.listen(PORT, () => {
  logger.success(`Server running at http://localhost:${PORT}/`);
});