import logger from '../../middlewares/logger';


class AdminService {
    async usertests() { 
        logger.info('inside user test service')
        try {
             const emailonly = 'ss'
  
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
 }



export default new AdminService();
