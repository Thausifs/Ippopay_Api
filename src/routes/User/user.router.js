import { Router } from 'express';
import userController from '../../controllers/user/user.controller';

const AdminRouter = Router();
AdminRouter

  .post('/register', userController.register);

export default AdminRouter;
