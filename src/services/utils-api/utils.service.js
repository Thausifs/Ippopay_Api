import moment from 'moment-timezone';
import {
  handleResponse,
  handleError,
  handleHeaderResponse,
} from '../../middlewares/requestHandler';
import logger from '../../middlewares/logger';
import { Emails } from '../../db/models';
import { sentmail } from '../../helper/nodemailer';
import { blogemail } from '../../template/blogemail';

class UtilsService {
  async sendemails(email, name, message) {
    try {
      const result = await sentmail(
        email,
        'Request Queries',
        await blogemail(name, email, message),

      );
      if (result.status === 200) {
        const responseemail = await Emails.create({ email, name, message });
        return {
          message: result.message,
          status: 200,
          data: responseemail,
        };
      }
      return {
        message: result.message,
        status: 400,
      };
    } catch (error) {
      logger.error(error);
      throw error;
    }
  }
}

export default new UtilsService();
