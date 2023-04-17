import logger from '../../middlewares/logger';
import NearbyService from '../../services/nearby/nearby.service';
import {
  handleResponse,
  handleError,
  handleHeaderResponse,
} from '../../middlewares/requestHandler';

class NearbyController {
  async registercompanies(req, res) {
    logger.info('inside nearby services controller');
    try {
      const {
        name, stationtype, noofstations,
        chargertypes, undermaintainance, status, phonenumber,
        email, state, district, area, advancebooking, bankname,
        accountno, panno, ifsccode, unitprice, commisionprice, lattitude, longitude, photos,
      } = JSON.parse(req.body.data);
      console.log(name);
      const image = req.file.path;
      const result = await NearbyService.AddNearbyService(
        name,
        stationtype,
        noofstations,
        chargertypes,
        undermaintainance,
        status,
        phonenumber,
        email,
        state,
        district,
        area,
        advancebooking,
        bankname,
        accountno,
        panno,
        ifsccode,
        unitprice,
        commisionprice,
        lattitude,
        longitude,
        photos,
      );
    } catch (error) {
      return res.status(400).send(error.message);
    }
  }
}
export default new NearbyController();
