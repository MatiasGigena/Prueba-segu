import jwt from 'jsonwebtoken';
import users from '../../../data/users.json';

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { username, password } = req.body;

    // Busca al usuario en el archivo JSON
    const user = users.find((u) => u.username === username);
    if (!user) {
      return res
        .status(401)
        .json({ message: 'Usuario no encontrado' });
    }

    if (password !== user.password) {
      return res
        .status(401)
        .json({ message: 'Contraseña incorrecta' });
    }

    const token = jwt.sign(
      { id: user.id, role: user.role },
      'secretKey',
      { expiresIn: '1h' }
    );

    res.status(200).json({ token });
  } else {
    res
      .status(405)
      .json({ message: 'Método no permitido' });
  }
}
