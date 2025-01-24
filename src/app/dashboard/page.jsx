'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import withAuth from '../authComponent/withAuth';
import styles from './style.module.scss';
import { jwtDecode } from 'jwt-decode';

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [alertMessage, setAlertMessage] = useState(null);
  const [loggedInUserId, setLoggedInUserId] =
    useState(null);

  useEffect(() => {
    // Obtener el ID del usuario logueado
    const token = localStorage.getItem('token');
    const decoded = jwtDecode(token);
    setLoggedInUserId(decoded.id);
    console.log('Logged in user ID:', decoded.id); // Corregir el console.log

    // Fetch all users
    const fetchUsers = async () => {
      try {
        const response = await axios.get('/api/users', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  const handleDelete = async (userId) => {
    const token = localStorage.getItem('token');

    if (userId === loggedInUserId) {
      setAlertMessage({
        type: 'error',
        message: 'No puedes eliminar tu propio usuario.',
      });
      return;
    }

    try {
      await axios.delete(`/api/user/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // Remove user from state
      setUsers(users.filter((user) => user.id !== userId));

      setAlertMessage({
        type: 'success',
        message: 'Usuario eliminado correctamente.',
      });
    } catch (error) {
      console.error('Error eliminando usuario:', error);
      setAlertMessage({
        type: 'error',
        message: 'Hubo un error al eliminar el usuario.',
      });
    }
  };

  return (
    <div className={styles.adminDashboard}>
      <h1>Admin Dashboard</h1>
      {alertMessage && (
        <div
          role='alert'
          className={
            alertMessage.type === 'success'
              ? styles.alertSuccess
              : styles.alertError
          }
        >
          <span>{alertMessage.message}</span>
        </div>
      )}
      <ul>
        {users
          .filter((user) => user.id !== loggedInUserId)
          .map((user) => (
            <li key={user.id}>
              {user.username}
              <button onClick={() => handleDelete(user.id)}>
                Delete
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default withAuth(AdminDashboard);
