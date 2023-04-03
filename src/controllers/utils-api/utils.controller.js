import moment from 'moment-timezone';
import {
  handleResponse,
  handleError,
  handleHeaderResponse,
} from '../../middlewares/requestHandler';
import logger from '../../middlewares/logger';
import UtilsService from '../../services/utils-api/utils.service';

class Utils {
  async sendemail(req, res) {
    try {
      const { email, name, message } = req.body;
      const result = await UtilsService.sendemails(email, name, message);
      return handleResponse({
        res,
        statusCode: result.status,
        data: result,
      });
    } catch (error) {
      logger.info(` Error from controller email ->  ${error}`);
      return handleError({ res, error, data: { message: error.message } });
    }
  }
}

export default new Utils();
