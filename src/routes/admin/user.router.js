import { Router } from 'express';
import adminController from '../../controllers/admin/user.controller';

const AdminRouter = Router();
AdminRouter
  .get('/get', adminController.usertest);

export default AdminRouter;
