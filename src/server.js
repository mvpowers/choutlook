const io = require('socket.io')();

/* eslint-disable no-console */

io.on('connection', client => {
  client.on('createMessage', msg => {
    console.log(msg);
    client.broadcast.emit('broadcastMessage', msg);
  });
});

const port = 3001;
io.listen(port);
console.log('listening on port', port);
