import moment from 'moment-timezone';
import {
  handleResponse,
  handleError,
  handleHeaderResponse,
} from '../../middlewares/requestHandler';
import logger from '../../middlewares/logger';
import { Email } from '../../db/models';
import { sentmail } from '../../helper/nodemailer';
import { blogemail } from '../../template/blogemail';

class UtilsService {
  async sendemails(email, name, message) {
    try {
      await sentmail(
        'Hindustanchargers@gmail.com',
        'Request Queries',
        await blogemail(name, email, message),
      );
      const responseemail = await Email.create({ email, name, message });
      return {
        message: 'sucessfully send the email',
        status: 200,
        response: responseemail,
      };
    } catch (error) {
      logger.error(error);
      throw error;
    }
  }
}

export default new UtilsService();
