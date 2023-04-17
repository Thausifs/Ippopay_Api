import logger from '../../middlewares/logger';
import AdminService from '../../services/admin/user.service';
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

  async login(req, res) {
    logger.info('inside login controller');
    try {
      const { email, password } = req.body;
      const result = await AdminService.loginuser(email, password);
      return handleResponse({
        res,
        statusCode: result.status,
        data: result,
      });
    } catch (error) {
      logger.info(`Error from controller user login get ->  ${error}`);
      return handleError({ res, error, data: { message: error.message } });
    }
  }

  async settingpin(req, res) {
    logger.info('inside setpin controller');
    try {
      const { mailid, pin } = req.body;
      const result = await AdminService.setpin(mailid, pin);
      return handleResponse({
        res,
        statusCode: result.status,
        data: result,
      });
    } catch (error) {
      logger.info(`Error from controller user login get ->  ${error}`);
      return handleError({ res, error, data: { message: error.message } });
    }
  }

  async fgtpass(req, res) {
    logger.info('inside forgotpass controller');
    try {
      const { email } = req.body;
      const result = await AdminService.forgotpassword(email);
      console.log(result);
      return handleResponse({
        res,
        statusCode: result.status,
        data: result,
      });
    } catch (error) {
      logger.info(`Error from controller user forgot password get ->  ${error}`);
      return handleError({ res, error, data: { message: error.message } });
    }
  }

  async register(req, res) {
    logger.info('inside register controller');
    try {
      const {
        email, password, mobileno, veh_company, veh_model, chargertype, chasenumber,
      } = req.body;
      const result = await AdminService.registeruser(
        email,
        password,
        mobileno,
        veh_company,
        veh_model,
        chargertype,
        chasenumber,
      );
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

  async registeradmin(req, res) {
    logger.info('inside admin register controller');
    try {
      const {
        email, password, type, username,
      } = req.body;
      const result = await AdminService.registeradmin(email, password, type, username);
      return handleResponse({
        res,
        statusCode: result.status,
        data: result,
      });
    } catch (error) {
      logger.info(`Error from controller admin register get ->  ${error}`);
      return handleError({ res, error, data: { message: error.message } });
    }
  }

  async adminlogin(req, res) {
    logger.info('inside adminlogin controller');
    try {
      const { email, password } = req.body;
      const result = await AdminService.loginadmin(email, password);
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
