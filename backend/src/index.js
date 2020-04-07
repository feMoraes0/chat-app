const express = require('express');
const http = require('http');
const { setupWebSocket } = require('./socket');

const app = express();
const server = http.Server(app);

setupWebSocket(server);

app.get('/', (request, response) => response.json({ message: 'Server running' }));

server.listen(3333);
