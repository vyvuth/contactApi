const jsonServer = require("json-server");
const cors = require("cors");
const path = require("path");

// Create server
const server = jsonServer.create();

// Use default middlewares (logger, static, cors, no-cache)
const middlewares = jsonServer.defaults();
server.use(middlewares);

// Enable CORS
server.use(cors());

// Set up router with your db file
const router = jsonServer.router(path.join(__dirname, 'contact.json'));
server.use(router);

// Start server
const PORT = 3000;
const HOST = 'localhost';

server.listen(PORT, () => {
    console.log(`json-server@0.17.1 running at http://${HOST}:${PORT}`);
});
