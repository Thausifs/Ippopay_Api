import { Schema, model } from 'mongoose';
import { isEmail } from 'validator';
import bcrypt from 'bcryptjs';

const userSchema = new Schema(
  {
    email: { type: String },
    password: { type: String, unique: true },

  },
);

export default model('users', userSchema);
