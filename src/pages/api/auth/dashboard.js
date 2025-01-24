import { verifyToken, isAdmin } from './check';

export default function handler(req, res) {
  verifyToken(req, res, () => {
    isAdmin(req, res, () => {
      res
        .status(200)
        .json({
          message:
            'Bienvenido al dashboard de administrador',
        });
    });
  });
}
