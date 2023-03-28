import rateLimit, { MemoryStore } from 'express-rate-limit';
import session from 'express-session';
import connectRedis from 'connect-redis';
import {
  handleResponse, handleError, handleHeaderResponse, ratelimitResponse,
} from './requestHandler';
import { redis } from '../helper/redis';

const RedisStore = connectRedis(session);
const loginRateLimiter = rateLimit({
  windowMs: 10000, // 5 sec  ---> // 15 * 60 * 1000, // 15 minutes
  max: 5, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
  Store: new RedisStore({
    client: redis,
    expired: {
      clear: true,
      intervalMs: 100 * 60 * 60 * 24 * 1, // ms = 7 days
    },
  }), //  new MemoryStore()
  handler(req, res /* next */) {
    const data = { message: 'IP address sent too many requests . Please wait a while then try again', status: 404 };
    return ratelimitResponse({
      res,
      statusCode: 404,
      data,
    });
  },
}); // build on ddos or brute attack protection

const PasswordverfityRateLimiter = rateLimit({
  windowMs: 5 * 60 * 1000, // 5 sec  ---> // 15 * 60 * 1000, // 15 minutes
  max: 5, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
  Store: new RedisStore({
    client: redis,
    expired: {
      clear: true,
      intervalMs: 100 * 60 * 60 * 24 * 1, // ms = 7 days
    },
  }), //  new MemoryStore()
  handler(req, res /* next */) {
    return ratelimitResponse({
      res,
      statusCode: 404,
      data: { message: 'IP address sent too many requests . Please wait  5 minutes', status: 404 },
    });
  },
}); // build on ddos or brute attack protection

export {
  loginRateLimiter,
  PasswordverfityRateLimiter,
};
