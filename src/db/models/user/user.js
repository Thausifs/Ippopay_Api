import { Schema, model } from 'mongoose';
import { isEmail } from 'validator';

const userSchema = new Schema(
  {
    user_id: { type: String },
    name: { type: String },
    gender: { type: String, enum: ['Male', 'Female'] },
    email: {
      type: String,
      require: true,
      required: 'Email address is required',
      validate: [isEmail, 'invalid email'],
    },
    mobileno: { type: String },
    password: { type: String, unique: true },
    veh_company: { type: String },
    veh_model: { type: String },
    chargertype: { type: String },
    chasenumber: { type: String },
    fulldetails: { type: Boolean, default: false },
    status: { type: String, enum: ['Active', 'Blocked'], default: 'Active' },
    fullname: { type: String },
    dob: { type: String },
    photos: [
      {
        type: String,
      },
    ],
    pin: { type: Number },
    area: { type: String },
    district: { type: String },
    state: { type: String },
    veh_insurance: [
      {
        type: String,
      },
    ],
    walletbal: {
      type: Number,
      default: 0,
    },
  },
);
export default model('users', userSchema);
