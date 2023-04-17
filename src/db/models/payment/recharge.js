import { Schema, model } from 'mongoose';

const rechargeSchema = new Schema(
  {
    email: { type: String },
    orderid: { type: String },
    upireferid: { type: String },
    paystatus: { type: String },
    payamt: { type: Number },
  },

);
export default model('recharges', rechargeSchema);
