import { Schema, model } from 'mongoose';

const sessionSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'users',
  },
  accsessToken: {
    type: String,
    requaired: true,
  },
  refreshToken: {
    type: String,
    requaired: true,
  },
  accsessTokenValidUntil: {
    type: Date,
    requaired: true,
  },
  refreshTokenvalidUntil: {
    type: Date,
    requaired: true,
  },
});

export const SessionsCollection = model('sessions', sessionSchema);
