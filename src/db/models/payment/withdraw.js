import { Schema, model } from 'mongoose';

const withdrawSchema = new Schema(
  {

    email: { type: String },
    orderid: { type: String },
    orderamt: { type: String },
    status: { type: String },

  },

);
export default model('withdraws', withdrawSchema);
