import { Schema, model } from 'mongoose';

const ForgetpassSchema = new Schema(
  {

    email: { type: String },
    mobileotp: { type: String },
    emailotp: { type: String },
    status: { type: String },

  },

);
export default model('forgetpass', ForgetpassSchema);
