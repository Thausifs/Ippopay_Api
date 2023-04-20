import { Router } from 'express';
import multer from 'multer';
import NearbyController from '../../controllers/nearby/nearby.controller';

const NearbyRouter = Router();

const Storage = multer.memoryStorage();
const fileFilter = (req, file, cb) => {
  // reject a file
  if (file.mimetype.split('/')[0] === 'image') {
    cb(null, true);
  } else {
    cb(new multer.MulterError('LIMIT_UNEXPECTED_FILE'), false);
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
  .post('/addcompanies', upload.single('image'), NearbyController.registercompanies)
  .post('/editstations', upload.single('image'), NearbyController.EditStations);

// .post('/addcafes', NearbyController.adminlogin);
export default NearbyRouter;
