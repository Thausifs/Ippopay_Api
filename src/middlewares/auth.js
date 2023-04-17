import jwt from 'jsonwebtoken';
// import { handleError, handleResponse } from './requestHandler';

require('dotenv').config();

export async function genAccessToken(id, role) { // refresh token
  const AccessToken = jwt.sign({ id, role }, process.env.Access_Token, { // acccess token
    expiresIn: '1h',
  });

  return AccessToken;
}

export async function genrefreshToken(id, role) {
  const RefreshToken = jwt.sign({ id, role }, process.env.Refresh_Token, {
    expiresIn: '20d',
  });
  return RefreshToken;
}