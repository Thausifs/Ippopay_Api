import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import http from 'http';
import compression from 'compression';
import createError from 'http-errors';

import mongoose from 'mongoose';

import routes from './routes/index';
// import { setupConnection } from './models/db.connect';
import { handleError } from './middlewares/requestHandler';
import logger from './middlewares/logger';

// import morgan from 'morgan';
const morgan = require('morgan');
// const numCpu = os.cpus().length;

require('dotenv').config();

// const file = 'image';

// if (!fs.existsSync(file)) {
//   fs.mkdirSync(file);
// }
const app = express();
app.use(
  compression({
    level: 6,
    threshold: 10 * 1000,
    filter: (req, res) => {
      if (req.headers['x-no-compression']) {
        return false;
      }
      return compression.filter(req, res);
    },
  }),
);

// const app = http2Express(express);
const port = process.env.PORT || 9000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(helmet());

app.use((req, res, next) => {
  res.setHeader('X-XSS-Protection', '1; mode=block');
  res.setHeader('Surrogate-Control', 'no-store');
  res.setHeader(
    'Cache-Control',
    'no-store, no-cache, must-revalidate, proxy-revalidate',
  );
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');
  next();
});

const corsOptions = {
  origin: ['http://localhost:3000', 'http://52.76.62.147:3000', 'http://52.76.62.147:3001', 'http://chopeai.com', 'http://admin.chopeai.com', 'https://chopeai.com', 'https://admin.chopeai.com', 'https://master--musical-faloodeh-748c0f.netlify.app', 'http://54.255.243.154:3000',
  ],
  optionsSuccessStatus: 200, // For legacy browser support
  methods: 'GET, HEAD, PUT, PATCH, POST, DELETE',
  credentials: true,
};

app.use(cors(corsOptions));
app.use(morgan('tiny')); // adding morgan to log HTTP requests


// (async () => {
//   try {
//     await setupConnection();
//   } catch (error) {
//     console.error(error);
//     process.exit(1);
//   }
// })();

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind = typeof port === 'string' ? `Pipe ${port}` : `Port ${port}`;

  // handle specific listen errors with friendly messages

  switch (error.code) {
    case 'EACCES':
      logger.error(`🔴 ${bind} requires elevated privileges`);
      process.exit(1);
    case 'EADDRINUSE':
      logger.error(`🔴 ${bind} is already in use`);

      process.exit(1);
    default:
      throw error;
  }
}
// function onListening() {
//   const addr = server.address();
//   const bind = typeof addr === 'string' ? `pipe ${addr}` : `port ${addr.port}`;
//   debug(`Listening on ${bind}`);
// }

// app.get('/killserver/1234', async (req, res) => {
//   res.send(`ok... ${process.pid}`);
//   cluster.worker.kill(); //  // server cluster
// });

routes.initializeRoutes(app);
// app.get('/test', async (req, res) => {
//   const payload = 'faster than test apppppp';
//   res.send(payload.repeat(10000));
// });

app.statusMessageOn404 = false; // reason insert to certificate process
app.use(async (req, res, next) => {
  next(createError.NotFound('This router does not exist'));
});

app.use((err, req, res, next) => handleError({
  res,
  statusCode: err.status || 500,
  data: {
    status: err.status || 500,
    message: err.message,
  },
}));

// const options = {
//   key: fs.readFileSync(path.join(__dirname, '../security/server.key')),
//   cert: fs.readFileSync(path.join(__dirname, '../security/server.crt')),
//   allowHTTP1: true,
// };
// const server = http.createSecureServer(options, app);

const server = http.createServer(app);

const host = process.env.HOST_URL || 'http://localhost';
// if (cluster.isPrimary) {
//   for (let i = 0; i < 1; i++) { //  // server cluster
//     logger.info(`🗜️ cluster fork running ${i}`);
//     cluster.fork();
//   }
//   cluster.on('exit', (worker, code, signal) => {
//     logger.info(`worker ${worker.process.pid} died`); //  // server cluster
//     cluster.fork();
//   });
// } else
if (process.env.NODE_ENV !== 'test') {
  server.listen(
    port,
    async () => {
      logger.info(`🚀 Running on ${process.pid} @ ${host}:${port}`);
    //  await setupConnection(); // database connection
    },
  );
  server.on('error', onError);
// server.on('listening', onListening); function not working proper
} // http protocols

//= ==============socket=====================//
// const io = new Server(server, { cors: corsOptions }); // socket connection

process.on('SIGINT', () => {
  // grace shutdown
  logger.info('✔️  SIGINT received');
  server.close(() => {
    logger.info('✔️  Server is close...');
    mongoose.connection.close(false, () => {
      process.exit(0);
    });
  });
});

process.on('SIGTERM', () => {
  logger.info('✔️  SIGTERM received');
  server.close(() => {
    logger.info('✔️  Server is close...');
    mongoose.connection.close(false, () => {
      process.exit(0);
    });
  });
});
