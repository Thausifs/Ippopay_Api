import { Router } from 'express';
import adminController from '../../controllers/admin/user.controller';

const AdminRouter = Router();
AdminRouter
  .post('/registeradmin', adminController.registeradmin)
  .post('/adminlogin', adminController.adminlogin);
export default AdminRouter;
