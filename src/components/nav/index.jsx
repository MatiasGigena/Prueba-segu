import styles from './style.module.scss';

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.content}>
        <p>Segurarse Test Login by Matias Gigena.</p>
        <p>Scroll Down ↓ </p>
      </div>
    </nav>
  );
};
export default Navbar;
