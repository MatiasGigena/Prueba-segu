// pages/api/users.js
import { verifyToken, isAdmin } from './auth/check';
import users from '../../data/users.json';

export default function handler(req, res) {
  verifyToken(req, res, () => {
    isAdmin(req, res, () => {
      res.status(200).json(users);
    });
  });
}
