import logger from '../../middlewares/logger';
import UserService from '../../services/user/user.service';
import {
  handleResponse,
  handleError,
  handleHeaderResponse,
} from '../../middlewares/requestHandler';

class UserController {
  async register(req, res) {
    logger.info('inside user register controller');
    try {
      const {
        email, password,
      } = req.body;
      const result = await UserService.registeruser(email, password);
      console.log(result);
      return handleResponse({
        res,
        statusCode: result.status,
        data: result,
      });
    } catch (error) {
      logger.info(`Error from controller user register get ->  ${error}`);
      return handleError({ res, error, data: { message: error.message } });
    }
  }
}

export default new UserController();
