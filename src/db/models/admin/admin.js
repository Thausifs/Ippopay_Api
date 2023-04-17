import { Schema, model } from 'mongoose';
import { isEmail } from 'validator';

const adminSchema = new Schema(
  {
    admin_id: { type: Schema.Types.ObjectId },
    email: { type: String },
    password: { type: String },
    username: { type: String },
    type: { type: String },
  },

);
export default model('admins', adminSchema);
