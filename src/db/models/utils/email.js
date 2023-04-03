import { Schema, model } from 'mongoose';

const emailSchema = new Schema({
  email: { type: String },
  subject: {
    type: String,
  },
  name: { type: String },
  message: { type: String },
}, { timestamps: true });

export default model('email', emailSchema);
