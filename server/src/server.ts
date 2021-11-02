import http from 'http';

import config from './config';
import app from './api/app';

app.set('port', config.PORT);

const server = http.createServer(app);

server.listen(config.PORT);
server.on('error', onError);
server.on('listening', onListening);

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error: { syscall: string; code: unknown }): void {
  if (error.syscall !== 'listen') {
    throw error;
  }

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(`${config.PORT} requires elevated privileges`);
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(`${config.PORT} is already in use`);
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening(): void {
  const addr = server.address();
  const bind = addr ? (typeof addr === 'string' ? 'pipe ' + addr : `port ${addr.address} : ${addr.port}`) : '';
  console.log(`Server Listening on ${bind}`);
}

export default server;
