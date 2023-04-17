import { Schema, model } from 'mongoose';
import { isEmail } from 'validator';
import bcrypt from 'bcryptjs';

const userSchema = new Schema(
  {
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

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

export default model('users', userSchema);
