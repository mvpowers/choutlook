/* eslint-disable no-console */
const io = require('socket.io')();
require('dotenv').config();

const port = process.env.SERVER_PORT || 3001;
let userCount = 0;

io.on('connection', client => {
  userCount += 1;
  console.log('connect', userCount);
  client.emit('broadcastUserCount', userCount);

  client.on('createMessage', msg => {
    console.log(msg);
    client.emit('broadcastMessage', msg);
  });

  client.on('disconnect', () => {
    userCount -= 1;
    console.log('disconnected, userCount');
    client.emit('broadcastUserCount', userCount);
  });
});

io.listen(port);

console.log('Listening on port', port);
if (!process.env.SERVER_PORT) {
  console.log('You are currently using the default server port');
}
