import { Schema, model } from 'mongoose';
import { isEmail } from 'validator';

const adminSchema = new Schema(
  {
    email: { type: String },
    password: { type: String },
    username: { type: String },
    type: { type: String },
  },

);
export default model('admins', adminSchema);
