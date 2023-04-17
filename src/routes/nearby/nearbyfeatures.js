import { Router } from 'express';
import multer from 'multer';
import NearbyController from '../../controllers/nearby/nearby.controller';

const NearbyRouter = Router();

const Storage = multer.diskStorage({
  destination(req, file, callback) {
    callback(null, './public/images/');
  },
  filename(req, file, callback) {
    callback(null, Date.now() + file.originalname);
  },
});
const fileFilter = (req, file, cb) => {
  // reject a file

  if (
    file.mimetype === 'image/jpeg'
    || file.mimetype === 'image/png'
    || (file.mimetype === 'image/jpg' && file.Size <= 524288)
  ) {
    cb(null, true);
  } else {
    cb(null, false);
    req.session.imgmessage = 'Only JPEG OR PNG images and should be lesser than 2mb ';
  }
};
const upload = multer({
  storage: Storage,
  limits: {
    fileSize: 1024 * 1024 * 2, // 2mb upload
  },
  fileFilter,
});

NearbyRouter
  .post('/addcompanies', upload.single('image'), NearbyController.registercompanies);
// .post('/addcafes', NearbyController.adminlogin);
export default NearbyRouter;
