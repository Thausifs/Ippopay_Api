import logger from '../../middlewares/logger';
import AdminService from '../../service/admin/user.service';
import {
  handleResponse,
  handleError,
  handleHeaderResponse,
} from '../../middlewares/requestHandler';

class AdminController {
  async usertest(req, res) {
    logger.info('inside usertest controller');
    try {
      const result = await AdminService.usertests();
      return handleResponse({
        res,
        statusCode: result.status,
        data: result,
      });
    } catch (error) {
      logger.info(`Error from controller admin login get ->  ${error}`);
      return handleError({ res, error, data: { message: error.message } });
    }
  }
}

export default new AdminController();
