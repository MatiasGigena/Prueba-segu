import { verifyToken, isAdmin } from '../auth/check';
import users from '../../../data/users.json';
import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  if (req.method === 'DELETE') {
    verifyToken(req, res, () => {
      isAdmin(req, res, () => {
        const { id } = req.query; // Obtener el ID como string

        // Verificar que el admin no se intente eliminar a sí mismo
        if (req.user.id === id) {
          return res.status(403).json({
            message:
              'No puedes eliminar al usuario logueado.',
          });
        }

        const userIndex = users.findIndex(
          (user) => user.id === id
        );

        if (userIndex === -1) {
          return res
            .status(404)
            .json({ message: 'Usuario no encontrado' });
        }

        // Eliminar el usuario de la lista
        users.splice(userIndex, 1);

        // Guardar los cambios en el archivo JSON
        const filePath = path.join(
          process.cwd(),
          'src',
          'data',
          'users.json'
        ); // Ajuste de la ruta al archivo

        try {
          fs.writeFileSync(
            filePath,
            JSON.stringify(users, null, 2)
          );
          return res.status(200).json({
            message: 'Usuario eliminado correctamente',
          });
        } catch (err) {
          return res
            .status(500)
            .json({ message: 'Internal server error' });
        }
      });
    });
  } else {
    res
      .status(405)
      .json({ message: 'Método no permitido' });
  }
}
