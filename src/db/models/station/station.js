import { Schema, model } from 'mongoose';

const StationSchema = new Schema(
  {
    type: { type: String },
    name: { type: String },
    phoneno: { type: Number },
    email: { type: String },
    ceoname: { type: String },
    ceophoneno: { type: Number },
    chargertype: { type: String },
    noofstations: { type: Number },
    stations: [
      {
        stationtype: { type: String },
        chargertype: { type: String },
        vehtype: { enum: ['Bike', 'Car'] },
      },
    ],
    advancebookingno: { type: Number },
    status: { enum: ['Active', 'InActive'] },
    state: { type: String },
    district: { type: String },
    area: { type: String },
    bankname: { type: String },
    vechiclestype: { type: String },
    panno: { type: String },
    accountno: { type: Number },
    ifsccode: { type: String },
    photos: [{ type: String }],
    lattitude: { type: Number },
    longitude: { type: Number },

  },

);
export default model('stations', StationSchema);
