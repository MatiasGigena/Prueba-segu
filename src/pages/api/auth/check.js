import jwt from 'jsonwebtoken';

export const verifyToken = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1];

  if (!token) {
    return res
      .status(403)
      .json({ message: 'No se proporcionó token' });
  }

  jwt.verify(token, 'secretKey', (err, decoded) => {
    if (err) {
      return res
        .status(403)
        .json({ message: 'Token inválido' });
    }

    req.user = decoded;
    next();
  });
};

export const isAdmin = (req, res, next) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({
      message: 'Acceso denegado: no eres administrador',
    });
  }

  next();
};
