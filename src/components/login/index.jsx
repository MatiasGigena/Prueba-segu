'use client';

import styles from './style.module.scss';
import axios from 'axios';
import Button from '../accesibility/Button';
import { useRef, useState } from 'react';
import { useInView, motion } from 'framer-motion';
import {
  animate,
  animate3,
  animate4,
} from '../../animation/anim';
import { useRouter } from 'next/navigation';
import { jwtDecode } from 'jwt-decode';

const Login = () => {
  const router = useRouter();
  const ref = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  const isInView = useInView(ref, { once: true });
  const isInView2 = useInView(ref2, { once: true });
  const isInView3 = useInView(ref3, { once: true });

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [alertMessage, setAlertMessage] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('/api/auth/login', {
        username: email,
        password,
      });

      // Guarda el token en localStorage
      const { token } = response.data;
      localStorage.setItem('token', token);

      // Decodificar el token para verificar el rol
      const decoded = jwtDecode(token);
      console.log('Decoded token after login:', decoded);

      setAlertMessage({
        type: 'success',
        message: 'Login exitoso. Token almacenado.',
      });

      if (decoded.role === 'admin') {
        router.push('/dashboard');
      } else {
        router.push('/home');
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      setAlertMessage({
        type: 'error',
        message: 'Hubo un error al iniciar sesión.',
      });
    }
  };

  return (
    <section className={styles.mainLogin}>
      <div className={styles.secLogin}>
        {alertMessage && (
          <div
            role='alert'
            className={`${styles.alert} ${
              alertMessage.type === 'success'
                ? ''
                : styles.alertError
            }`}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              className={styles.icon}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
              ></path>
            </svg>
            <span>{alertMessage.message}</span>
            <div>
              <button
                onClick={() => {
                  setAlertMessage(null); // Cierra la alerta
                  setEmail(''); // Restablece el campo de email
                  setPassword('');
                }}
                className={styles.button}
              >
                Accept
              </button>
            </div>
          </div>
        )}

        <motion.div
          ref={ref}
          variants={animate}
          initial='initial'
          animate={isInView ? 'open' : 'initial'}
          className={styles.programCard}
        >
          <div className={styles.asterix}>
            <img
              src='/images/Asterix.svg'
              height={'12px'}
              width={'12px'}
              alt='asterisco'
            />
          </div>
          <p className={styles.programText}>
            JOIN THE PROGRAM
          </p>
        </motion.div>

        <motion.h2
          ref={ref2}
          variants={animate3}
          initial='initial'
          animate={isInView2 ? 'open' : 'initial'}
          className={styles.heading}
        >
          Complete Your Application
        </motion.h2>

        <motion.div
          ref={ref3}
          variants={animate4}
          initial='initial'
          animate={isInView3 ? 'open' : 'initial'}
          className={styles.formWrapper}
        >
          <form
            id='form'
            onSubmit={handleSubmit}
            className={styles.form}
          >
            <div className={styles.inputWrapper}>
              <input
                type='email'
                id='email'
                name='email'
                className={styles.input}
                placeholder='Enter Your Email'
                aria-label='Enter Your Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type='password'
                id='password'
                name='password'
                className={styles.input}
                placeholder='Enter Your Password'
                aria-label='Enter Your Password'
                value={password}
                onChange={(e) =>
                  setPassword(e.target.value)
                }
                required
              />
            </div>
            <Button
              buttonText={'Enter the Program Today'}
              type='submit'
            />
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Login;
