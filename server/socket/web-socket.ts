import App from '../app';

const { app } = new App();

app.on('request', req => {
  const connection = req.accept('echo-protocol', req.origin);
  console.log(new Date() + ' Connection accepted.');
});
