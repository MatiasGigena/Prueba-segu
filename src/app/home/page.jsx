'use client';

import styles from './style.module.scss';
import withAuth from '../authComponent/withAuth';

const Home = () => {
  return <h1 className={styles.title}>Home Dashboard</h1>;
};
export default withAuth(Home);
