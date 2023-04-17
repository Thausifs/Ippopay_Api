import { Router } from 'express';
import adminController from '../../controllers/admin/user.controller';

const AdminRouter = Router();
AdminRouter
  .get('/get', adminController.usertest)
  .post('/login', adminController.login)
  .post('/register', adminController.register)
  .post('/setpin', adminController.settingpin)
  .post('/fgtpassword', adminController.fgtpass);

export default AdminRouter;
