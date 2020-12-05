const http = require('http');
const { parameters } = require('./config/');
const app = require('./app');

const server = http.createServer(app);

// Escuchar el servidor en el puerto determinado
server.listen(process.env.PORT || parameters.port);

console.log(
  `-------------- ${parameters.service} listening in port ${parameters.port} on ${parameters.env} --------------`,
);
