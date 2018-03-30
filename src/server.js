const io = require('socket.io')();

io.on('connection', client => {
  client.on('postMessage', msg => {
    console.log(msg);
    client.emit(msg);
  });
});

const port = 3001;
io.listen(port);
console.log('listening on port', port);
