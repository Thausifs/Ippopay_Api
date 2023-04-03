import moment from 'moment-timezone';
import {
  handleResponse,
  handleError,
  handleHeaderResponse,
} from '../../middlewares/requestHandler';
import logger from '../../middlewares/logger';
import { Email } from '../../db/models';

class UtilsService {
  async sendemails(email, name, message) {
    try {
      await Email.create({ email, name, message });
    } catch (error) {
      logger.error(error);
      throw error;
    }
  }
}

export default new UtilsService();
