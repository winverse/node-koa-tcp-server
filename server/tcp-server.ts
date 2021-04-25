import net from 'net';

const tcpServer = net.createServer(socket => {
  socket.write('Hello');
  socket.on('data', chunk => {
    console.log('From client: ', chunk.toString());
  });

  socket.on('close', () => {
    console.log('Disconnected!');
  });
});

tcpServer.listen(5000, () => {
  console.log('Tcp server in running');
});
