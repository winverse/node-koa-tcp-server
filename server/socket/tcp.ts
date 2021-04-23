import net from 'net';

const packet = [];

const tcp = net.createServer(socket => {
  socket.on('data', data => {
    if (packet.length < 1) {
      console.log('init');
      packet.push(data);
    }
  });
});

export default tcp;
