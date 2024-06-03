import { AddressInfo } from "net";
import app from "./app";
import dotenv from 'dotenv';
import process from 'process';
import winston from 'winston';

// Load environment variables from .env file
dotenv.config();

// Configure logging
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.simple()
  ),
  transports: [
    new winston.transports.Console()
  ],
});

// Define the port with a fallback
const port = Number(process.env.PORT) || 3003;

// Start the server
const server = app.listen(port, '0.0.0.0', () => {
  const address = server.address();

  if (address && typeof address === 'object' && address !== null) {
    const { port } = address as AddressInfo;
    logger.info(`Server is up & listening at http://localhost:${port}...`);
  } else {
    logger.error('Failed to retrieve server address.');
  }
});

// Handle server errors
server.on('error', (error: NodeJS.ErrnoException) => {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind = typeof port === 'string' ? `Pipe ${port}` : `Port ${port}`;

  // Handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      logger.error(`${bind} requires elevated privileges`);
      process.exit(1);
      break;
    case 'EADDRINUSE':
      logger.error(`${bind} is already in use`);
      process.exit(1);
      break;
    default:
      throw error;
  }
});

// Graceful shutdown
const shutdown = () => {
  logger.info('Shutting down server...');
  server.close((err) => {
    if (err) {
      logger.error('Error during shutdown', err);
      process.exit(1);
    }
    logger.info('Server closed');
    process.exit(0);
  });
};

// Listen for termination signals
process.on('SIGTERM', shutdown);
process.on('SIGINT', shutdown);
