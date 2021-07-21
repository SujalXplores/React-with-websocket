const socket = require('socket.io');
const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

const port = 8000;
const server = app.listen(port);

const io = socket(server);

io.on('connection', (client) => {
  client.on('subscribeToTimer', (interval) => {
    console.log('client is subscribing to timer with interval ', interval);
    setInterval(() => {
      client.emit('timer', new Date());
    }, interval);
  });
});
