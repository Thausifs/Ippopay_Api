import { log } from 'winston';
import bcrypt from 'bcryptjs';
import { Admins, users } from '../../db/models';
import Users from '../../db/models/user/user';
import logger from '../../middlewares/logger';
import admin from '../../db/models/admin/admin';
import {
  handleResponse,
  handleError,
  handleHeaderResponse,
} from '../../middlewares/requestHandler';
import utilsService from '../utils-api/utils.service';

class AdminService {
  async usertests() {
    logger.info('inside user test service');
    try {
      const emailonly = 'ss';

      return {
        message: 'successfully fetch employee email',
        data: emailonly,
        status: 200,
      };
    } catch (error) {
      logger.error(error);
      throw error;
    }
  }

  async loginuser(email, password) {
    logger.info('inside user login service');
    try {
      const user = await users.findOne({ email });
      if (!user) {
        return {
          message: 'username/email  not found',
          data: { email, password },
          status: 404,
        };
      }
      const match = await bcrypt.compare(password, user.password);

      if (match === true) {
        return {
          message: 'User login sucessful ',
          data: { email, password },
          status: 200,
        };
      }

      return {
        message: 'password  not matched',
        status: 404,
      };
    } catch (error) {
      logger.error(error);
      // console.log(error);
      throw error;
    }
  }

  async registeruser(email, password, mobileno, veh_company, veh_model, chargertype, chasenumber) {
    logger.info('inside user login service');
    try {
      const user = await users.findOne({ email });
      if (user) {
        return {
          message: 'user already found with same email id',
          status: 404,
        };
      }

      const create = await Users.create({
        email, password, mobileno, veh_company, veh_model, chargertype, chasenumber,
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

  async setpin(mailid, pin) {
    logger.info('inside user setpin service');
    try {
      const userupdate = await users.findOneAndUpdate({ email: mailid }, {
        $set: {
          pin,
        },
      }, { new: true });
      if (!userupdate) {
        return {
          message: 'User is not registered',
          status: 404,
        };
      }
      return {
        message: 'User pin set',
        status: 200,
      };
    } catch (error) {
      logger.error(error);
      throw error;
    }
  }

  async forgotpassword(email) {
    logger.info('inside user forgot password service');
    try {
      const user = await users.findOne({ email });
      if (!user) {
        return {
          message: 'User is not registered',
          status: 404,
        };
      }

      const otp = Math.random().toString(36).slice(-8);
      const { name } = user.email;
      const message = `Your otp for changing password is ${otp}`;
      const result = await utilsService.sendemails(email, name, message);

      return {
        message: result.message,
        status: result.status,
        result: result.data,
      };
    } catch (error) {
      logger.error(error);
      throw error;
    }
  }

  async registeradmin(email, password, type, username) {
    logger.info('inside admin login service');
    try {
      const admin = await Admins.findOne({ email });
      if (admin) {
        return {
          message: 'admin already found with same email id',
          status: 404,
        };
      }
      const salt = await bcrypt.genSalt(10);
      password = await bcrypt.hash(password, salt);
      const create = await Admins.create({
        email, password, type, username,

      });

      return {
        message: 'successfully admin Registered',
        data: create,
        status: 200,
      };
    } catch (error) {
      logger.error(error);
      throw error;
    }
  }

  async loginadmin(email, password) {
    logger.info('inside admin login service');
    try {
      const user = await Admins.findOne({ email });
      if (!user) {
        return {
          message: 'username/email  not found',
          data: { email, password },
          status: 404,
        };
      }
      const match = await bcrypt.compare(password, user.password);

      if (match === true) {
        return {
          message: 'Employee login sucessful ',
          data: { email, password },
          status: 200,
        };
      }

      return {
        message: 'password  not matched',
        status: 404,
      };
    } catch (error) {
      logger.error(error);
      // console.log(error);
      throw error;
    }
  }
}

export default new AdminService();
