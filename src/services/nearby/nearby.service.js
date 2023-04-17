import {
  handleResponse,
  handleError,
  handleHeaderResponse,
} from '../../middlewares/requestHandler';
import logger from '../../middlewares/logger';

class NearbyService {
  async AddNearbyService(req, res) {
    logger.info('inside nearby services service');
    try {
      console.log(req);
    } catch (error) {
      logger.error(error);
      // console.log(error);
      throw error;
    }
  }
}

export default new NearbyService();
