import net from 'net';

const ip = '127.0.0.1';
const port = 5000;

const socket = new net.Socket();

socket.connect({ host: ip, port }, () => {
  socket.write('hi, I`m client');
  socket.on('data', (chunk) => {
    console.log('From server: ', chunk.toString());
  });

  socket.on('end', () => {
    console.log('Disconnected!');
  });
});

process.stdin.resume();

process.stdin.on('data', (data) => {
  socket.write(data)
});