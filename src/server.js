/* eslint-disable no-console */
const config = require('./config');
const io = require('socket.io')();

const port = config.SERVER_PORT || '3001';

io.on('connection', client => {
  client.broadcast.emit('userConnect');

  client.on('createMessage', msg => {
    console.log(msg);
    client.emit('broadcastMessage', msg);
    client.broadcast.emit('broadcastMessage', msg);
  });

  client.on('disconnect', () => {
    client.broadcast.emit('userDisconnect');
  });
});

io.listen(port);

console.log('Listening on port', port);
if (!config.SERVER_PORT) {
  console.log('You are currently using the default server port');
}
