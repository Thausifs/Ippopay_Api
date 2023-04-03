import { Router } from 'express';
import utilsController from '../../controllers/utils-api/utils.controller';

const UtilsRouter = Router();
UtilsRouter
  .post('/sendemail', utilsController.sendemail);

export default UtilsRouter;
