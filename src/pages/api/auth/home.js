// pages/api/home.js
import { verifyToken } from './check';

export default function handler(req, res) {
  verifyToken(req, res, () => {
    res
      .status(200)
      .json({
        message: `Bienvenido a la página de inicio, ${req.user.username}`,
      });
  });
}
