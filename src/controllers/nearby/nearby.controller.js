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
        accountno, panno, ifsccode, unitprice, commisionprice, lattitude, longitude, stations,
      } = JSON.parse(req.body.data);
      // console.log(name);
      const image = req.file;
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
        image,
        stations,
      );
      return handleResponse({
        res,
        statusCode: result.status,
        data: result,
      });
    } catch (error) {
      return res.status(400).send(error.message);
    }
  }

  async EditStations(req, res) {
    logger.info('inside nearby services controller');
    try {
      const {
        name, stationtype, noofstations,
        chargertypes, undermaintainance, status, phonenumber,
        email, state, district, area, advancebooking, bankname,
        accountno, panno, ifsccode, unitprice, commisionprice, lattitude, longitude, stations,
      } = JSON.parse(req.body.data);
      // console.log(name);
      const image = req.file;
      const result = await NearbyService.EditNearbyService(
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
        image,
        stations,
      );
      return handleResponse({
        res,
        statusCode: result.status,
        data: result,
      });
    } catch (error) {
      return res.status(400).send(error.message);
    }
  }
}
export default new NearbyController();
