import { log } from 'winston';
import bcrypt from 'bcryptjs';
import users from '../../db/models/user/user';
import logger from '../../middlewares/logger';
import {
  handleResponse,
  handleError,
  handleHeaderResponse,
} from '../../middlewares/requestHandler';
import user from '../../db/models';

class UserService {
  async registeruser(email, password) {
    logger.info('inside user registration service');
    try {
      const admin = await users.findOne({ email });
      if (admin) {
        return {
          message: 'user already found with same email id',
          status: 404,
        };
      }
      const salt = await bcrypt.genSalt(10);
      password = await bcrypt.hash(password, salt);
      const create = await users.create({
        email, password,

      });

      return {
        message: 'successfully user Registered',
        data: create,
        status: 200,
      };
    } catch (error) {
      logger.error(error);
      throw error;
    }
  }
}

export default new UserService();
