import {
  handleResponse,
  handleError,
  handleHeaderResponse,
} from '../../middlewares/requestHandler';
import logger from '../../middlewares/logger';
import { Stations } from '../../db/models';

class NearbyService {
  async AddNearbyService(
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
  ) {
    logger.info('inside nearby create service');
    try {
      const station = await Stations.findOne({ email });
      console.log(station);
      if (station) {
        return {
          message: 'Station already found with same email id ',
          status: 400,

        };
      }
      const create = await Stations.create({
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
        stations,
      });
      console.log(create);
      return {
        message: 'station created sucessfully',
        status: 200,
        data: create,
      };
    } catch (error) {
      logger.error(error);
      // console.log(error);
      throw error;
    }
  }

  async EditNearbyService(
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
  ) {
    logger.info('inside nearby edit service');
    try {
      const station = await Stations.findOne({ email });
      console.log(station);
      if (station === null || !station) {
        return {
          message: 'Station not found with the same email id ',
          status: 400,

        };
      }
      const Edit = await Stations.findOneAndUpdate({
        email,
      }, {
        $set: {
          name,
          stationtype,
          noofstations,
          chargertypes,
          undermaintainance,
          status,
          phonenumber,
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
        },
      });

      return {
        message: 'station updated sucessfully',
        status: 200,
        data: Edit,
      };
    } catch (error) {
      logger.error(error);
      // console.log(error);
      throw error;
    }
  }
}

export default new NearbyService();
