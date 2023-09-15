const http = require('http');
const app = require('./app');

const port = process.env.PORT || 4200;
const server = http.createServer(app);
console.log('listen on', port)
server.listen(port);