import styles from './page.module.scss';
import React from 'react';
import dynamic from 'next/dynamic';
import SmoothScroll from '@/components/smoothScroll';
import Projects from '@/components/projects';
import Login from '@/components/login';
import Navbar from '@/components/nav';
import Footer from '@/components/footer';

const Earth = dynamic(() => import('@/components/earth'), {
  ssr: false,
  loading: () => <img src='/assets/placeholder.png'></img>,
});

export default function Home() {
  return (
    <SmoothScroll>
      <Navbar />
      <main className={styles.main}>
        <Earth />
        <Projects />
      </main>
      <Login />
      <Footer />
    </SmoothScroll>
  );
}
