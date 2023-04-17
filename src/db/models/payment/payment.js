import { Schema, model } from 'mongoose';
import { isEmail } from 'validator';

const paymentSchema = new Schema(
  {

    email: { type: String },
    state: { type: String },
    chargertype: { type: String },
    paystatus: { type: String },
    stationname: { type: String },
    stationid: { type: Number },
    orderid: { type: String },
    upireferid: { type: String },
  },

);
export default model('payments', paymentSchema);
