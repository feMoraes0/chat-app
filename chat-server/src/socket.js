const socketio = require('socket.io');

const users = [];

exports.setupWebSocket = (server) => {
  const io = socketio(server);

  io.on('connect', (socket) => {
    const { name } = socket.handshake.query;

    const user = {
      name,
      id: socket.id,
    };

    users.push(user);

    io.emit('users', users);
    socket.emit('user', user);

    socket.on('disconnect', () => {
      users.map((element, index) => {
        if (element.id === socket.id) {
          users.splice(index, 1);
          return '';
        }
        return '';
      });

      io.emit('users', users);
    });

    socket.on('message', (parameters) => {
      // eslint-disable-next-line no-shadow
      const { id, name, message } = parameters;

      const msg = {
        type: 'msg',
        id,
        name,
        message,
      };

      io.emit('chat', msg);
    });
  });
};
