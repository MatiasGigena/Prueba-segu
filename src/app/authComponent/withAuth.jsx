'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { jwtDecode } from 'jwt-decode';

const withAuth = (WrappedComponent) => {
  return (props) => {
    const router = useRouter();

    useEffect(() => {
      const checkAuth = async () => {
        const token = localStorage.getItem('token');
        if (!token) {
          console.log(
            'No token found, redirecting to login'
          );
          router.push('/');
        } else {
          try {
            const response = await fetch(
              '/api/auth/dashboard',
              {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              }
            );

            if (response.status === 403) {
              console.log(
                'Access denied by the server, redirecting to home'
              );
              router.push('/home');
            } else if (response.ok) {
              const decoded = jwtDecode(token);
              console.log('Decoded token:', decoded);

              if (
                router.pathname === '/dashboard' &&
                decoded.role !== 'admin'
              ) {
                console.log(
                  'User is not admin, redirecting to home'
                );
                router.push('/home');
              } else {
              }
            } else {
              console.error(
                'Unexpected response status:',
                response.status
              );
              router.push('/');
            }
          } catch (err) {
            console.error(
              'Token verification failed:',
              err
            );
            router.push('/');
          }
        }
      };

      // Verificar el token al montar el componente
      checkAuth();

      // Verificar el token cada vez que se cambie el token en localStorage
      window.addEventListener('storage', checkAuth);
      return () => {
        window.removeEventListener('storage', checkAuth);
      };
    }, [router]);

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
